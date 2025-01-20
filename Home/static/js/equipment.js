const staticBaseUrl = "/static/images/";
// const products = [
//   {
//     id: 1,
//     name: "Saline Set",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 200",
//     image: `${staticBaseUrl}SALINE-SET.jpeg`,
//     page: "product1-page.html",
//   },
//   {
//     id: 2,
//     name: "Digital-thermometer",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 108",
//     image: `${staticBaseUrl}digital-thermometer.jpeg`,
//     page: "product2-page.html",
//   },
//   {
//     id: 3,
//     name: "Medinr Droper Single",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 99",
//     image: `${staticBaseUrl}medinr-droper-single.jpeg`,
//     page: "product2-page.html",
//   },
//   {
//     id: 4,
//     name: "NOVOFINE 31G needle",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 70",
//     image: `${staticBaseUrl}NOVOFINE-31G-needle.jpeg`,
//     page: "product2-page.html",
//   },
//   {
//     id: 5,
//     name: "Steripack 1ml u-40",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 108",
//     image: `${staticBaseUrl}steripack-1-ml-u-40.jpeg`,
//     page: "product2-page.html",
//   },
//   {
//     id: 6,
//     name: "BSMI-triflo-mediciser",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 499",
//     image: `${staticBaseUrl}bsmi-triflo-mediciser.jpeg`,
//     page: "product2-page.html",
//   },
//   {
//     id: 7,
//     name: "Surgical Cap",
//     description: "Asia Pacific Medicals  Ltd.",
//     price: "Price: 45",
//     image: `${staticBaseUrl}surgical-cap.jpeg`,
//     page: "product2-page.html",
//   },
//   {
//     id: 8,
//     name: "Saline Set",
//     description: "Asia Pacific Medicals Ltd.",
//     price: "Price: 108",
//     image: `${staticBaseUrl}SALINE-SET.jpeg`,
//     page: "product1-page.html",
//   },
//   {
//     id: 9,
//     name: "Blood Pressure Machine",
//     description: "Vissco",
//     price: "Price: 3,400.00",
//     image: `${staticBaseUrl}bp-machine.jpeg`,
//     page: "product1-page.html",
//   },
//   {
//     id: 10,
//     name: "Exercise Ball",
//     description: "Joly Surgical & Cosmetic",
//     price: "Price: 30.00",
//     image: `${staticBaseUrl}squeeze-ball.jpeg`,
//     page: "product1-page.html",
//   },
// ];

function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.innerHTML = `
      <div class="box" onclick="goToProductPage(${product.id})">
        <div class="box-content">
          <img class="box-img" src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="company category">${product.description}</p>
          <p class="prc">${product.price}</p>
          <button class="cart-btn" onclick="event.stopPropagation(); goToProductPage(${product.id})">View Product</button>

        </div>
      </div>
  `;

    productList.appendChild(productCard);
  });
}

// Make the function globally accessible
window.goToProductPage = function (productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = `/equipment/${productId}/`; // Assuming you've configured this URL in Django
};

// Call this function to load products on the landing page
loadProducts();

window.showSuggestions = function () {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestions");
  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  if (query.length === 0) return;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  filteredProducts.forEach((product) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = product.name;

    // Click event to go to the product page
    suggestionItem.onclick = () => {
      goToProductPage(product.id);
    };

    suggestionsContainer.appendChild(suggestionItem);
  });
};



// products.js
