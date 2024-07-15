const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal-alert");
const fade = document.querySelector("#fade");

const alternarModal = () => {
    modal.classList.toggle("esconder");
    fade.classList.toggle("esconder");
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => alternarModal());
});