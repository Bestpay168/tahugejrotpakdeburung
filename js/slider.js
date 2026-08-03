/* ==========================================
   SLIDER.JS
   TAHU GEJROT PAKDE BURUNG
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".hero-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    const dots = slider.querySelectorAll(".dot");

    let current = 0;
    let autoSlide;

    function showSlide(index) {

        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        slides.forEach((slide, i) => {

            slide.classList.toggle("active", i === index);

        });

        dots.forEach((dot, i) => {

            dot.classList.toggle("active", i === index);

        });

        current = index;

    }

    function nextSlide() {

        showSlide(current + 1);

    }

    function prevSlide() {

        showSlide(current - 1);

    }

    function startAutoSlide() {

        stopAutoSlide();

        autoSlide = setInterval(nextSlide, 5000);

    }

    function stopAutoSlide() {

        clearInterval(autoSlide);

    }

    nextBtn?.addEventListener("click", () => {

        nextSlide();
        startAutoSlide();

    });

    prevBtn?.addEventListener("click", () => {

        prevSlide();
        startAutoSlide();

    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);
            startAutoSlide();

        });

    });

    slider.addEventListener("mouseenter", stopAutoSlide);

    slider.addEventListener("mouseleave", startAutoSlide);

    // Swipe HP
    let startX = 0;

    slider.addEventListener("touchstart", e => {

        startX = e.touches[0].clientX;

    });

    slider.addEventListener("touchend", e => {

        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) nextSlide();

        if (endX - startX > 50) prevSlide();

    });

    showSlide(0);

    startAutoSlide();

});