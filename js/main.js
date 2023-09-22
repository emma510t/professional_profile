const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("ul li a");

function updateActiveLink() {
  sections.forEach((section, index) => {
    if (isElementInViewport(section)) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

// Initial check for active link
updateActiveLink();

// Listen for scroll events
window.addEventListener("scroll", updateActiveLink);
