# 3️⃣ js/app.js
```javascript
/* ==============================
   Nanapo Auto Web App Logic
   Modular, Accessible, Maintainable
================================ */

const services = [
  "Accident Repairs & Dent Removal",
  "Precision Auto Painting",
  "Custom Body Modifications",
  "Car Polishing & Detailing",
  "Headlight Restoration",
  "Fiberglass Repairs & Fabrications"
];

const servicesGrid = document.getElementById("servicesGrid");

function renderServices() {
  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.textContent = service;
    servicesGrid.appendChild(card);
  });
}

renderServices();

// Mobile navigation
const toggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
  navList.classList.toggle("active");
});

// Smooth scroll
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    navList.classList.remove("active");
  });
});
