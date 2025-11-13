# from django.urls import path
# from .views import main
# from .views import stats_view

# urlpatterns = [
#     path('', main),
#     path('api/stats/', stats_view, name='stats')
# ]
from django.urls import path
from .views import stats_view, MyTokenObtainPairView, RegisterView, RecommendationView, HelloWorldView

urlpatterns = [
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/recommend/', RecommendationView.as_view(), name='recommend'),
    path('api/hello/', HelloWorldView.as_view(), name='hello'),
    path('api/stats/', stats_view, name='stats'),   # ✅ Add this line
]