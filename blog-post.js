// Blog Post JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initializeScrollProgress();
  initializeTableOfContents();
  initializeShareButtons();
  initializeCommentForm();
  initializeNewsletterForm();
  initializeReadingTime();
  initializeSmoothScrolling();
  
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});

// Reading Progress Indicator
function initializeScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
  document.body.appendChild(progressBar);
  
  // Add CSS for progress bar
  const style = document.createElement('style');
  style.textContent = `
    .reading-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
    
    .reading-progress-bar {
      height: 100%;
      background: var(--primary-color);
      width: 0%;
      transition: width 0.3s ease;
    }
  `;
  document.head.appendChild(style);
  
  const progressBarFill = progressBar.querySelector('.reading-progress-bar');
  
  window.addEventListener('scroll', function() {
    const article = document.querySelector('.article-content');
    if (!article) return;
    
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    const articleStart = articleTop - windowHeight / 2;
    const articleEnd = articleTop + articleHeight - windowHeight / 2;
    
    if (scrollTop < articleStart) {
      progressBarFill.style.width = '0%';
    } else if (scrollTop > articleEnd) {
      progressBarFill.style.width = '100%';
    } else {
      const progress = (scrollTop - articleStart) / (articleEnd - articleStart);
      progressBarFill.style.width = (progress * 100) + '%';
    }
  });
}

// Table of Contents Functionality
function initializeTableOfContents() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  const headings = document.querySelectorAll('.article-body h2, .article-body h3');
  
  // Add IDs to headings if they don't have them
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }
  });
  
  // Update TOC links to point to actual headings
  tocLinks.forEach((link, index) => {
    if (headings[index]) {
      link.href = '#' + headings[index].id;
    }
  });
  
  // Highlight active section in TOC
  function updateActiveTocLink() {
    let activeHeading = null;
    const scrollPosition = window.pageYOffset + 100;
    
    headings.forEach(heading => {
      if (heading.offsetTop <= scrollPosition) {
        activeHeading = heading;
      }
    });
    
    tocLinks.forEach(link => link.classList.remove('active'));
    
    if (activeHeading) {
      const activeLink = document.querySelector(`.toc-list a[href="#${activeHeading.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
  
  window.addEventListener('scroll', updateActiveTocLink);
  updateActiveTocLink(); // Initial call
}

// Share Functionality
function initializeShareButtons() {
  const shareBtn = document.querySelector('.share-btn');
  const bookmarkBtn = document.querySelector('.bookmark-btn');
  
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: document.querySelector('.article-subtitle').textContent,
          url: window.location.href
        }).catch(console.error);
      } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
          showNotification('Link copied to clipboard!');
        }).catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = window.location.href;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          showNotification('Link copied to clipboard!');
        });
      }
    });
  }
  
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', function() {
      const isBookmarked = this.classList.contains('bookmarked');
      
      if (isBookmarked) {
        this.classList.remove('bookmarked');
        localStorage.removeItem('bookmark-' + window.location.pathname);
        showNotification('Bookmark removed');
      } else {
        this.classList.add('bookmarked');
        localStorage.setItem('bookmark-' + window.location.pathname, JSON.stringify({
          title: document.title,
          url: window.location.href,
          date: new Date().toISOString()
        }));
        showNotification('Article bookmarked!');
      }
    });
    
    // Check if article is already bookmarked
    if (localStorage.getItem('bookmark-' + window.location.pathname)) {
      bookmarkBtn.classList.add('bookmarked');
    }
  }
}

// Comment Form Functionality
function initializeCommentForm() {
  const commentForm = document.getElementById('commentForm');
  
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const name = formData.get('name') || this.querySelector('input[type="text"]').value;
      const email = formData.get('email') || this.querySelector('input[type="email"]').value;
      const comment = formData.get('comment') || this.querySelector('textarea').value;
      
      // Simulate form submission
      showNotification('Thank you for your comment! It will be reviewed before publishing.');
      
      // Reset form
      this.reset();
      
      // In a real application, you would send this data to your server
      console.log('Comment submitted:', { name, email, comment });
    });
  }
}

// Newsletter Form Functionality
function initializeNewsletterForm() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Simulate subscription
      showNotification('Thank you for subscribing! You\'ll receive our latest updates.');
      
      // Reset form
      this.reset();
      
      // In a real application, you would send this data to your server
      console.log('Newsletter subscription:', { email });
    });
  });
}

// Reading Time Calculation
function initializeReadingTime() {
  const articleBody = document.querySelector('.article-body');
  const readTimeElement = document.querySelector('.read-time');
  
  if (articleBody && readTimeElement) {
    const text = articleBody.textContent || articleBody.innerText;
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    readTimeElement.textContent = `${readingTime} min read`;
  }
}

// Smooth Scrolling for Anchor Links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Notification System
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add CSS for notifications
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: var(--primary-color);
      color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      animation: slideInRight 0.3s ease;
    }
    
    .notification-success {
      background: #10b981;
    }
    
    .notification-error {
      background: #ef4444;
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  
  if (!document.querySelector('#notification-styles')) {
    style.id = 'notification-styles';
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Mobile Menu Functionality (if needed)
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  const body = document.body;
  
  if (mobileMenuBtn && mainNav) {
    // Create overlay element
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'menu-overlay';
      document.body.appendChild(overlay);
    }

    function toggleMenu() {
      const isOpen = mainNav.classList.contains('active');
      
      if (isOpen) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mainNav.classList.add('active');
        mobileMenuBtn.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    }

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991 && mainNav.classList.contains('active')) {
        toggleMenu();
      }
    });
  }
}

// Initialize mobile menu
initializeMobileMenu();

// Lazy Loading for Images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
  initializeLazyLoading();
}

// Print Functionality
function initializePrintButton() {
  const printBtn = document.createElement('button');
  printBtn.innerHTML = '🖨️ Print Article';
  printBtn.className = 'print-btn';
  printBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
  `;
  
  printBtn.addEventListener('click', () => window.print());
  printBtn.addEventListener('mouseenter', () => {
    printBtn.style.transform = 'translateY(-2px)';
    printBtn.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
  });
  printBtn.addEventListener('mouseleave', () => {
    printBtn.style.transform = 'translateY(0)';
    printBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  });
  
  document.body.appendChild(printBtn);
}

// Initialize print button
initializePrintButton();