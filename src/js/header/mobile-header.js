(function() {
  var button = document.querySelector(".mobile_button");
  var buttonClose = document.querySelector(".close_menu_btn");
  var nav = document.getElementById("slow_nav");
  var overlay = document.querySelector(".close_overlay_backg");

  overlay.addEventListener("click", function() {
    if (nav.classList.contains("nav_close")) {
      nav.classList.remove("nav_close");
      nav.classList.add("nav_open");

      overlay.classList.remove("show-block");
      overlay.classList.add("close-block");
    } else {
      nav.classList.add("nav_close");
      nav.classList.remove("nav_open");
      overlay.classList.remove("show-block");
      overlay.classList.add("close-block");
    }
  });

  button.addEventListener("click", function() {
    if (nav.classList.contains("nav_close")) {
      nav.classList.remove("nav_close");
      nav.classList.add("nav_open");

      overlay.classList.remove("close-block");
      overlay.classList.add("show-block");
    } else {
      nav.classList.add("nav_close");
      nav.classList.remove("nav_open");
    }
  });

  buttonClose.addEventListener("click", function() {
    if (nav.classList.contains("nav_close")) {
      nav.classList.remove("nav_close");
      nav.classList.add("nav_open");

      overlay.classList.remove("show-block");
      overlay.classList.add("close-block");
    } else {
      nav.classList.add("nav_close");
      nav.classList.remove("nav_open");
      overlay.classList.remove("show-block");
      overlay.classList.add("close-block");
    }
  });
})();
