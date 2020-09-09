from article.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='article')
urlpatterns = router.urls







# from django.urls import path
# from .views import ArticleListView, ArticleDetailView

# urlpatterns = [
#     path("", ArticleListView.as_view()),
#     path("<pk>", ArticleDetailView.as_view()),
# ]