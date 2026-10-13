const products = [
    {
        id: 1,
        name: "Sweatshirt Nasa",
        price: "62DT",
        images: [1, 2, 3, 4, 5]
    },

    {
        id: 2,
        name: "Hoodie Cat",
        price: "67DT",
        images: [6, 7, 8]
    },

    {
        id: 3,
        name: "Hoodie Vision",
        price: "67DT",
        images: [9, 10, 11, 12, 13, 14]
    },

    {
        id: 4,
        name: "Hoodie I’m a Cat",
        price: "35DT",
        images: [15, 16, 17, 18]
    },

    {
        id: 5,
        name: "Hoodie Cat",
        price: "67DT",
        images: [19, 20, 21, 22]
    },

    {
        id: 6,
        name: "Hoodie Japanese Cats",
        price: "67DT",
        images: [23, 24, 25]
    },

    {
        id: 7,
        name: "Hoodie BTS",
        price: "67DT",
        images: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    },

    {
        id: 8,
        name: "Hoodie Cat Padded",
        price: "79DT",
        images: [37, 38, 39, 40, 41, 42]
    },

    {
        id: 9,
        name: "Hoodie Dead By Daylight",
        price: "67DT",
        images: [43, 44, 45, 46, 47, 48, 49, 50]
    },

    {
        id: 10,
        name: "Sweatshirt Shiba Inu",
        price: "62DT",
        images: [51, 52, 53, 54, 55, 56, 57, 58]
    },

    {
        id: 11,
        name: "Hoodie Cats Love",
        price: "42DT",
        images: [59, 60, 61, 62, 63, 64, 65]
    },

    {
        id: 12,
        name: "Hoodie Cats",
        price: "62DT",
        images: [66, 67, 68]
    },

    {
        id: 13,
        name: "Hoodie Japanese",
        price: "67DT",
        images: [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
    },

    {
        id: 14,
        name: "Oversized Men Jacket Padded",
        price: "87DT",
        images: [80, 81, 82]
    },

    {
        id: 15,
        name: "Two Piece Set",
        price: "67DT",
        images: [83, 84, 85, 86, 87]
    },

    {
        id: 16,
        name: "Two Piece Set",
        price: "67DT",
        images: [88, 89, 90, 91]
    },

    {
        id: 17,
        name: "Two Piece Set",
        price: "67DT",
        images: [92, 93, 94, 95]
    },

    {
        id: 18,
        name: "Notebook Cat",
        price: "25DT",
        images: [96, 97, 98, 99]
    },

    {
        id: 19,
        name: "Notebook Girl In Blue",
        price: "27DT",
        images: [100, 101, 102, 103, 104, 105]
    },

    {
        id: 20,
        name: "Note Book Mini",
        price: "7DT",
        images: [106, 107, 108, 109, 110, 111, 112]
    },

    {
        id: 21,
        name: "Notebook Knitted",
        price: "25DT",
        images: [113, 114, 115, 116]
    },

    {
        id: 22,
        name: "Notebook Space",
        price: "32DT",
        images: [117, 118, 119, 120, 121, 122, 123]
    },

    {
        id: 23,
        name: "Notebook Sakura",
        soldOut: true,
        images: [124, 125, 126]
    },

    {
        id: 24,
        name: "Notebook Moon",
        soldOut: true,
        images: [127, 128, 129, 130]
    },

    {
        id: 25,
        name: "Notebook BTS",
        price: "12DT",
        images: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141]
    },

    {
        id: 26,
        name: "Multicolor Pen",
        price: "7DT",
        images: [142, 143, 144, 145, 146]
    },

    {
        id: 27,
        name: "Multicolor Pen",
        price: "7DT",
        images: [147, 148, 149, 150]
    },

    {
        id: 28,
        name: "Multicolor Pen",
        price: "7DT",
        images: [151, 152, 153, 154, 155]
    },

    {
        id: 29,
        name: "Multicolor Pen",
        price: "7DT",
        images: [156, 157, 158, 159, 160]
    },

    {
        id: 30,
        name: "Pens BTS",
        price: "3DT",
        images: [161, 162, 163]
    },

    {
        id: 31,
        name: "Pens BTS",
        price: "2.500DT",
        images: [164, 165, 166, 167]
    },

    {
        id: 32,
        name: "Backpack BTS",
        price: "67DT",
        images: [168, 169, 170, 171, 172]
    },

    {
        id: 33,
        name: "Backpack BTS",
        price: "67DT",
        images: [173, 174, 175]
    },

    {
        id: 34,
        name: "Backpack BTS",
        price: "92DT",
        images: [176, 177, 178]
    },

    {
        id: 35,
        name: "Key Chain BTS",
        price: "7DT",
        images: [179, 180, 181, 182, 183, 184]
    },

    {
        id: 36,
        name: "Backpack BTS",
        price: "67DT",
        images: [185, 186]
    },

    {
        id: 37,
        name: "BTS Backpack",
        price: "67DT",
        images: [187, 188, 189, 190]
    },

    {
        id: 38,
        name: "BTS Tote Bag",
        price: "22DT",
        images: [191, 192]
    },

    {
        id: 39,
        name: "BTS Figurines",
        price: "42DT",
        images: [193, 194, 195]
    },

    {
        id: 40,
        name: "BTS Figurines",
        price: "72DT",
        images: [196, 197, 198]
    },

    {
        id: 41,
        name: "Anime Figurine",
        price: "45DT",
        images: [199, 200, 201, 202]
    },

    {
        id: 42,
        name: "Tote Bag Cat",
        price: "17DT",
        images: [203, 204]
    },

    {
        id: 43,
        name: "Hand Bag",
        price: "67DT",
        images: [205, 206, 207, 208]
    },

    {
        id: 44,
        name: "Hand Bag",
        price: "67DT",
        images: [209, 210, 211, 212, 213]
    },

    {
        id: 45,
        name: "Hand Bag",
        price: "87DT",
        images: [214, 215, 216, 217]
    },

    {
        id: 46,
        name: "Back Pack Mini",
        price: "57DT",
        images: [218, 219, 220, 221, 222]
    },

    {
        id: 47,
        name: "Hand Bag Mini",
        price: "120DT",
        images: [223, 224, 225, 226, 227, 228, 229]
    },

    {
        id: 48,
        name: "Make Up Set",
        price: "67DT",
        images: [230, 231, 232, 233]
    },

    {
        id: 49,
        name: "Make Up Set",
        price: "67DT",
        images: [234, 235, 236, 237, 238]
    },

    {
        id: 50,
        name: "Make Up Set",
        price: "67DT",
        images: [239, 240, 241, 242, 243]
    },

    {
        id: 51,
        name: "Wallet Marble",
        price: "50DT",
        images: [244, 245, 246, 247, 248, 249, 250]
    },

    {
        id: 52,
        name: "Wallet Multicolor",
        price: "27DT",
        images: [251, 252, 253, 254, 255, 256, 257, 258, 259]
    },

    {
        id: 53,
        name: "Wallet Mickey Mini",
        price: "20DT",
        images: [260, 261, 262, 263, 264]
    },

    {
        id: 54,
        name: "Wallet Classy",
        price: "27DT",
        images: [265, 266, 267, 268, 269]
    },

    {
        id: 55,
        name: "Wallet Abstract",
        price: "27DT",
        images: [270, 271, 272, 273, 274]
    },

    {
        id: 56,
        name: "Wallet Cow",
        soldOut: true,
        images: [275, 276, 277]
    },

    {
        id: 57,
        name: "Wallet Cow",
        price: "27DT",
        images: [278, 279, 280]
    },

    {
        id: 58,
        name: "Wallet Cow",
        soldOut: true,
        images: [281, 282, 283]
    },

    {
        id: 59,
        name: "Wallet Fox",
        price: "27DT",
        images: [284, 285, 286, 287]
    },

    {
        id: 60,
        name: "Wallet Cat",
        price: "27DT",
        images: [288, 289, 290, 291, 292, 293, 294]
    },

    {
        id: 61,
        name: "Wallet Cow",
        soldOut: true,
        images: [295, 296, 297]
    },

    {
        id: 62,
        name: "Hand Bag",
        price: "67DT",
        images: [298, 299, 300]
    },

    {
        id: 63,
        name: "Necklace BTS",
        price: "30DT",
        images: [301, 302, 303, 304, 305]
    },

    {
        id: 64,
        name: "Key Chain BTS",
        price: "7.500DT",
        images: [306, 307, 308, 309, 310, 311, 312, 313]
    },

    {
        id: 65,
        name: "Wallet BTS",
        price: "27DT",
        images: [314, 315, 316, 317]
    },

    {
        id: 66,
        name: "Handbag",
        price: "35DT",
        images: [318, 319, 320, 321, 322]
    },

    {
        id: 67,
        name: "Sweatshirt Cat",
        price: "25DT",
        images: [323, 324]
    }
];


