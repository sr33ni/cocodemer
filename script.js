// MOBILE MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
}

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
});


// SCROLL TO TOP FOR PAGINATION
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.addEventListener("click", function (e) {
  if (e.target.matches(".pagination-btn, .pagination-prev, .pagination-next")) {
    scrollToTop();
  }
});

// All Modal Functions
let selectedProduct = null;

const overlay = document.getElementById('productOverlay');
const closeBtn = document.getElementById('closeModal');
const carousel = document.getElementById('modalCarousel');
const modalPrevBtn = document.getElementById('modalPrev');
const modalNextBtn = document.getElementById('modalNext');

let modalIndex = 0;
let modalTotalSlides = 0;

function openModal(prod) {

  selectedProduct = prod;

  document.getElementById('modalCategory').textContent = prod.category || "";
  document.getElementById('modalTitle').textContent = prod.name || "";
  document.getElementById('modalDescription').textContent = prod.description || "";
  document.getElementById('modalPrice').textContent = "$" + (prod.price || 0);

  const images = (prod.images && prod.images.length)
    ? prod.images
    : [prod.image];

  modalTotalSlides = images.length;
  carousel.innerHTML = "";

  images.forEach(img => {
    const slide = document.createElement("div");
    slide.className = "min-w-full h-full bg-cover bg-center";
    slide.style.backgroundImage = `url('${img}')`;
    carousel.appendChild(slide);
  });

  modalIndex = 0;
  updateModalSlide();

  if (modalTotalSlides <= 1) {
    modalPrevBtn.style.display = "none";
    modalNextBtn.style.display = "none";
  } else {
    modalPrevBtn.style.display = "flex";
    modalNextBtn.style.display = "flex";
  }

  overlay.classList.remove("hidden");
  overlay.classList.add("flex");

  setTimeout(() => {
    overlay.classList.add("active");
  }, 10);

  document.body.classList.add("overflow-hidden");
}

function updateModalSlide() {
  carousel.style.transform = `translateX(-${modalIndex * 100}%)`;
}

modalNextBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  modalIndex = (modalIndex + 1) % modalTotalSlides;
  updateModalSlide();
});

modalPrevBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  modalIndex = (modalIndex - 1 + modalTotalSlides) % modalTotalSlides;
  updateModalSlide();
});

function closeModal() {
  overlay.classList.remove("active");

  setTimeout(() => {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
  }, 300);

  document.body.classList.remove("overflow-hidden");
}

closeBtn.onclick = closeModal;

overlay.onclick = function (e) {
  if (e.target === overlay) {
    closeModal();
  }
};

// WHATSAPP BUTTON
document.getElementById("whatsappOrder").onclick = function () {

  if (!selectedProduct) return;

  const message = `
Hello COCO DEMER,

I would like to order:

• Product: ${selectedProduct.name}
• Category: ${selectedProduct.category}
• Price: $${selectedProduct.price}

Please confirm availability.

Thank you.
`;

  const phoneNumber = "9895522449";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

// Main 

document.addEventListener("DOMContentLoaded", function () {

    const perPage = 12;
    let currentPage = 1;
  
    let allProducts = window.productData || [];
    let filteredProducts = [...allProducts];
  
    const grid = document.getElementById('product-grid');
    const pagination = document.getElementById('pagination');
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    if (!allProducts.length) {
      console.error("Product data not loaded");
      return;
    }
  
    // keep your makeCard, renderPage, pagination, filter logic EXACTLY as is
  
  });