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
let CURRENT_ID = Array.from(CARDS).map((e) => e.dataset.id);

//_Amount show cards
let AMOUNT_SHOW_CARDS = 3;

/* FUNCTIONS */
//_Function get random free id card:
const getRandomFreeID = (all, current, value) => {
  let RANDOM_ID = [];
  let FREE_ID = all.filter((e) => !current.includes(e));
  while (RANDOM_ID.length !== value) {
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

//_Remove  cards:
function removeLastElements(n) {
  for (let i = 0; i < n; i++) {
    SLIDER.lastElementChild.remove();
  }
}
function removeFirstElements(n) {
  for (let i = 0; i < n; i++) {
    SLIDER.firstElementChild.remove();
  }
}

//_Add new cards:
const addNewCards = (direction, value) => {
  let NEW_CARDS_ID;
  NEW_CARDS_ID = getRandomFreeID(ALL_ID, CURRENT_ID, value);
  NEW_CARDS_ID.forEach((e) => {
    let ANIMAL = petsArray.find((animal) => animal.id == e);
    let NEW_CARD = createCard(ANIMAL);
    if (direction === "left") {
      SLIDER.insertAdjacentHTML("afterbegin", NEW_CARD);
    } else {
      SLIDER.insertAdjacentHTML("beforeend", NEW_CARD);
    }
  });
  CURRENT_ID = Array.from(CARDS).map((e) => e.dataset.id);
  console.log(CURRENT_ID);
};

//_Move previous:
const movePrev = () => {
  SLIDER.classList.add("transition-prev");
  BTN_PREV.removeEventListener("click", movePrev);
  BTN_NEXT.removeEventListener("click", moveNext);
};
//_Move next:
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
    removeLastElements(3);
  } else {
    SLIDER.classList.remove("transition-next");
    DIRECTION = "right";
    removeFirstElements(3);
  }
  addNewCards(DIRECTION, AMOUNT_SHOW_CARDS);

  BTN_PREV.addEventListener("click", movePrev);
  BTN_NEXT.addEventListener("click", moveNext);
});
