
  document.addEventListener("DOMContentLoaded", function () {
    initFocusShareCarousel(); 
    initInternationalRecognition();
    initPatientStories();
    // Other upcoming features can be called here too
  });

  function initFocusShareCarousel() {
    const indicators = document.querySelectorAll(".FocusShare .carousel-indicators .bar");
    const slides = document.querySelectorAll(".FocusShare .carousel-slides .slide");

    indicators.forEach(indicator => {
      indicator.addEventListener("click", () => {
        const index = indicator.getAttribute("data-slide");

        // Remove active class from all
        indicators.forEach(bar => bar.classList.remove("active"));
        slides.forEach(slide => slide.classList.remove("active"));

        // Add active class to clicked indicator + corresponding slide
        indicator.classList.add("active");
        slides[index].classList.add("active");
      });
    });
  }

function initInternationalRecognition() {
    const wrapper = document.querySelector(".InternationalRecognition .logos");
    const leftBtn = document.querySelector(".InternationalRecognition .arrow.left");
    const rightBtn = document.querySelector(".InternationalRecognition .arrow.right");

    // Scroll step size
    const scrollAmount = 200;

    leftBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }



   function initPatientStories() {
    const carousel = document.querySelector(".PatientStories .stories-carousel");
    const leftBtn = document.querySelector(".PatientStories .arrow.left");
    const rightBtn = document.querySelector(".PatientStories .arrow.right");

    const scrollAmount = 300; // pixels to scroll

    leftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
