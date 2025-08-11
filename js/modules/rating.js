//* IMPORT MODULES
import { updateRatingListAttributes, initKeyboardUi } from "./ui.js";

//* RATING.JS SCRIPT
const card = document.querySelector(".main__card");
const ratingSection = document.querySelector(".rating");
const ratings = document.querySelectorAll(".rating__list");
const submitButton = document.querySelector(".rating__submit");
let ratingScore = null;
const thanksSection = document.querySelector(".thanks");
const thanksConfirmation = document.querySelector(".thanks__confirmation");

function resetSelectRating() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}

function disableSelectRating() {
  ratings.forEach((rating) => {
    rating.style.pointerEvents = "none";
  });
}

function enableSelectRating() {
  ratings.forEach((rating) => {
    rating.style.pointerEvents = "auto";
  });
}

function handleClickSelectRating(ratingElement) {
  resetSelectRating();
  ratingScore = ratingElement.textContent.trim();
  ratingElement.classList.add("active");
  updateRatingListAttributes();
}

function initSelectRating() {
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      handleClickSelectRating(rating);
    });
  });
}

function resetAnimation(element) {
  element.addEventListener("animationend", () => {
    element.classList.remove("fade-out");
    element.classList.remove("fade-in");
    element.classList.remove("shake");
    element.classList.remove("red-outline");
    void element.offsetWidth;
  });
}

function hasNoRatingSelection() {
  return ratingScore === null;
}

function shakeSubmitButton() {
  submitButton.classList.add("shake");
  resetAnimation(submitButton);
}

function disableSubmitButton() {
  submitButton.disabled = true;
  submitButton.style.pointerEvents = "none";
}

function enableSubmitButton() {
  submitButton.disabled = false;
  submitButton.style.pointerEvents = "auto";
}

function addRedOutlineToRatings() {
  ratings.forEach((rating) => {
    rating.classList.add("red-outline");
    resetAnimation(rating);
  });
}

function showConfirmation() {
  thanksConfirmation.textContent = `You selected ${ratingScore} out of 5`;
}

function isPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hideRatingsSection() {
  card.classList.add("fade-out");
  disableSelectRating();
  disableSubmitButton();
  resetAnimation(card);

  if (isPrefersReducedMotion()) {
    setTimeout(() => {
      ratingSection.style.display = "none";
    }, 1000);
  }
}

function showThanksSection() {
  card.addEventListener(
    "animationend",
    () => {
      ratingSection.style.display = "none";
      thanksSection.style.display = "flex";
      showConfirmation();
      card.classList.add("fade-in");
    },
    { once: true }
  );

  if (isPrefersReducedMotion()) {
    setTimeout(() => {
      thanksSection.style.display = "flex";
    }, 1000);
  }
}

function handleClickSubmitButton() {
  if (hasNoRatingSelection()) {
    shakeSubmitButton();
    addRedOutlineToRatings();
    disableSubmitButton();
    disableSelectRating();
    setTimeout(() => {
      enableSelectRating();
      enableSubmitButton();
    }, 1000);
    return;
  }

  hideRatingsSection();
  showThanksSection();
}

function initSubmitButton() {
  submitButton.addEventListener("click", handleClickSubmitButton);
}

export function initRating() {
  initSelectRating();
  initSubmitButton();
  initKeyboardUi();
}
