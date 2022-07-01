/* VARIABLES */
//_BODY:
const BODY = document.querySelector("body");
//PADDING_LOCK
const PADDING_LOCK = document.querySelectorAll(".padding-lock");

//_POPUP:
const POPUP = document.querySelector(".modal-window");

//_POPUP components:
const POPUP_CONTENT = POPUP.querySelector(".modal-window__content");
let POPUP_IMAGE = POPUP.querySelector(".modal-window__image img");
let POPUP_TITLE = POPUP.querySelector(".modal-window-info__title");
let POPUP_SUBTITLE = POPUP.querySelector(".modal-window-info__subtitle");
let POPUP_TEXT = POPUP.querySelector(".modal-window-info__text");
let POPUP_DATALIST = POPUP.querySelector(".modal-window-info__data-list");
let POPUP_AGE = POPUP_DATALIST.querySelector("#age");
let POPUP_INOCULATIONS = POPUP_DATALIST.querySelector("#inoculations");
let POPUP_DISEASES = POPUP_DATALIST.querySelector("#diseases");
let POPUP_PARASITES = POPUP_DATALIST.querySelector("#parasites");
let POPUP_BTN_CLOSE = POPUP.querySelector(".close-popup");

/* EVENTS */
//_Click on CARDS:
addEventCARDS();
function addEventCARDS() {
  if (CARDS.length > 0) {
    for (let i = 0; i < CARDS.length; i++) {
      CARDS[i].addEventListener("click", showPopup);
    }
  }
}
//_Click on POPUP_BTN_CLOSE:
POPUP_BTN_CLOSE.addEventListener("click", closePopup);

POPUP.addEventListener("click", function (e) {
  if (!e.target.closest(".modal-window__content")) {
    closePopup();
  }
});

/* FUNCTIONS */
//_Popup creation function:
function createPopup(animal) {
  POPUP_IMAGE.setAttribute("src", animal.img);
  POPUP_TITLE.innerHTML = animal.name;
  POPUP_SUBTITLE.innerHTML = `${animal.type} - ${animal.breed}`;
  POPUP_TEXT.innerHTML = animal.description;
  POPUP_AGE.innerHTML = animal.age;
  POPUP_INOCULATIONS.innerHTML = animal.inoculations;
  POPUP_DISEASES.innerHTML = animal.diseases;
  POPUP_PARASITES.innerHTML = animal.parasites;
  //_Escape button press
  document.addEventListener("keydown", pressKeys);
}
//_Function to display modal window:
function showPopup() {
  let ANIMAL = petsArray.find((e) => e.id == this.dataset.id);
  createPopup(ANIMAL);
  paddingLock();
  POPUP.classList.add("open");
  POPUP_CONTENT.classList.add("open-content");
}
//_Function to close modal window:
function closePopup() {
  POPUP.classList.remove("open");
  POPUP_CONTENT.classList.remove("open-content");
  paddingUnLock();
  document.removeEventListener("keydown", pressKeys);
}
//_Function to close modal window on Escape:
function pressKeys(e) {
  if (e.key === "Escape") {
    closePopup();
  }
  if (e.key === "Tab") {
    e.preventDefault();
  }
}
//_Functions for controlling scrolling at the moments of opening and closing the modal window :
function paddingLock() {
  const paddingRightValue = window.innerWidth - BODY.offsetWidth + "px";
  for (let i = 0; i < PADDING_LOCK.length; i++) {
    PADDING_LOCK[i].style.paddingRight = paddingRightValue;
  }
  BODY.classList.add("lock");
}
function paddingUnLock() {
  setTimeout(function () {
    for (let i = 0; i < PADDING_LOCK.length; i++) {
      PADDING_LOCK[i].style.paddingRight = "0px";
    }
    BODY.classList.remove("lock");
  }, 500);
}
