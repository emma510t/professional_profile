document.addEventListener("DOMContentLoaded", function () {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

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

  updateActiveLink();

  window.addEventListener("scroll", updateActiveLink);
});

const project = document.querySelectorAll(".files svg");
