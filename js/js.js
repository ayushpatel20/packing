
    AOS.init({
  duration:1200,
  once:false,
  mirror:true,
  offset:120,
  easing:"ease-out-cubic"
});
document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("no-banner");

});
      /* HEADER SCROLL */

      window.addEventListener("scroll", function () {
        const header = document.getElementById("aanya-header");

        header.classList.toggle("scrolled", window.scrollY > 50);
      });

      /* MOBILE MENU */

      function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("open");
      }
   
      const counters = document.querySelectorAll(".count");

      const startCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const speed = target / 120;

        const updateCount = () => {
          count += speed;

          if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      };

      /* Run on Scroll */
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counter = entry.target;

              if (!counter.classList.contains("counted")) {
                startCounter(counter);
                counter.classList.add("counted");
              }
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      counters.forEach((counter) => {
        observer.observe(counter);
      });


new Swiper(".products-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay:false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

 

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
  768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("enquiryPopup");
  const closeBtn = document.getElementById("closePopup");

  function openPopup() {
    popup.classList.add("active");
  }

  function closePopup() {
    popup.classList.remove("active");
  }

  // 10 SECOND AUTO OPEN
  setTimeout(() => {
    openPopup();
  }, 10000);

  // CLOSE BUTTON
  closeBtn.addEventListener("click", closePopup);

  // OUTSIDE CLICK CLOSE
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

});

document.addEventListener("DOMContentLoaded", function(){

    const currentPage = window.location.pathname;

    const pagesWithoutBanner = [
        "about.html",
        "products.html",
        "contact.html",
        "gallery.html"
    ];

    const fileName = currentPage.split("/").pop();

    if(pagesWithoutBanner.includes(fileName)){
        document.body.classList.add("no-banner");
    }

});


/* ==========================
   PRODUCT GALLERY
========================== */

const thumbs = document.querySelectorAll('.thumbs img');
const mainImage = document.querySelector('.main-product-img img');

thumbs.forEach(img => {

    img.addEventListener('click', function(){

        mainImage.src = this.src;

        thumbs.forEach(item=>{
            item.classList.remove('active-thumb');
        });

        this.classList.add('active-thumb');

    });

});


/* ==========================
   IMAGE ZOOM EFFECT
========================== */

const imageWrap = document.querySelector('.main-product-img');

if(imageWrap){

    imageWrap.addEventListener('mousemove', function(e){

        const img = this.querySelector('img');

        const rect = this.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = 'scale(1.5)';

    });

    imageWrap.addEventListener('mouseleave', function(){

        const img = this.querySelector('img');

        img.style.transform = 'scale(1)';
        img.style.transformOrigin = 'center';

    });

}


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });

        }

    });

});


/* ==========================
   REVEAL ANIMATION
========================== */

const reveals = document.querySelectorAll('.reveal');

const revealElements = () => {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add('active');

        }

    });

};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);



function openMachine(el){

  let card = el.closest(".category-card");

  let title = card.getAttribute("data-title");
  let img = card.getAttribute("data-img");
  let features = card.getAttribute("data-features").split(",");

  document.getElementById("machinePopup").style.display = "flex";

  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupImg").src = img;

  let ul = document.getElementById("popupList");
  ul.innerHTML = "";

  features.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  document.body.style.overflow = "hidden";
}

function closeMachine(){
  document.getElementById("machinePopup").style.display = "none";
  document.body.style.overflow = "auto";
}



const galleries = document.querySelectorAll('.product-gallery');

galleries.forEach(gallery => {

    const track = gallery.querySelector('.gallery-track');
    const totalImages = track.querySelectorAll('img').length;

    let index = 0;
    let slider;

    gallery.addEventListener('mouseenter', () => {

        slider = setInterval(() => {

            index++;

            if(index >= totalImages){
                index = 0;
            }

            track.style.transform =
            `translateX(-${index * 25}%)`;

        }, 1500);

    });

    gallery.addEventListener('mouseleave', () => {

        clearInterval(slider);

        index = 0;

        track.style.transform = 'translateX(0)';
    });

});

function openVideo(url){
    document.getElementById('videoFrame').src = url;
    document.getElementById('videoModal').classList.add('active');
}

function closeVideo(){
    document.getElementById('videoFrame').src = '';
    document.getElementById('videoModal').classList.remove('active');
}
