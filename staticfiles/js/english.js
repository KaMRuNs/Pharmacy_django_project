const staticBaseUrl = "/static/images/";

const otcMedicines = [
  {
    id: 1,
    name: "FEVER",
    category: "Pain Reliever",
    description: "see more.",
    price: "$5.99",
    image: `${staticBaseUrl}fever.png`,
  },
  {
    id: 2,
    name: "HEADACHE",
    category: "Pain Reliever",
    description: "see more",
    price: "$4.99",
    image: `${staticBaseUrl}headache.png`,
  },
  {
    id: 3,
    name: "DIARRHEA",
    category: "Allergy Relief",
    description: "see more",
    price: "$6.49",
    image: `${staticBaseUrl}diarrhea.png`,
  },
  {
    id: 4,
    name: "ECZEMA",
    category: "Allergy Relief",
    description: "see more",
    price: "$7.99",
    image: `${staticBaseUrl}eczema.png`,
  },
];
function loadProducts() {
  const otcList = document.getElementById("shop-section");
  otcMedicines.forEach((otc_medicine) => {
    console.log("Adding product:", otc_medicine.name);
    const otcCard = document.createElement("div");
    otcCard.classList.add("boxes");
    otcCard.innerHTML = `
      <div class="box">
            <div class="box-content">
              <h2>${otc_medicine.name}</h2>
              <div
                class="box-img"
                style="background-image: url(${otc_medicine.image})"
                
              ></div>
              <p>${otc_medicine.description}</p>
            </div>
          </div>
    `;

    otcList.appendChild(otcCard);
  });
}

// Make the function globally accessible
