/* ==========================================
   SCRIPT.JS
   BAGIAN 5A
   TAHU GEJROT PAKDE BURUNG
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       LOADER
    ====================================== */

    const loader = document.querySelector(".loader");

    if (loader) {
        window.addEventListener("load", function () {

            setTimeout(function () {
                loader.classList.add("hide");
            }, 600);

        });
    }

    /* ======================================
       STICKY NAVBAR
    ====================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    });

    /* ======================================
       SMOOTH SCROLL
    ====================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                window.scrollTo({

                    top: target.offsetTop - 70,

                    behavior: "smooth"

                });

            }

        });

    });

    /* ======================================
       BACK TO TOP
    ====================================== */

    const topButton = document.querySelector(".top");

    window.addEventListener("scroll", function () {

        if (!topButton) return;

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    if (topButton) {

        topButton.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================
       ACTIVE MENU
    ====================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ======================================
       HERO BUTTON EFFECT
    ====================================== */

    const buttons = document.querySelectorAll(
        ".btn1,.btn2,.btn-order"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-5px)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    /* ======================================
       CARD EFFECT
    ====================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transition = ".4s";

        });

    });

});

/* ==========================================
   SCRIPT.JS
   BAGIAN 5B
   SCROLL ANIMATION + COUNTER + PARALLAX
========================================== */


/* ======================================
   SCROLL ANIMATION
====================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".fade-up,.fade-down,.fade-left,.fade-right,.zoom"

).forEach(el=>{

    observer.observe(el);

});


/* ======================================
   COUNTER
====================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let value=0;

const speed=target/120;

const update=()=>{

if(value<target){

value+=speed;

counter.innerText=Math.ceil(value);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ======================================
   PARALLAX HERO
====================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let scroll=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=scroll*0.5+"px";

}

});


/* ======================================
   HERO MOUSE EFFECT
====================================== */

const heroContent=document.querySelector(".hero-content");

if(heroContent){

hero.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

heroContent.style.transform=

`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

heroContent.style.transform="translate(0,0)";

});

}


/* ======================================
   IMAGE FADE
====================================== */

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("load",()=>{

img.style.opacity="1";

});

});


/* ======================================
   CARD STAGGER
====================================== */

const menuCards=document.querySelectorAll(".card");

menuCards.forEach((card,index)=>{

card.style.transitionDelay=(index*0.08)+"s";

});


/* ======================================
   CTA ANIMATION
====================================== */

const cta=document.querySelector(".cta");

if(cta){

const ctaObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

cta.classList.add("show");

}

});

});

ctaObserver.observe(cta);

}


/* ======================================
   HEADER SHADOW
====================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

document.querySelector(".header")

.style.boxShadow=

"0 10px 35px rgba(0,0,0,.18)";

}else{

document.querySelector(".header")

.style.boxShadow="none";

}

});


/* ======================================
   FLOATING WHATSAPP EFFECT
====================================== */

const wa=document.querySelector(".wa");

if(wa){

setInterval(()=>{

wa.classList.toggle("pulse");

},2000);

}


/* ======================================
   RANDOM CARD ANIMATION
====================================== */

setInterval(()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.transform="translateY(0)";

});

const random=Math.floor(

Math.random()*cards.length

);

if(cards[random]){

cards[random].style.transform=

"translateY(-10px)";

}

},3500);


/* ======================================
   END BAGIAN 5B
====================================== */

/* ==========================================
   SCRIPT.JS
   BAGIAN 5C
   HERO SLIDER
========================================== */

/* ======================================
   HERO AUTO SLIDER
====================================== */

const heroSection = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let currentHero = 0;

function changeHero(index){

    if(!heroSection) return;

    heroSection.style.opacity = "0.7";

    setTimeout(()=>{

        heroSection.style.backgroundImage =
        `url('${heroImages[index]}')`;

        heroSection.style.opacity = "1";

    },300);

}

setInterval(()=>{

    currentHero++;

    if(currentHero >= heroImages.length){

        currentHero = 0;

    }

    changeHero(currentHero);

},5000);


/* ======================================
   HERO DOT INDICATOR
====================================== */

const heroContent = document.querySelector(".hero-content");

if(heroContent){

    const dotWrapper = document.createElement("div");

    dotWrapper.className = "hero-dots";

    heroImages.forEach((img,index)=>{

        const dot = document.createElement("span");

        dot.className = "hero-dot";

        if(index===0){

            dot.classList.add("active");

        }

        dot.onclick = ()=>{

            currentHero=index;

            updateHero();

        }

        dotWrapper.appendChild(dot);

    });

    heroContent.appendChild(dotWrapper);

}

function updateHero(){

    changeHero(currentHero);

    document
    .querySelectorAll(".hero-dot")
    .forEach((dot,index)=>{

        dot.classList.toggle(
            "active",
            index===currentHero
        );

    });

}


/* ======================================
   NEXT PREVIOUS
====================================== */

function nextHero(){

    currentHero++;

    if(currentHero>=heroImages.length){

        currentHero=0;

    }

    updateHero();

}

function prevHero(){

    currentHero--;

    if(currentHero<0){

        currentHero=heroImages.length-1;

    }

    updateHero();

}


/* ======================================
   SWIPE MOBILE
====================================== */

let touchStart=0;

let touchEnd=0;

heroSection.addEventListener("touchstart",(e)=>{

touchStart=e.changedTouches[0].screenX;

});

heroSection.addEventListener("touchend",(e)=>{

touchEnd=e.changedTouches[0].screenX;

if(touchStart-touchEnd>60){

nextHero();

}

if(touchEnd-touchStart>60){

prevHero();

}

});


/* ======================================
   KEYBOARD CONTROL
====================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextHero();

}

if(e.key==="ArrowLeft"){

prevHero();

}

});


/* ======================================
   PAUSE WHEN TAB HIDDEN
====================================== */

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Slider Pause");

}else{

console.log("Slider Active");

}

}

);

/* ==========================================
   SCRIPT.JS
   BAGIAN 5D
   GALLERY + MOBILE MENU + FINAL
========================================== */


/* ======================================
   GALLERY LIGHTBOX
====================================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

if(galleryImages.length){

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`
<span class="close-lightbox">&times;</span>
<img class="lightbox-image">
`;

document.body.appendChild(lightbox);

const lightboxImg=
lightbox.querySelector(".lightbox-image");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

});



/* ======================================
   HEADER HIDE
====================================== */

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll && current>150){

document.querySelector(".header")

.style.top="-90px";

}else{

document.querySelector(".header")

.style.top="0";

}

lastScroll=current;

});


/* ======================================
   RIPPLE EFFECT
====================================== */

document.querySelectorAll(

".btn1,.btn2,.btn-order"

).forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=button.getBoundingClientRect();

ripple.style.left=
(e.clientX-rect.left)+"px";

ripple.style.top=
(e.clientY-rect.top)+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ======================================
   RANDOM HERO TEXT
====================================== */

const slogan=[

"Pedas • Segar • Bikin Nagih",

"Resep Khas Cirebon",

"Fresh Setiap Hari",

"Bumbu Racikan Premium"

];

const heroText=document.querySelector(".hero p");

if(heroText){

setInterval(()=>{

const random=Math.floor(

Math.random()*slogan.length

);

heroText.innerHTML=slogan[random];

},5000);

}





/* ======================================
   INIT
====================================== */



/* ======================================
   LAZY IMAGE
====================================== */

document.querySelectorAll("img")

.forEach(img=>{

img.loading="lazy";

});


/* ======================================
   COPYRIGHT
====================================== */

const year=new Date().getFullYear();

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

`© ${year} TAHU GEJROT PAKDE BURUNG`;

}


/* ======================================
   FINISH
====================================== */
