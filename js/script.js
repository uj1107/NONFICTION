$(document).ready(function () {
  function scrollRotate() {
    let image = document.getElementById("logo");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  }

  window.addEventListener("scroll", scrollRotate);

  var lastScrollTop = 0;
  var delta = 5;
  var fixbox = document.querySelector(".banner-wrap");
  var fixboxHeight = fixbox.offsetHeight;
  var didScroll;

  window.onscroll = function (e) {
    didScroll = true;
  };
  //   0.25초마다 스크롤 여부 체크
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var nowScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
      return;
    }
    // scrolldown
    if (nowScrollTop > lastScrollTop && nowScrollTop > fixboxHeight) {
      fixbox.classList.remove("show");
      document.getElementById("nav").classList.add("down");
    }
    // scrollup
    else {
      if (nowScrollTop < fixboxHeight) {
        fixbox.classList.add("show");
        document.getElementById("nav").classList.remove("down");
      }
    }
    lastScrollTop = nowScrollTop;
  }

  $(".slider").slick({
    infinie: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
  });
});
