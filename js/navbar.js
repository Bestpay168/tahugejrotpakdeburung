const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("menuOverlay");

burger.onclick = () => {

    navbar.classList.toggle("active");
    overlay.classList.toggle("show");

    if(navbar.classList.contains("active")){
        burger.innerHTML = "✕";
    }else{
        burger.innerHTML = "☰";
    }

};

    overlay.onclick = () => {

    navbar.classList.remove("active");
    overlay.classList.remove("show");
    burger.innerHTML = "☰";

};

/* ======================================
   CLOSE MENU
====================================== */

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        burger.classList.remove("show");

        if (overlay) {
            overlay.classList.remove("show");
        }

    });

});

if (overlay) {

    overlay.addEventListener("click", () => {

        navbar.classList.remove("mobile-active");
        burger.classList.remove("open");
        menu-overlay.classList.remove("show");

    });

});