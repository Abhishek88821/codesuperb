$(document).ready(function () {
  $(window).scroll(function () {
    $(this).scrollTop() > 100
      ? ($(".navbar").fadeIn(), $(".navbar").addClass("affix"))
      : $(".navbar").removeClass("affix");
  });

  $("#par-div_sli").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    slideTransition: "linear",
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    center: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2.1,
        nav: false,
        dots: false,
      },
      600: {
        items: 5,
        nav: false,
        dots: false,
      },
      1000: {
        items: 5,
        nav: false,
        dots: false,
      },
    },
  });

  $("#par-div_sli").trigger("play.owl.autoplay", [8000]);
  /* blog start */
  $("#tst-div_sli").owlCarousel({
    loop: true,
    autoplay: false,
    margin: 20,
    slideTransition: "linear",
    autoplaySpeed: 8000,
    smartSpeed: 5000,
    center: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2.3,
        nav: true,
      },
      1000: {
        items: 2.5,
        nav: true,
      },
    },
  });

  $("#tst-div_sli").trigger("play.owl.autoplay", [8000]);

  $("#blg-div_sli").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
        nav: false,
        dots: true,
      },
      1000: {
        items: 3,
        nav: false,
        dots: true,
      },
    },
  });

  $("#cre-div_sli").slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    centerMode: true,
    easing: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    touchThreshold: 100,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: true,
    swipeToSlide: true,
    dots: false,
  });
  $("#cre-div_sli_1").slick({
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    easing: "linear",
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    slidesToShow: true,
    centerMode: true,
    arrows: false,
    buttons: false,
    pauseOnHover: true,
    dots: false,
  });
  $("#cre-div_sli_2").slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    centerMode: true,
    easing: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    touchThreshold: 100,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: true,
    swipeToSlide: true,
    dots: false,
  });

  var lazyloadImages = $("img.lazyload");

  lazyloadImages.each(function () {
    var img = $(this);
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          img.attr("src", img.data("src")).on("load", function () {
            img.removeClass("lazyload");
            img.parent().removeClass("lazyload");
            observer.unobserve(img[0]);
          });
        }
      });
    });

    observer.observe(img[0]);
  });
});

/* contact start */
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
/* contact end */
