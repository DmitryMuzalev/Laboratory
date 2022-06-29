/* VARIABLES */
//_POPUP:
const POPUP = document.querySelector(".modal-window");
//_POPUP components:
let POPUP_IMAGE = POPUP.querySelector(".modal-window__image img");
let POPUP_TITLE = POPUP.querySelector(".modal-window-info__title");
let POPUP_SUBTITLE = POPUP.querySelector(".modal-window-info__subtitle");
let POPUP_TEXT = POPUP.querySelector(".modal-window-info__text");
let POPUP_DATALIST = POPUP.querySelector(".modal-window-info__data-list");
let POPUP_AGE = POPUP_DATALIST.querySelector("#age");
let POPUP_INOCULATIONS = POPUP_DATALIST.querySelector("#inoculations");
let POPUP_DISEASES = POPUP_DATALIST.querySelector("#diseases");
let POPUP_PARASITES = POPUP_DATALIST.querySelector("#parasites");

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
  //!
}
//_Function to display modal window:
function showPopup() {
  let ANIMAL = petsArray.find((e) => e.id == this.dataset.id);
  createPopup(ANIMAL);
  POPUP.classList.add("open");
}
