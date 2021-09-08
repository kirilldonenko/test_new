/* Активизация меню main-nav*/
var mainNav = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");
toggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});


/* Показ и скрытие подменю "Каталог товаров" */

$("#catalog").click(function(event) {
  event.preventDefault();
  $("#submenu").toggle();
});



