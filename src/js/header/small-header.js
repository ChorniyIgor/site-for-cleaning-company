(function() {
  var docElem = document.documentElement,
    header = document.querySelector(".page-header"),
    didScroll = false,
    changeHeaderOn = 200;

  function init() {
    window.addEventListener(
      "scroll",
      function(event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      },
      false
    );
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      header.classList.add("page-header--small");
    } else {
      header.classList.remove("page-header--small");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
})();
