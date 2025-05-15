// Theme toggle button logic
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  // Switch icon accordingly
  if (document.body.classList.contains('light')) {
    themeToggleBtn.textContent = '☀️'; // Light mode icon
  } else {
    themeToggleBtn.textContent = '🌙'; // Dark mode icon
  }
});

// Collapsible sections logic
const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
collapsibleHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('show');
  });
});

// Typing effect logic
const typedText = document.getElementById('typed-text');
const phrases = [
  "Arijit Pal.",
  "a Machine Learning Enthusiast.",
  "a Passionate Problem Solver."
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting) {
    // Add letters
    typedText.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
    if (letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause before deleting
      return;
    }
  } else {
    // Remove letters
    typedText.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
    if (letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Smooth scrolling and active nav link highlight
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active to clicked link
    link.classList.add('active');

    // Scroll smoothly to the target section
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
