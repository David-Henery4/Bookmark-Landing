"use strict";

// ALL CONTENT ELEMENTS
const accordContent = document.querySelectorAll(".accord-content");
// ALL ACCORDION ICONS
const accordionIcons = document.querySelectorAll(".accord-icon");
// ACCORDION CONTAINER
const questionsContainer = document.getElementById("questions");

questionsContainer.addEventListener("click", (e) => {
  const currentQuest = e.target.closest(".accord");
  if (!currentQuest.dataset.quest) return;
  toggleFaqs(currentQuest);
  flipAccordionIcon(currentQuest);
});

// ACCORDIONS
const toggleFaqs = (currentQuest) => {
  accordContent.forEach((e, i, a) => {
    const content = e.dataset.questcontent;
    // TOGGLE ACTIVE FAQ
    if (content === currentQuest.dataset.quest) {
      e.style.maxHeight === "500px"
        ? (e.style.maxHeight = "0px")
        : (e.style.maxHeight = "500px");
    }
    // CLOSE THE REST OF FAQs WHEN NOT ACTIVE
    if (content !== currentQuest.dataset.quest) {
      e.style.maxHeight = "0px";
    }
  });
};

// LABEL ICONS
const flipAccordionIcon = (currentQuest) => {
  accordionIcons.forEach((e, i, a) => {
    const icon = e.dataset.icon;
    // TOGGLES ACTIVE ICON
    if (currentQuest.dataset.quest === icon) {
      e.classList.toggle("stroke-softRed");
      // stroke-softRed
      e.style.transform === "rotateX(0deg)"
        ? (e.style.transform = "rotateX(180deg)")
        : (e.style.transform = "rotateX(0deg)");
    }
    // RESETS NON-ACTIVE ICONS
    if (icon !== currentQuest.dataset.quest) {
      e.classList.remove("stroke-softRed");
      e.style.transform = "rotateX(0deg)";
    }
  });
};
