// Smooth scroll for Table of Contents links
document.querySelectorAll('.toc a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80; // account for sticky TOC height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});

// Print / Save as PDF button
document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
});

// Back to Top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    backToTopBtn.style.display = 'inline-block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initially hide Back to Top
backToTopBtn.style.display = 'none';

// Optional: Highlight current section in TOC while scrolling
const sections = document.querySelectorAll('section[id]');
const tocLinks = document.querySelectorAll('.toc a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  tocLinks.forEach(link => {
    link.style.fontWeight = 'normal';
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.fontWeight = '700';
      link.style.color = '#1a3c34';
    }
  });
});