// ===========================
// Select Elements
// ===========================

const buttons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".image-item");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

// ===========================
// Filter Images
// ===========================

for (let button of buttons) {

    button.addEventListener("click", function () {

        const category = this.dataset.category;

        for (let image of images) {

            const imageCategory = image.dataset.category;

            if (category === "all" || category === imageCategory) {

                image.style.display = "";

            } else {

                image.style.display = "none";

            }

        }

    });

}

// ===========================
// Open Lightbox
// ===========================

for (let image of images) {

    image.addEventListener("click", function () {

        const img = this.querySelector("img");

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        lightbox.classList.add("active");

    });

}

// ===========================
// Close Button
// ===========================

closeBtn.addEventListener("click", function () {

    lightbox.classList.remove("active");

});

// ===========================
// Close When Clicking Outside
// ===========================

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// ===========================
// Close Using ESC Key
// ===========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});