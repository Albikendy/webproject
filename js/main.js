document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

/*============== SWIPER JS ==================*/
let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween : 32,
    grabCursor: true,
 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      600:{
        slidesPerView:2, 
      },
      968:{
        slidesPerView:3,
      },
    },
});


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const navLinks = document.getElementById("navLinks");

  // Ensure navLinks is hidden by default
  navLinks.style.right = "-100%";

  if (menuBtn && closeBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.style.right = "0";
      navLinks.classList.add("active"); // Add the background
    });

    closeBtn.addEventListener("click", () => {
      navLinks.style.right = "-100%";
      navLinks.classList.remove("active"); // Remove the background
    });
  }
});


