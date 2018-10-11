var link = document.querySelector(".login-link-ref");
var popup = document.querySelector(".modal-login");
var closeBtn = document.querySelector(".modal-close");
var modalLogin = document.querySelector(".user-form input[name=\"login\"]");
var modalForm = document.querySelector(".user-form");
var modalPassword = document.querySelector(".user-form input[type=\"password\"]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  modalLogin.focus();
});

closeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.remove("modal-show");
});

modalForm.addEventListener("submit", function(evt) {

  if (!modalLogin.value || !modalPassword.value) {
    evt.preventDefault();
    console.log("Отсутствует значение логина и пароля");
  }
});
