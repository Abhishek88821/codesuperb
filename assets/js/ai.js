// navbar top sticy
$(window).scroll(function () {
  $(this).scrollTop() > 50
    ? ($(".hd-sec").fadeIn(), $(".hd-sec").addClass("hd-sec_animate"))
    : $(".hd-sec").removeClass("hd-sec_animate");
});

//discss the project form
$('.discussTheProject-sec_method_container > ul > li').click(function() {
  $(".discussTheProject-sec_method_container > ul > li").removeClass('active');
  $(this).addClass('active');
  $("#your-contact-method").attr('placeholder', $(this).data('text'));
})

//gsap text split
const isMobile = window.innerWidth <= 768;
const animationDuration = isMobile ? 1 : 0.2;

gsap.registerPlugin(ScrollTrigger);
const hr_H1 = new SplitType(".hr-sec_heading_container h1");
const hr_H2 = new SplitType(".hr-sec_heading_container h2");
const heading = new SplitType(".sec_heading_container h2");
const service = document.querySelectorAll(".b2blr0");

//timeline  #1
let tl = gsap.timeline({});

tl.to(".char", {
  opacity: 1,
  y: 0,
  stagger: 0.1,
  duration: animationDuration,
});
tl.from(
  ".hr-sec_heading_container_second span",
  {
    opacity: 0,
    y: 50,
    delay: 1.4,
    duration: 0.8,
  },
  "<"
);
tl.from(
  ".hd-sec",
  {
    opacity: 0,
    y: -80,
    duration: 1,
  },
  "<"
);
tl.from(
  ".hr-sec_video",
  {
    opacity: 0,
    duration: 1.5,
  },
  "<"
);
tl.from(
  ".hr-sec_heading_container_play",
  {
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 1,
  },
  "<"
);
tl.from(
  ".hr-sec_link_container > ul > li",
  {
    opacity: 0,
    y: 30,
    stagger: 0.25,
    duration: 1,
  },
  "<"
);
tl.from(
  ".hr-sec_cloud-container, .hr_sec_website_container, .hr-sec_ai_container",
  {
    opacity: 0,
    delay: 1,
    duration: 1,
  },
  "<"
);

// Function to play the timeline
// function playAnimation() {
//   tl.restart(); // Restart the timeline
// }

// Trigger the animation on page load
// window.addEventListener('load', playAnimation);

// Trigger the animation on scroll
// window.addEventListener('scroll', playAnimation);

// =================== t2
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ct-sec",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
    markers: false,
  }
});
t2.from(".ct-sec_logo", {
  // opacity: 0,
  // duration: 1,
  // ease: "circ.out"
});

// =================== t3
// let t3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".srv-sec",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     once: true,
//     markers: true,
//   },
// });
// t3.to(".char", {
//   opacity: 1,
//   y: 0,
//   stagger: 0.1,
//   duration: 0.2,
// });
// t3.from(
//   ".b2blr0",
//   {
//     opacity: 0,
//     y: 30,
//     stagger: 1,
//     duration: 1.5,
//   });

// =================== t4
// let t4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".fnd-sec",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     once: true,
//     markers: true,
//   },
// });
// t4.to(".char", {
//   opacity: 1,
//   y: 0,
//   stagger: 0.1,
//   duration: 0.2,
// });
// t4.from(
//   ".fnd-sec_project",
//   {
//     opacity: 0,
//     y: 30,
//     stagger: 1,
//     duration: 1.5,
//   });
