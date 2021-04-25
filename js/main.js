let modal = document.getElementById("modal1");
let cards = document.getElementsByClassName("card");
let modalImg = document.getElementById("modalImg");
let captionText = document.getElementById("caption");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", showImageModal);
}

function showImageModal() {
  // modal.style.display = "block";
  modalImg.src = this.firstElementChild.src;
  modalImg.alt = this.firstElementChild.alt;
  captionText.innerHTML = this.firstElementChild.alt;
}
