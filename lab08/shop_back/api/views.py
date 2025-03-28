from django.http import JsonResponse
from .models import Product, Category
from django.shortcuts import render

# Create your views here.
def product_list(request):
    prod = Product.objects.all()
    prod_json = [p.to_json() for p in prod]
    return JsonResponse(prod_json, safe=False)

def product_detail(request, id):
    prod = Product.objects.get(id = id)
    return JsonResponse(prod.to_json(), safe=False)

def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([c.to_json() for c in categories], safe=False)

def category_detail(request, id):
    category = Category.objects.get(id = id)
    return JsonResponse(category.to_json(), safe=False)

def category_products(request, id):
    category = Category.objects.get(id = id)
    products = category.products.all()
    return JsonResponse([p.to_json() for p in products], safe=False)