function getProductImage(number) {
    return "Site All Products 2026 For Products Page/" + number + ".jpg";
}


const productModal = document.getElementById("product-modal");

if (productModal) {
const modalProductImage = document.getElementById("modal-product-image");
const modalProductName = document.getElementById("modal-product-name");
const modalProductPrice = document.getElementById("modal-product-price");
const imageCounter = document.getElementById("image-counter");

const closeModalButton = document.querySelector(".close-modal");
const previousImageButton = document.querySelector(".prev-image");
const nextImageButton = document.querySelector(".next-image");

let currentProduct = null;
let currentImageIndex = 0;


function showCurrentImage() {
    const imageNumber = currentProduct.images[currentImageIndex];

    modalProductImage.src = getProductImage(imageNumber);

    imageCounter.textContent =
        (currentImageIndex + 1) + " / " + currentProduct.images.length;
}


function createProductCard(product) {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
        <div class="product-image">
            <img src="${getProductImage(product.images[0])}" alt="${product.name}">
        </div>

        <h3>${product.name}</h3>

        ${product.soldOut
            ? '<p class="sold-out">Sold Out!</p>'
            : `<p class="product-price">${product.price}</p>`
        }

        <button class="view-product" data-product-id="${product.id}">
            View Product →
        </button>
    `;

    return card;
}


const sweatsGrid = document.getElementById("sweats-grid");
const accessoiresGrid = document.getElementById("accessoires-grid");

const bagsGrid = document.getElementById("bags-grid");
const notebooksGrid = document.getElementById("notebooks-grid");
const btsGrid = document.getElementById("bts-grid");


const bagsOrder = [
    43, 45, 44, 47, 62, 66, 46, 42,
    48, 49, 50, 51, 61, 57, 58, 56,
    55, 54, 59, 60, 52, 53
];

const notebooksOrder = [
    18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31
];

const sweatsOrder = [
    1, 10, 67, 2, 9, 3, 13, 7,
    8, 4, 11, 12, 5, 6, 14
];

const btsOrder = [
    32, 33, 37, 36, 34, 38, 65, 63,
    64, 35, 39, 40
];

const accessoiresOrder = [
    15, 16, 17, 41
];

function addProductsInOrder(grid, order) {
    order.forEach(function(productId) {
        const product = products.find(function(item) {
            return item.id === productId;
        });

        if (product) {
            grid.appendChild(createProductCard(product));
        }
    });
}

addProductsInOrder(bagsGrid, bagsOrder);
addProductsInOrder(notebooksGrid, notebooksOrder);
addProductsInOrder(sweatsGrid, sweatsOrder);
addProductsInOrder(btsGrid, btsOrder);
addProductsInOrder(accessoiresGrid, accessoiresOrder);


document.addEventListener("click", function(event) {

    if (event.target.classList.contains("view-product")) {

        const productId = Number(event.target.dataset.productId);

        currentProduct = products.find(function(product) {
            return product.id === productId;
        });

        currentImageIndex = 0;

        modalProductName.textContent = currentProduct.name;

        if (currentProduct.soldOut) {
            modalProductPrice.textContent = "Sold Out!";
        } else {
            modalProductPrice.textContent = currentProduct.price;
        }

        showCurrentImage();

        productModal.style.display = "flex";
    }

});


previousImageButton.addEventListener("click", function() {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = currentProduct.images.length - 1;
    }

    showCurrentImage();

});


nextImageButton.addEventListener("click", function() {

    currentImageIndex++;

    if (currentImageIndex >= currentProduct.images.length) {
        currentImageIndex = 0;
    }

    showCurrentImage();

});


closeModalButton.addEventListener("click", function() {

    productModal.style.display = "none";

});


productModal.addEventListener("click", function(event) {

    if (event.target === productModal) {
        productModal.style.display = "none";
    }

});
}
// ==============================
// HOMEPAGE SLIDESHOW
// ==============================

let slideIndex = 1;
let slideTimer;

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active-dot");
    });

    slides[slideIndex - 1].classList.add("active");

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active-dot");
    }
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
    resetSlideTimer();
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
    resetSlideTimer();
}

function startSlideTimer() {
    slideTimer = setInterval(function() {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000);
}

function resetSlideTimer() {
    clearInterval(slideTimer);
    startSlideTimer();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlide(slideIndex);
    startSlideTimer();
});