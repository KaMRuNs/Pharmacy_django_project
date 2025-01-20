# from django.shortcuts import render
# from django.http import HttpResponseRedirect
# from .models import Products


# # Create your views here.


# def index(request):
#   return render(request, 'index.html')

# def equipment(request):
#     products = Products.objects.all()  # Fetch all products
#     return render(request, 'equipment.html', {'products': products})
  
# def product_page(request):
#   return render(request, 'product_page.html')
from django.db.models import Q
from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from .models import Products,Cart,Pros, Medicines
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.decorators import login_required
from .models import Products, Cart



# Create your views here.


def index(request):
  return render(request, 'index.html')

def products_view(request):
    products = Pros.objects.all()  # Fetch all products
    return render(request, 'products.html', {'products': products})

def medicine_view(request):
    products = Medicines.objects.all()  # Fetch all products
    return render(request, 'medicine.html', {'products': products})

def equipment(request):
    products = Products.objects.all()  # Fetch all products
    return render(request, 'equipment.html', {'products': products})
  
def product_page(request):
  return render(request, 'product_page.html')

def online_doctors_view(request):
    # Your view logic
    return render(request, 'doc.html')

def doc_slide(request):
    # Your view logic
    return render(request, 'doc-slide.html')


def add_to_cart(request, product_id):
    # Fetch the product
    product = get_object_or_404(Products, id=product_id)


    # Get the cart from the session, or initialize an empty cart
    cart = request.session.get('cart', {})

    # Check if adding this product exceeds available stock
    current_quantity_in_cart = cart.get(str(product_id), 0)
    if current_quantity_in_cart + 1 > product.quantity:
        return render(request, 'error.html', {
            'message': f"Only {product.quantity} units of {product.name} are available in stock."
        })

    # If the product is already in the cart, increment the quantity
    if str(product_id) in cart:
        cart[str(product_id)] += 1
    else:
        cart[str(product_id)] = 1

    # Save the updated cart in the session
    request.session['cart'] = cart

    return redirect('cart_view')  # Redirect to the cart page


def cart_view(request):
    # Retrieve the cart from the session
    cart = request.session.get('cart', {})

    # Fetch the product details for items in the cart
    cart_items = []
    total = 0
    for product_id, quantity in cart.items():
        product = get_object_or_404(Products, id=product_id)
        stock_available = product.quantity >= quantity
        cart_items.append({
            'product': product,
            'quantity': quantity,
            'total_cost': quantity * product.price,
            'stock_available': stock_available,
        })
        total += quantity * product.price

    return render(request, 'cart.html', {
        'cart_items': cart_items,
        'total': total,
    })


def remove_from_cart(request, product_id):
    # Get the cart from the session
    cart = request.session.get('cart', {})

    # Remove the product if it exists in the cart
    if str(product_id) in cart:
        del cart[str(product_id)]

    # Save the updated cart in the session
    request.session['cart'] = cart

    return redirect('cart_view')

# Hardcoded list of products with corrected keys
otcMedicines = [
    {
        'id': 1,
        'name': "FEVER",
        'description': "A fever is a body temperature that is higher than normal. A normal temperature can vary from person to person, but it is usually around 98.6 F. A fever is not a disease. It is usually a sign that your body is trying to fight an illness or infection. Infections cause most fevers.",
        'image': 'fever.png',
    },
    {
        'id': 2,
        'name': "HEADACHE",
        'description': "See more",
        'image': 'headache.png',
    },
    {
        'id': 3,
        'name': "DIARRHEA",
        'description': "See more",
        'image': 'diarrhea.png',
    },
    {
        'id': 4,
        'name': "ECZEMA",
        'description': "See more",
        'image': 'eczema.png',
    },
    {
        'id': 5,
        'name': "CONSTIPATION",
        'description': "See more",
        'image': 'constipation.png',
    },
    {
        'id': 6,
        'name': "PREGNANCY",
        'description': "A fever is a body temperature that is higher than normal. A normal temperature can vary from person to person, but it is usually around 98.6 F. A fever is not a disease. It is usually a sign that your body is trying to fight an illness or infection. Infections cause most fevers.",
        'image': 'pregnancy.png',
    },
    {
        'id': 7,
        'name': "NASAL",
        'description': "See more",
        'image': 'nasal.png',
    },
    
]

otcMedicines = [
    {
        'id': 1,
        'name': "FEVER",
        'description': "A fever is a body temperature that is higher than normal. A normal temperature can vary from person to person, but it is usually around 98.6 F. A fever is not a disease. It is usually a sign that your body is trying to fight an illness or infection. Infections cause most fevers.",
        'image': 'fever.png',
    },
    {
        'id': 2,
        'name': "HEADACHE",
        'description': "Headache",
        'image': 'headache.png',
    },
    {
        'id': 3,
        'name': "DIARRHEA",
        'description': "A condition in which feces are discharged from the bowels frequently and in a liquid form.",
        'image': 'diarrhea.png',
    },
    {
        'id': 4,
        'name': "ECZEMA",
        'description': "Eczema is a condition wherein patches of skin become inflamed, itchy, cracked, and rough. Some types can also cause blisters.",
        'image': 'eczema.png',
    },
    {
        'id': 5,
        'name': "CONSTIPATION",
        'description': "Constipation occurs when bowel movements become less frequent and stools become difficult to pass. It happens most often due to changes in diet or routine, or due to inadequate intake of fiber. You should call your doctor if you have severe pain, blood in your stools, or constipation that lasts longer than three weeks.",
        'image': 'constipation.png',
    },
    {
        'id': 6,
        'name': "PREGNANCY",
        'description': "Pregnancy",
        'image': 'pregnancy.png',
    },
    {
        'id': 7,
        'name': "NASAL",
        'description': "The most frequent diseases of the nose include sinusitis, allergic rhinitis (hay fever) and nasal polyps, as well as difficulty in nasal breathing. At Schoen Clinic, we mainly treat the correction of nasal breathing disorders including paranasal sinus diseases.",
        'image': 'nasal.png',
    },
    {
        'id': 8,
        'name': "GASTRIC",
        'description': "It is a stomach problem that occurs when stomach acid comes into contact with the oesophagus. The oesophagus is the tube that food goes down when you swallow and ends at the stomach.",
        'image': 'gastric.png',
    },
]
def show_more(request, id):
    product = next((item for item in otcMedicines if item['id'] == id), None)
    
    
    return render(request, 'show_more.html', {'product': product})
    
    
    
    

def product_list(request):
    products = [
        {'name': 'FEVER', 'image': 'images/fever.png'},
        {'name': 'HEADACHE', 'image': 'images/headache.jpeg'},
        {'name': 'DIARRHEA', 'image': 'images/diarrhea.jpeg'},
        {'name': 'ECZEMA', 'image': 'images/eczema.jpeg'},
    ]
    return render(request, 'product_list.html', {'products': products})

from django.db.models import Q

def search(request):
    query = request.GET.get('query', '').strip()  # Strip whitespace from the query
    results = []

    if query:  # Check if query is not empty
        results = Products.objects.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query)  # Add other fields as needed
        ).distinct()  # Ensure no duplicate results

    context = {
        'query': query,
        'results': results,
    }

    # Debugging logs (remove in production)
    print(f"Search Query: {query}")
    print(f"Results Found: {len(results)}")

    return render(request, 'equipment.html', context)





