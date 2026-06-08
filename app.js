const menuButton = document.querySelector(".menu-button");
const menu = document.getElementById("main-menu");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.getElementById("current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu?.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];

function updateActiveLink() {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= 120)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("active", current && link.hash === `#${current.id}`);
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("load", updateActiveLink);
