const staticBaseUrl = "/static/images/";

const otcMedicines = [
  {
    id: 1,
    name: "FEVER",
    category: "Pain Reliever",
    description: "See more",
    price: "$5.99",
    image: `${staticBaseUrl}fever.png`,
  },
  {
    id: 2,
    name: "HEADACHE",
    category: "Pain Reliever",
    description: "See more",
    price: "$4.99",
    image: `${staticBaseUrl}headache.png`,
  },
  {
    id: 3,
    name: "DIARRHEA",
    category: "Allergy Relief",
    description: "See more",
    image: `${staticBaseUrl}diarrhea.png`,
  },
  {
    id: 4,
    name: "ECZEMA",
    category: "Allergy Relief",
    description: "See more",
    image: `${staticBaseUrl}eczema.png`,
  },
  {
    id: 5,
    name: "CONSTIPATION",
    category: "Allergy Relief",
    description: "See more",
    price: "$7.99",
    image: `${staticBaseUrl}constipation.png`,
  },
  {
    id: 6,
    name: "PREGNANCY",
    category: "Allergy Relief",
    description: "See more",
    price: "$7.99",
    image: `${staticBaseUrl}pregnancy.png`,
  },
  {
    id: 7,
    name: "NASAL",
    category: "Allergy Relief",
    description: "See more",
    price: "$7.99",
    image: `${staticBaseUrl}nasal.png`,
  },
  {
    id: 8,
    name: "GASTRIC",
    image: `${staticBaseUrl}gastric.png`,
  },
];
function loadProducts() {
  const otcList = document.getElementById("shop-section");
  otcMedicines.forEach((otc_medicine) => {
    console.log("Adding product:", otc_medicine.name);
    const otcCard = document.createElement("div");
    otcCard.classList.add("boxes");

    // Construct the URL dynamically using the product ID
    const productUrl = `/otc/${otc_medicine.id}/`;  // Use the product ID to generate the URL

    otcCard.innerHTML = `
      <div class="box">
        <div class="box-content">
        <a href="${productUrl}">
          <h2>${otc_medicine.name}</h2>
          <div class="box-img" style="background-image: url(${otc_medicine.image})"></div>
        </a>
        </div>
      </div>
    `;

    otcList.appendChild(otcCard);
  });
}
loadProducts();

// Make the function globally accessible
window.goToProductPage = function (productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product_page.html";
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const counts =document.querySelectorAll(".count");
const speed =97;
counts.forEach((counter) =>{
    function upData(){
        const target = Number(counter.getAttribute('data.target'));
        const count = Number(counter.innerText);
        const inc = target / speed;
        if(count < target){
            counter.innerText = Math.floor( inc + count);
            setTimeout(upData, 30);
        }
        else{
            counter.innerText = target;
        }
    }
    upData();
})


