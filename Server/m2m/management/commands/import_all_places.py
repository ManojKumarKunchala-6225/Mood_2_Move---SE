from django.conf import settings
import os
import pandas as pd
from m2m.models import Place, Mood
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Import places and moods from both place_details.xlsx and destinations.xlsx dynamically."

    def handle(self, *args, **options):
        # ✅ Paths to Excel files
        dest_path = os.path.join(settings.BASE_DIR, 'm2m', 'data', 'destination.xlsx')
        details_path = os.path.join(settings.BASE_DIR, 'm2m', 'data', 'place_details.xlsx')

        # ✅ Debug info
        self.stdout.write(self.style.WARNING("📂 Looking for files:"))
        self.stdout.write(self.style.WARNING(f"   Destinations: {dest_path}"))
        self.stdout.write(self.style.WARNING(f"   Place Details: {details_path}"))

        # ✅ Validate existence
        if not os.path.exists(dest_path):
            self.stdout.write(self.style.ERROR(f"❌ File not found: {dest_path}"))
            return
        if not os.path.exists(details_path):
            self.stdout.write(self.style.ERROR(f"❌ File not found: {details_path}"))
            return

        # ✅ Load Excel data safely
        try:
            dest_df = pd.read_excel(dest_path)
            details_df = pd.read_excel(details_path)
            self.stdout.write(self.style.SUCCESS("✅ Excel files loaded successfully!"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"❌ Failed to read Excel files: {e}"))
            return

        # ✅ Normalize columns
        dest_df.columns = dest_df.columns.str.strip().str.replace(" ", "_").str.replace("\n", "")
        details_df.columns = details_df.columns.str.strip().str.replace(" ", "_").str.replace("\n", "")

        # ✅ Auto-detect merge columns (don’t modify Excel data)
        dest_place_col = None
        for col in dest_df.columns:
            if "destination" in col.lower() or "place" in col.lower():
                dest_place_col = col
                break

        details_place_col = None
        for col in details_df.columns:
            if "place" in col.lower() or "destination" in col.lower():
                details_place_col = col
                break

        if not dest_place_col or not details_place_col:
            self.stdout.write(self.style.ERROR(
                f"❌ Could not find matching 'Place/Destination' columns in both Excel files.\n"
                f"   Destinations columns: {list(dest_df.columns)}\n"
                f"   Place details columns: {list(details_df.columns)}"
            ))
            return

        self.stdout.write(self.style.SUCCESS(
            f"🔍 Detected merge columns — Destinations: '{dest_place_col}', Details: '{details_place_col}'"
        ))

        # ✅ Rename temporarily for merging (don’t affect recommend_logic.py)
        temp_dest_df = dest_df.rename(columns={dest_place_col: "MergeKey"})
        temp_details_df = details_df.rename(columns={details_place_col: "MergeKey"})

        # ✅ Merge both dataframes
        merged_df = pd.merge(temp_details_df, temp_dest_df, on="MergeKey", how="inner")
        merged_df.rename(columns={"MergeKey": "Place"}, inplace=True)

        self.stdout.write(self.style.SUCCESS(f"✅ Merged {len(merged_df)} rows successfully."))

        # ✅ Extract mood columns
        mood_columns = [col for col in dest_df.columns if col.startswith("Mood_")]
        created_moods = 0
        for mood_col in mood_columns:
            mood_name = mood_col.replace("Mood_", "").capitalize()
            _, created = Mood.objects.get_or_create(name=mood_name)
            if created:
                created_moods += 1

        # ✅ Import places
        created_places = 0
        for _, row in merged_df.iterrows():
            place_name = str(row["Place"]).strip()
            if not place_name:
                continue

            # Detect the mood column with value 1
            mood_col = None
            for col in mood_columns:
                if row.get(col, 0) == 1:
                    mood_col = col
                    break

            mood_obj = None
            if mood_col:
                mood_name = mood_col.replace("Mood_", "").capitalize()
                mood_obj = Mood.objects.filter(name=mood_name).first()

            # ✅ Update or create place
            Place.objects.update_or_create(
                name=place_name,
                defaults={
                    "state": str(row.get("State", "")).strip(),
                    "description": str(row.get("Description", "")).strip(),
                    "famous_foods": str(row.get("Food", "")).strip(),
                    "hotels": str(row.get("Hotels", "")).strip(),
                    "shopping": str(row.get("Shopping", "")).strip(),
                    "nearby_places": str(row.get("Nearby_Places", "")).strip(),
                    "mood": mood_obj,
                }
            )
            created_places += 1

        # ✅ Summary
        self.stdout.write(self.style.SUCCESS("✅ Import complete!"))
        self.stdout.write(self.style.SUCCESS(f"➡️  {created_places} places processed"))
        self.stdout.write(self.style.SUCCESS(f"➡️  {created_moods} new moods added"))
