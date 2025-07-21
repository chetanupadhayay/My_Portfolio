// Toggle Navbar Icon & Navigation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

// Scroll Section Active Link and Sticky Header
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute("id");

    if (
      currentScroll >= sectionTop &&
      currentScroll < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `header nav a[href*="${sectionId}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Sticky Header
  const header = document.querySelector("header");
  header.classList.toggle("sticky", currentScroll > 100);

  // Close Menu on Scroll
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
});

// Manual Nav Button Highlight (for mobile)
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Close mobile menu on click
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });
});

// Typed.js Initialization
const typed = new Typed(".multiple-text", {
  strings: [
    "Data Analyst",
    "SQL Expert",
    "PowerBI Developer",
    "Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});
