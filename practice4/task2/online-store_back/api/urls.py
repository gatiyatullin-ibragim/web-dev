from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_api, name='products_api'),
    
    path('products/<int:id>/', views.one_product_api, name='one_product_api'),
    
    path('categories/', views.categories_api, name='categories_api'),
    
    path('categories/<int:id>/', views.one_category_api, name='one_category_api'),
    
    path('categories/<int:id>/products/', views.category_products_api, name='category_products_api'),
]