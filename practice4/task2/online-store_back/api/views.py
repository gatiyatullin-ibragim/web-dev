from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


# 1️⃣ Все товары
def products_api(request):
    products = Product.objects.all()
    data = []
    
    for product in products:
        data.append({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category_id": product.category.id,
            "category_name": product.category.name
        })
    
    return JsonResponse(data, safe=False)


# 2️⃣ Один товар по ID
def one_product_api(request, id):
    product = get_object_or_404(Product, id=id)
    
    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category.id,
        "category_name": product.category.name
    }
    
    return JsonResponse(data)


# 3️⃣ Все категории
def categories_api(request):
    categories = Category.objects.all()
    data = []
    
    for category in categories:
        data.append({
            "id": category.id,
            "name": category.name
        })
    
    return JsonResponse(data, safe=False)


# 4️⃣ Одна категория по ID
def one_category_api(request, id):
    category = get_object_or_404(Category, id=id)
    
    data = {
        "id": category.id,
        "name": category.name
    }
    
    return JsonResponse(data)


# 5️⃣ Товары в определённой категории
def category_products_api(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category_id=id)
    data = []
    
    for product in products:
        data.append({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category_id": product.category.id,
            "category_name": product.category.name
        })
    
    return JsonResponse(data, safe=False)