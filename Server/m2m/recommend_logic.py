# m2m/recommend_logic.py

import pandas as pd
import os
from django.conf import settings

def load_data():
    """
    Loads data from Excel files using a full path.
    This function will be called only once when the server starts.
    """
    try:
        # Construct the full path to the data files
        data_path = os.path.join(settings.BASE_DIR, 'm2m', 'data')
        destinations_file = os.path.join(data_path, 'destination.xlsx')
        place_details_file = os.path.join(data_path, 'place_details.xlsx')

        # Load the destination file
        destinations_df = pd.read_excel(destinations_file)
        destinations_df = destinations_df.applymap(lambda x: x.strip() if isinstance(x, str) else x)
        destinations_df.columns = destinations_df.columns.str.strip().str.title()
        destinations_df['Destination'] = destinations_df['Destination'].str.title()
        destinations_df.set_index('Destination', inplace=True)

        # Load the place details file
        place_info_df = pd.read_excel(place_details_file)
        place_info_df = place_info_df.applymap(lambda x: x.strip() if isinstance(x, str) else x)
        place_info_df.columns = place_info_df.columns.str.strip().str.title()
        place_info_df['Place'] = place_info_df['Place'].str.title()
        place_info_df.drop_duplicates(subset='Place', keep='first', inplace=True)
        place_details_dict = place_info_df.set_index('Place').to_dict('index')

        print("✅ Recommendation data loaded successfully!")
        print("DESTINATIONS_DF columns:", destinations_df.columns.tolist())
        print("PLACE_DETAILS_DICT keys sample:", list(place_details_dict.keys())[:5])
        return destinations_df, place_details_dict

    except FileNotFoundError as e:
        print(f"❌ Error loading recommendation data: {e}")
        return None, None
    except Exception as e:
        print(f"❌ Unexpected error loading recommendation data: {e}")
        return None, None

# Load the data into memory when the Django app starts
DESTINATIONS_DF, PLACE_DETAILS_DICT = load_data()


def find_recommendations(user_choices):
    """
    Main logic function.
    Takes user choices as a dictionary and returns a list of results.
    """
    if DESTINATIONS_DF is None:
        print("❌ Data not loaded. Cannot find recommendations.")
        return []

    # Normalize user input
    mood = user_choices.get('mood', '').strip().title()
    people = user_choices.get('people', '').strip().title()
    location = user_choices.get('location', '').strip().title()

    mood_col = f"Mood_{mood}"
    people_col = f"People_{people}"
    location_col = f"Region_{location}"

    # Check if columns exist
    missing_cols = [c for c in [mood_col, people_col, location_col] if c not in DESTINATIONS_DF.columns]
    if missing_cols:
        print(f"❌ Columns not found in DESTINATIONS_DF: {missing_cols}")
        return []

    try:
        matches = DESTINATIONS_DF[
            (DESTINATIONS_DF[mood_col] == 1) &
            (DESTINATIONS_DF[people_col] == 1) &
            (DESTINATIONS_DF[location_col] == 1)
        ]

        recommended_places = matches.index.unique().tolist()

        if not recommended_places:
            print("⚠️ No matching places found for the given criteria.")
            return []

        # Prepare the results with details
        results = []
        for place in recommended_places:
            details = PLACE_DETAILS_DICT.get(place, {})
            results.append({
                'place': place,
                'food': details.get('Food', 'N/A'),
                'hotels': details.get('Hotels', 'N/A'),
                'shopping': details.get('Shopping', 'N/A'),
                'nearby_places': details.get('Nearby_Places', 'N/A')
            })

        return results

    except Exception as e:
        print(f"❌ Error during filtering: {e}")
        return []
