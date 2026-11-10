// Navbar scroll effect
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

if (hero && navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > hero.offsetHeight - 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobileMenu");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

if (menuOpen && mobileMenu) {
  menuOpen.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (menuClose && mobileMenu) {
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const featureItems = document.querySelectorAll(".feature-item");
  const featureTitle = document.getElementById("featureTitle");
  const featureDescription = document.getElementById("featureDescription");
  const allImages = document.querySelectorAll(".feature-image img");

  featureItems.forEach((item) => {
    const activateItem = () => {
      featureItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const targetImageId = item.getAttribute("data-image");
      const targetTitle = item.getAttribute("data-title");
      const targetDescription = item.getAttribute("data-description");

      // 3. Update teks judul & deskripsi
      if (featureTitle && targetTitle) {
        featureTitle.textContent = targetTitle;
      }
      if (featureDescription && targetDescription) {
        featureDescription.textContent = targetDescription;
      }

      allImages.forEach((img) => {
        if (img.id === targetImageId) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    };

    item.addEventListener("mouseenter", activateItem);
    item.addEventListener("click", activateItem);
  });
});
