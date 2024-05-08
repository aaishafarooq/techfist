


'use strict';

/**
 * Add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * Navbar toggle for mobile
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

// Close navbar when a nav-toggler element or a navbar link is clicked
const closeNavbarOnClick = function () {
  toggleNavbar(); // Close the navbar
}

// Add click event listeners to navTogglers and navbar links to close the navbar
addEventOnElements(navTogglers, "click", closeNavbarOnClick);
addEventOnElements(document.querySelectorAll(".navbar-link"), "click", closeNavbarOnClick);

/**
 * Header: active header when window scroll down to 100px
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Slider
 */
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {
  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;
    currentSlidePos = slideEnd ? 0 : currentSlidePos + 1;
    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  const slidePrev = function () {
    currentSlidePos = currentSlidePos <= 0 ? sldierContainer.childElementCount - 1 : currentSlidePos - 1;
    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
}

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}

/**
 * Accordion
 */
const accordions = document.querySelectorAll("[data-accordion]");
let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }
    currentAccordion.classList.toggle("expanded");
    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);
}

for (let i = 0, len = accordions.length; i < len; i++) {
  initAccordion(accordions[i]);
}
