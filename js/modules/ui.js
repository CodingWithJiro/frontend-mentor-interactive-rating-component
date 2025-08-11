//* UI.JS SCRIPT
const ratings = document.querySelectorAll(".rating__list");

function isSelected(ratingElement) {
  return ratingElement.classList.contains("active");
}

export function updateRatingListAttributes() {
  ratings.forEach((rating) => {
    rating.setAttribute("aria-checked", "false");
    rating.setAttribute("tabindex", "-1");
    if (isSelected(rating)) {
      rating.setAttribute("aria-checked", "true");
      rating.setAttribute("tabindex", "0");
    }
  });
}

function unFocusPreviousRating(ratingElement) {
  ratingElement.setAttribute("tabindex", "-1");
}

function focusCurrentRating(ratingElement) {
  ratingElement.setAttribute("tabindex", "0");
  ratingElement.focus();
}

function handleKeydownRating(event, index) {
  let newIndex = 0;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    newIndex = index + 1 === ratings.length ? 0 : index + 1;
    unFocusPreviousRating(ratings[index]);
    focusCurrentRating(ratings[newIndex]);
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    newIndex = index - 1 < 0 ? 4 : index - 1;
    unFocusPreviousRating(ratings[index]);
    focusCurrentRating(ratings[newIndex]);
  }

  if (event.key === " " || event.key === "Enter") {
    ratings[index].click();
  }
}

export function initKeyboardUi() {
  ratings.forEach((rating, index) => {
    rating.addEventListener("keydown", (e) => {
      handleKeydownRating(e, index);
    });
  });
}
