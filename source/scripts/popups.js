const createPopup = function (animal) {
  return ` <div class="modal-window">
    <div class="modal-window__body">
      <div class="modal-window__content">
        <div class="modal-window__image">
          <img src=${animal.img} alt=${animal.name} />
        </div>
        <div class="modal-window__info modal-window-info">
          <h3 class="modal-window-info__title">${animal.name}</h3>
          <h4 class="modal-window-info__subtitle">${animal.type} - ${animal.breed}</h4>
          <p class="modal-window-info__text">
          ${animal.description}
          </p>
          <ul class="modal-window-info__data-list">
            <li>
              <span>Age: </span>${animal.age}
            </li>
            <li>
              <span>Inoculations: </span>${animal.inoculations}
            </li>
            <li>
              <span>Diseases: </span>${animal.diseases}
            </li>
            <li>
              <span>Parasites: </span>${animal.parasites}
            </li>
          </ul>
        </div>
        <div class="modal-window__close">
          <img src="/source/images/modal/close.svg" alt="Button close" />
        </div>
      </div>
    </div>
  </div>;`;
};
const addPopup = function (animal) {
  SLIDER.insertAdjacentHTML("beforeend", createPopup(animal));
};
const showPopup = function (element) {
  let ID = this.dataset.id;
  let ANIMAL = petsArray.find((animal) => animal.id == ID);
  addPopup(ANIMAL);
};

function addEventCARDS() {
  if (CARDS.length > 0) {
    for (let i = 0; i < CARDS.length; i++) {
      CARDS[i].addEventListener("click", showPopup);
    }
  }
}
addEventCARDS();
