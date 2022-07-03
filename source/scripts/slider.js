/* VARIABLES */
//_Buttons:
const BTN_PREV = document.querySelector(".slider-btn_prev");
const BTN_NEXT = document.querySelector(".slider-btn_next");
//_Slider:
const SLIDER = document.querySelector(".slider");
//_Cards
let CARDS = SLIDER.children;
//All animals ID
const ALL_ID = petsArray.map((e) => String(e.id));
//Current animals ID
let CURRENT_ID = getCurrentID();

/* FUNCTIONS */
//_Function current animals ID:
function getCurrentID() {
  return Array.from(CARDS).map((e) => e.dataset.id);
}
//_Function get random animals ID:
const getRandomFreeID = (all, current) => {
  let RANDOM_ID = [];
  let FREE_ID = all.filter((e) => !current.includes(e));
  while (RANDOM_ID.length !== 3) {
    let i = Math.floor(Math.random() * FREE_ID.length);
    if (!RANDOM_ID.includes(FREE_ID[i])) RANDOM_ID.push(FREE_ID[i]);
  }
  return RANDOM_ID;
};
//_Function create card:
const createCard = (animal) => {
  return `
  <div class="card" data-id="${animal.id}">
    <div class="card__image">
      <img
      src="${animal.img}"
      alt="${animal.name}"
      />
    </div>
    <p class="card__title">${animal.name}</p>
    <a href="#" class="card__btn btn btn_contur">Learn more</a>
  </div>
`;
};
//_Function remove  cards:
const removeLastElements = () => {
  for (let i = 0; i < 3; i++) {
    SLIDER.lastElementChild.remove();
  }
};
const removeFirstElements = () => {
  for (let i = 0; i < 3; i++) {
    SLIDER.firstElementChild.remove();
  }
};
//_Function add new cards:
const addNewCards = (direction) => {
  let NEW_CARDS_ID;
  NEW_CARDS_ID = getRandomFreeID(ALL_ID, CURRENT_ID);
  NEW_CARDS_ID.forEach((e) => {
    let ANIMAL = petsArray.find((animal) => animal.id == e);
    let NEW_CARD = createCard(ANIMAL);
    if (direction === "left") {
      SLIDER.insertAdjacentHTML("afterbegin", NEW_CARD);
    } else {
      SLIDER.insertAdjacentHTML("beforeend", NEW_CARD);
    }
  });
  CURRENT_ID = getCurrentID();
};
//_Function move previous:
const movePrev = () => {
  SLIDER.classList.add("transition-prev");
  BTN_PREV.removeEventListener("click", movePrev);
  BTN_NEXT.removeEventListener("click", moveNext);
};
//_Function move next:
const moveNext = () => {
  SLIDER.classList.add("transition-next");
  BTN_PREV.removeEventListener("click", movePrev);
  BTN_NEXT.removeEventListener("click", moveNext);
};

/* EVENTS */
//_Click on BTN_PREV:
BTN_PREV.addEventListener("click", movePrev);
//_Click on BTN_NEXT:
BTN_NEXT.addEventListener("click", moveNext);
//_Actions after animation:
SLIDER.addEventListener("animationend", (animation) => {
  let DIRECTION;

  if (animation.animationName === "move-prev") {
    SLIDER.classList.remove("transition-prev");
    DIRECTION = "left";
    removeLastElements();
  } else {
    SLIDER.classList.remove("transition-next");
    DIRECTION = "right";
    removeFirstElements();
  }
  addNewCards(DIRECTION);

  addEventCARDS();

  BTN_PREV.addEventListener("click", movePrev);
  BTN_NEXT.addEventListener("click", moveNext);
});
