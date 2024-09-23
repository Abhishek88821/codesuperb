// navbar top sticy
$(window).scroll(function () {
  $(this).scrollTop() > 50
    ? ($(".hd-sec").fadeIn(), $(".hd-sec").addClass("hd-sec_animate"))
    : $(".hd-sec").removeClass("hd-sec_animate");
});

//discss the project form
$(".discussTheProject-sec_method_container > ul > li").click(function () {
  $(".discussTheProject-sec_method_container > ul > li").removeClass("active");
  $(this).addClass("active");
  $("#your-contact-method").attr("placeholder", $(this).data("text"));
});

//gsap text split
const isMobile = window.innerWidth <= 768;
const animationDuration = isMobile ? 0.5 : 0.2;

gsap.registerPlugin(ScrollTrigger);
const hr_H1 = new SplitType(".hr-sec_heading_container h1");
const hr_H2 = new SplitType(".hr-sec_heading_container h2");
// const button = new SplitType(".fnd-sec_link_container span");
const clients = gsap.utils.toArray(".ct-sec_logo_image");
const services = gsap.utils.toArray(".b2blr0");
const projects = gsap.utils.toArray(".fnd-sec_project");
const blogs = gsap.utils.toArray(".blg-sec_project");

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
tl.to(
  ".hd-sec",
  {
    opacity: 1,
    y: 0,
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

// =================== timeline #2 | clients start
gsap.to(clients, {
  xPercent: -100 * (clients.length - 1),
  opacity: 1,
  ease: "power1.out",
  duration: 10,
  scrollTrigger: {
    trigger: ".ct-sec_logo-container",
    markers: false,
    pin: true,
    scrub: 5,
    snap: 1 / (clients.length - 1),
    start: "-70% center",
    end: "130% center",
  },
});

// =================== timeline #3
services.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
      markers: false,
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
  });
});

let t3 = gsap.timeline({});
t3.from(".b2blr0", {
  opacity: 0,
  y: 80,
  duration: 2,
});

//================= timeline #4
projects.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
      markers: false,
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
  });
});
let t4 = gsap.timeline({});
t4.from(".fnd-sec_project", {
  opacity: 0,
  y: 80,
  duration: 2,
});

//================= timeline #5
gsap.from(".vdo-sec", {
  opacity: 0,
  y: 80,
  duration: 2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".vdo-sec",
    markers: false,
    start: "-10% 75%",
    toggleActions: "play none none none",
  },
});

//================= timeline #6
blogs.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
      markers: false,
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
  });
});
let t6 = gsap.timeline({});
t6.from(".blg-sec_project", {
  opacity: 0,
  y: 80,
  duration: 2,
});

//================= timeline #7 | heading
const headingElements = document.querySelectorAll(".sec_heading_container h2");
headingElements.forEach((heading) => {
  const splitText = new SplitType(heading);

  const t7 = gsap.timeline({
    scrollTrigger: {
      trigger: heading,
      start: "-140% center",
      toggleActions: "play none none none",
      markers: false,
    },
  });

  t7.to(splitText.chars, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: animationDuration,
  });
});

// =============== timeline #8
gsap.to(".foo-sec", {
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".foo-sec",
    markers: false,
    start: "-80% 90%",
    end: "bottom 10%",
    toggleActions: "play none none none",
  },
});

// ============= timeline #9 | button
const buttons = document.querySelectorAll(".btn-ani_wave");
buttons.forEach((button) => {
  const splitText = new SplitType(button, { types: "chars" });
  const chars = splitText.chars;
  gsap.set(chars, { opacity: 1, y: 0 });
  const t8 = gsap
    .timeline({ paused: true })
    .to(chars, {
      y: 40,
      stagger: 0.02,
    })
    .to(chars, {
      y: 0,
      stagger: 0.1,
      duration: 0.2,
    });

  button.addEventListener("mouseenter", () => t8.restart());
  button.addEventListener("mouseleave", () => gsap.set(chars, { y: 0 }));
});
