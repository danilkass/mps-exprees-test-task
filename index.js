var toggleBtns = document.querySelectorAll("#toggle-btn");

toggleBtns.forEach(function (btn) {
  btn.addEventListener("touchstart", function () {
    btn.classList.toggle("active");
  });
});
