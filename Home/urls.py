from django.urls import path

from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('equipment/',views.equipment, name='equipment'),
    path('equipment/<int:product_id>/', views.product_page, name='product_page'),  # For individual product pages
    path('add-to-cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('cart/', views.cart_view, name='cart_view'),
    path('remove-from-cart/<int:product_id>/', views.remove_from_cart, name='remove_from_cart'),
    path('medicine/', views.medicine_view, name='medicine'),
    path('products/', views.products_view, name='products'),
    path('product-list/', views.product_list, name='product_list'),
    path('online-doctors/', views.online_doctors_view, name='online doctors'),
    path('doc-slide/', views.doc_slide, name='doc-slide'),
    path('otc/<int:id>/', views.show_more, name='show_more'),
    path('search/', views.search, name='search'),
    
]