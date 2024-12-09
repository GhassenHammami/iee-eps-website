const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("hamburger-menu"),
  navClose = document.getElementById("hamburger-menu-close");

function checkScreenSize() {
  if (window.innerWidth < 1024) {
    navMenu.classList.add("hamburger-menu");
  } else {
    navMenu.classList.remove("hamburger-menu");
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
