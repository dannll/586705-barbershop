var link = document.querySelector(".login-link-ref");
var popup = document.querySelector(".modal-login");
var closeBtn = document.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.add("modal-show");
});

closeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.remove("modal-show");
})
