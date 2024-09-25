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
// gsap.set(".preloader", { opacity: 0 });
const hr_H1 = new SplitType(".hr-sec_heading_container h1");
const hr_H2 = new SplitType(".hr-sec_heading_container h2");
const clients = gsap.utils.toArray(".ct-sec_logo_image");
const services = gsap.utils.toArray(".b2blr0");
const projects = gsap.utils.toArray(".fnd-sec_project");
const blogs = gsap.utils.toArray(".blg-sec_project");
//timeline  #1
let tl = gsap.timeline({});

tl.to(
  ".preloader",
  {
    opacity: 0,
    duration: 1,
  },
  "<"
);

tl.to(
  ".char",
  {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: animationDuration,
  },
  "<"
);
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
    opacity: 0,
    y: 80,
    duration: 1.5,
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
      onRefresh: () => {
        gsap.set(element, { clearProps: "all" });
      },
    },
  });
});

let t3 = gsap.timeline({});
t3.from(".b2blr0", {
  opacity: 0,
  y: 80,
  duration: 2,
});

//================= timeline #4
projects.forEach((project) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top bottom",
      toggleActions: "play none none reverse",
      markers: false,
      onRefresh: () => {
        gsap.set(project, { clearProps: "all" });
      },
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
    onRefresh: () => {
      gsap.set(".vdo-sec", { clearProps: "all" });
    },
  },
});

//================= timeline #6
blogs.forEach((blog) => {
  gsap.from(blog, {
    scrollTrigger: {
      trigger: blog,
      start: "top bottom",
      toggleActions: "play none none reverse",
      markers: false,
      onRefresh: () => {
        gsap.set(blog, { clearProps: "all" });
      },
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

ScrollTrigger.refresh();
//================= timeline #7 | heading
// const headingElements = document.querySelectorAll(".sec_heading_container h2");
// headingElements.forEach((heading) => {
//   const splitText = new SplitType(heading);

//   const t7 = gsap.timeline({
//     scrollTrigger: {
//       trigger: heading,
//       start: "-140% center",
//       toggleActions: "play none none none",
//       markers: false,
//     },
//   });

//   t7.to(splitText.chars, {
//     opacity: 1,
//     y: 0,
//     stagger: 0.1,
//     duration: animationDuration,
//   });
// });

// =============== timeline #8
// gsap.to(".foo-sec", {
//   opacity: 1,
//   y: 0,
//   duration: 2,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".foo-sec",
//     markers: false,
//     start: "-80% 90%",
//     end: "bottom 10%",
//     toggleActions: "play none none none",
//   },
// });

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

// timeline #10 | innerpages
//   gsap.from(".mai-sec_content_container", {
//     scrollTrigger: {
//       trigger: ".mai-sec_content",
//       start: "top bottom",
//       toggleActions: "play none none none",
//       markers: false,
//       onRefresh: () => {
//         gsap.set(".mai-sec_content_container", { clearProps: "all" });
//       },
//     },
//     opacity: 0,
//     y: 80,
//     duration: 1.5,
//   });

// let t10 = gsap.timeline({});
// t6.from(".mai-sec_content_container", {
//   opacity: 0,
//   y: 80,
//   duration: 2,
// });

//menu
const menuIcon = document.querySelector(".hd-sec_hanburger_container");
const menuContent = document.querySelector(".hd-sec_hanburger_mobile_navbar");

gsap.set(
  menuContent.querySelectorAll(
    ".hd-sec_hanburger_mobile_navbar_header, .hd-sec_hanburger_mobile_navbar_container ul li, .hd-sec_social_container li, .hd-sec_language, .hd-sec_action_container"
  ),
  { opacity: 0 }
);
menuIcon.addEventListener("click", () => {
  if (menuContent.style.display === "block") {
    gsap.to(menuContent, {
      height: 0,
      opacity: 0,
      duration: 1,
      onComplete: () => {
        menuContent.style.display = "none";
      },
    });
  } else {
    menuContent.style.display = "block";
    gsap.fromTo(
      menuContent,
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "auto",
        opacity: 1,
        duration: 1,
        onComplete: () => {
          gsap.fromTo(
            menuContent.querySelectorAll(
              ".hd-sec_hanburger_mobile_navbar_header, .hd-sec_hanburger_mobile_navbar_container ul li, .hd-sec_social_container li, .hd-sec_language,.hd-sec_action_container"
            ),
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.08,
            }
          );
        },
      }
    );
  }
});

const closeButton = menuContent.querySelector(
  ".hd-sec_hanburger_mobile_navbar_header_close_container"
);
closeButton.addEventListener("click", () => {
  gsap.to(
    menuContent.querySelectorAll(
      ".hd-sec_hanburger_mobile_navbar_header, .hd-sec_hanburger_mobile_navbar_container ul li, .hd-sec_social_container li, .hd-sec_language, .hd-sec_action_container"
    ),
    {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.1,
      onComplete: () => {
        gsap.to(menuContent, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            menuContent.style.display = "none";
          },
        });
      },
    }
  );
});
