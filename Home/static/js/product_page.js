import { products } from "./products.js";

function loadProductDetails() {
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id == productId);

  if (product) {
    const productDetail = document.getElementById("product-detail");

    productDetail.innerHTML = `
            <div class="product-card">
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <div class= "details"><h3>${product.name}</h3>
                <p class="pro-desc">${product.description}</p>
                <p class="pro-prc">${product.price}<i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
                <button>Buy now</button>
                </div>
            </div>
        `;
  }
}
loadProductDetails();
