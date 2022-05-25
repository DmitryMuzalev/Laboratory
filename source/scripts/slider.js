/* VARIABLES */
//_Buttons:
const BTN_PREV = document.querySelector(".slider-btn_prev");
const BTN_NEXT = document.querySelector(".slider-btn_next");
//_Slider:
const SLIDER = document.querySelector(".slider");

/* FUNCTIONS */
//_Move previous:
const movePrev = () => {
  SLIDER.classList.add("transition-prev");
};
//_Move next:
const moveNext = () => {
  SLIDER.classList.add("transition-next");
};

/* EVENTS */
//_Click on BTN_PREV:
BTN_PREV.addEventListener("click", movePrev);
//_Click on BTN_NEXT:
BTN_NEXT.addEventListener("click", moveNext);
