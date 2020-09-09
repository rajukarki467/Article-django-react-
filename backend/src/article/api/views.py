from rest_framework import viewsets
from article.models import Article
from .serializer import ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer




# from rest_framework.generics import ListAPIView, RetrieveAPIView
# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer