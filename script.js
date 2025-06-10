// Initialize AOS if available
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1200,
    once: true,
    easing: 'ease-in-out',
  });
}

// Enhanced Testimonial Carousel with Fade Animation
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.remove('active', 'fade-in');
    if (idx === i) {
      t.classList.add('active', 'fade-in');
    }
  });
}

setInterval(() => {
  showTestimonial(index);
  index = (index + 1) % testimonials.length;
}, 4000);

// Enhanced Counter Animation using requestAnimationFrame
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat span");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const duration = 2000; // in ms
    const startTime = performance.now();

    function animateCount(currentTime) {
      const elapsed = currentTime - startTime;
      count = Math.min(Math.ceil((elapsed / duration) * target), target);
      counter.innerText = count;

      if (count < target) {
        requestAnimationFrame(animateCount);
      }
    }

    requestAnimationFrame(animateCount);
  });
});


// Scroll to counseling form when Apply Now is clicked
document.querySelectorAll('.college-info button').forEach(button => {
  button.addEventListener('click', () => {
    const formSection = document.getElementById('counselingFormSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
document.querySelectorAll('.college-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('show-info');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('show-info');
  });
});

// Remove redundant mobile menu code
function initHeaderScroll() {
  const header = document.getElementById('header');
  const navWrapper = document.querySelector('.nav-wrapper');
  
  if (!header || !navWrapper) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    if (navWrapper.classList.contains('active')) return;
    
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


