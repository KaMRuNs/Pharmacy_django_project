// Product Data
const products = [
    // { name: "Whisper Sanitary Pads", price: 180, category: "womens care", image: "p1.jpeg" },
    { name: "Whisper Sanitary Pads", price: 180, category: "womens care", image: "p1.jpeg"},

    { name: "Menstrual Cup", price: 550, category: "womens care", image: "p2.jpeg" },
    { name: "Conditioner", price: 830, category: "toiletries", image: "p9.jpeg" },
    { name: "Cotton Pads", price: 150, category: "toiletries", image: "p10.jpeg" },
    { name: "Baby Lotion", price: 180, category: "baby care", image: "p5.jpeg" },
    { name: "Pee Safe", price: 280, category: "womens care", image: "p4.jpeg" },
    { name: "Rexona", price: 250, category: "womens care", image: "p3.jpeg" },
    { name: "Baby wipes", price: 360, category: "baby care", image: "p6.jpeg" },
    { name: "Shampoo", price: 660, category: "toiletries", image: "p8.jpeg" },
-
];


// Initialize cart
let cart = [];

// Load products into the grid
const productsGrid = document.getElementById('products-grid');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.setAttribute('data-category', product.category);
    productItem.setAttribute('data-price', product.price);
    productItem.innerHTML = `
        <div class="products-card">
            <img src="${product.image}" alt="${product.name}">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}/=</p>
            <input type="number" value="1" min="1" class="quantity-input">
            <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
        </div>
    `;
    productsGrid.appendChild(productItem);
});

// Event Listener for Add to Cart buttons
productsGrid.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));
        const quantityInput = e.target.previousElementSibling;
        const quantity = parseInt(quantityInput.value);
        
        // Update cart
        const cartItemIndex = cart.findIndex(item => item.name === productName);
        if (cartItemIndex > -1) {
            cart[cartItemIndex].quantity += quantity;
        } else {
            cart.push({ name: productName, price: productPrice, quantity });
        }

        updateCartDisplay();
        alert(`${productName} added to cart!`);
    }
});

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.quantity} x ${item.price}/=`;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = `${total}/=`;
}

// Filter products by category
const categoryFilter = document.getElementById('category');
categoryFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        if (selectedCategory === '' || item.getAttribute('data-category') === selectedCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


/* NEW */
