"use strict";

const tabLabelContainer = document.getElementById("tab-container");
const allTabLabels = document.querySelectorAll(".tab");
const slides = document.querySelectorAll(".slide-content");

tabLabelContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".tab");
  if (!clicked) return;
  activeTabLabels(clicked);
  changingSlides(clicked);
});

const activeTabLabels = (clicked) => {
  // CHANGING ACTIVE TAB LABELS
  allTabLabels.forEach((t) => {
    t.classList.remove("border-b-softRed");
    t.classList.remove("border-b-4");
  });
  clicked.classList.add("border-b-softRed");
  clicked.classList.add("border-b-4");
};

const changingSlides = (clicked) => {
  // CHANGING SLIDES
  slides.forEach((slide) => {
    slide.classList.remove("flex");
    slide.classList.add("hidden");
  });
  document
    .getElementById(`slide-content--${clicked.dataset.tab}`)
    .classList.remove("hidden");
  document
    .getElementById(`slide-content--${clicked.dataset.tab}`)
    .classList.add("flex");
};
