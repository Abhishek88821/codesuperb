// navbar top sticy
$(window).scroll(function () {
  $(this).scrollTop() > 50
    ? ($(".hd-sec").fadeIn(), $(".hd-sec").addClass("hd-sec_animate"))
    : $(".hd-sec").removeClass("hd-sec_animate");
});
