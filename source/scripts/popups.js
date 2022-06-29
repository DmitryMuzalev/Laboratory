const POPUP = document.querySelector(".modal-window");

const showPopup = function () {
  POPUP.classList.add("open");
  /*console.log(this.dataset.id);*/
};

function addEventCARDS() {
  if (CARDS.length > 0) {
    for (let i = 0; i < CARDS.length; i++) {
      CARDS[i].addEventListener("click", showPopup);
    }
  }
}
addEventCARDS();
