const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const closeBtn = document.querySelector(".js-close-btn");
const buyTickets = document.querySelectorAll(".js-buy-tickets");

// add class .open to modal
function showBuyTickets() {
  modal.classList.add("open");
}

// remove class .open from modal
function closeBuyTickets() {
  modal.classList.remove("open");
}

//show modal when buy ticket button is clicked
buyTickets.forEach((buyTicket) => {
  buyTicket.addEventListener("click", showBuyTickets);
});

// close modal when close button is clicked
closeBtn.addEventListener("click", closeBuyTickets);

// close modal when click on modal
modal.addEventListener("click", closeBuyTickets);

// stop closing modal on modal container
modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
