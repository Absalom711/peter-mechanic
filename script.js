// ===============================
// Nanapo Auto — app.js
// Modular JS for website
// ===============================

// Scroll reveal functionality
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (revealTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

// Trigger on scroll
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===============================
// Dynamic Services Rendering
// ===============================
const services = [
  "Accident Repairs & Dent Removal",
  "Precision Auto Painting",
  "Custom Body Modifications",
  "Car Polishing & Detailing",
  "Headlight Restoration",
  "Fiberglass Repairs & Fabrications"
];

const servicesContainer = document.querySelector('.services ul');

// Clear and dynamically render services
function renderServices() {
  if (!servicesContainer) return;

  servicesContainer.innerHTML = '';
  services.forEach(service => {
    const li = document.createElement('li');
    li.textContent = service;
    servicesContainer.appendChild(li);
  });
}

// Initialize services
renderServices();

// ===============================
// Floating WhatsApp hover animation
// ===============================
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
  whatsappBtn.addEventListener('mouseenter', () => {
    whatsappBtn.style.transform = 'scale(1.2)';
  });
  whatsappBtn.addEventListener('mouseleave', () => {
    whatsappBtn.style.transform = 'scale(1)';
  });
}

// ===============================
// Mobile Navigation Toggle
// ===============================

// Create a simple toggle button dynamically (if needed)
let nav = document.querySelector('nav');
if (nav) {
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
  menuToggle.innerHTML = '☰';
  nav.prepend(menuToggle);

  const navList = nav.querySelector('ul');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('active');
  });

  // Smooth scroll for mobile nav links
  const navLinks = navList.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });

      // Close menu on link click
      navList.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
