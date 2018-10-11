var link = document.querySelector(".login-link-ref");
var popup = document.querySelector(".modal-login");
var closeBtn = document.querySelector(".modal-close");
var modalLogin = document.querySelector(".user-form input[name=\"login\"]");
var modalForm = document.querySelector(".user-form");
var modalPassword = document.querySelector(".user-form input[type=\"password\"]");
var isStorageSupport = true;
var storageLogin = "";

try {
  storageLogin = localStorage.getItem("login");
} catch {
  isStorageSupport = false;
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageLogin) {
    modalLogin.value = storageLogin;
    modalPassword.focus();
  } else {
    modalLogin.focus();
  }
});

closeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {

  if (!modalLogin.value || !modalPassword.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;/*Хак для обновления анимации*/
    popup.classList.add("modal-error");
    console.log("Отсутствует значение логина и пароля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", modalLogin.value);
    }
  }
});
