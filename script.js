// Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide(){
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 4000);

// Scroll Fade
const fadeElements = document.querySelectorAll('.service-card, .about-container, .highlight, .contact-container');
function handleScroll(){
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('fade-in');
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Mobile Menu
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
