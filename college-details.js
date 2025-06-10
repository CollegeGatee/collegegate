// Global variable to store college data
let college = null;

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Load college data
  loadCollegeData();
  
  // Initialize animations
  initializeAnimations();
  
  // Add scroll event listener for parallax effect
  window.addEventListener('scroll', handleScroll);
  
  // Add hover effects for interactive elements
  initializeHoverEffects();
  
  // Initialize scroll animations
  initializeScrollAnimations();
  
  // Initialize parallax effect
  initializeParallax();
  
  // Initialize smooth scroll behavior
  initializeSmoothScroll();
  
  // Initialize gallery
  initializeGallery();
  
  
  // Initialize course filtering functionality
  initializeCourseFilter();
});

// Load and display college data
function loadCollegeData() {
  const urlParams = new URLSearchParams(window.location.search);
  const collegeId = urlParams.get('id');
  
  if (!collegeId) {
    showError('College ID not found');
    return;
  }

  // Show loading state
  document.body.classList.add('loading');

  // Simulate API call with timeout
  setTimeout(() => {
    college = colleges.find(c => c.id === collegeId);
    
    if (!college) {
      showError('College not found');
      return;
    }

    updatePageContent(college);
    document.body.classList.remove('loading');
  }, 500);
}

function updatePageContent(college) {
  // Update page title
  document.title = `${college.name} - College Details`;
  
  // Set college hero background
  const hero = document.querySelector('.college-hero');
  hero.style.backgroundImage = `url(${college.image})`;
  
  // Update college type badge
  const typeBadge = document.querySelector('.college-type');
  typeBadge.textContent = college.type;
  typeBadge.className = `college-badge college-type ${college.type.toLowerCase()}`;
  
  // Update college name
  const title = document.querySelector('.college-title');
  title.textContent = college.name;
  
  // Update college logo
  const logo = document.querySelector('.college-logo');
  const logoContainer = document.querySelector('.college-logo-container');
  
  if (college.logoImg) {
    logo.src = college.logoImg;
    logo.alt = `${college.name} Logo`;
    logoContainer.style.display = 'flex';
    
    // Add error handling for logo
    logo.onerror = function() {
      console.error(`Failed to load logo for ${college.name}`);
      logoContainer.style.display = 'none';
    };
  } else {
    logoContainer.style.display = 'none';
  }
  
  // Update college rating
  const rating = document.querySelector('.college-rating');
  rating.innerHTML = `
    <span class="rating-value">${college.rating.toFixed(1)}</span>
    <div class="stars">
      ${generateStars(college.rating)}
    </div>
  `;
  
  // Update college location
  const location = document.querySelector('.college-location');
  location.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    <span>${college.location}</span>
  `;
  
  // Update college established
  const established = document.querySelector('.college-established');
  established.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    <span>Established ${college.established}</span>
  `;
  
  // Update college description
  const description = document.querySelector('.college-description');
  description.textContent = college.description;
  
  // Update courses list with animation
  const coursesList = document.querySelector('.courses-table tbody');
  coursesList.innerHTML = '';
  
  if (college.courses && college.courses.length > 0) {
    // Group courses by name
    const groupedCourses = college.courses.reduce((groups, course) => {
      const name = course.name;
      if (!groups[name]) {
        groups[name] = [];
      }
      groups[name].push(course);
      return groups;
    }, {});

    // Create rows for each group
    Object.entries(groupedCourses).forEach(([courseName, courses], groupIndex) => {
      courses.forEach((course, index) => {
        const row = document.createElement('tr');
        if (index === 0) {
          // First row of the group
          row.innerHTML = `
            <td rowspan="${courses.length}" class="course-group">
              <div class="course-name">${courseName}</div>
              ${course.description ? `<div class="course-description">${course.description}</div>` : ''}
            </td>
            <td>
              <div class="course-specialization">${course.specialization || 'General'}</div>
              <div class="course-duration">${course.duration}</div>
              ${course.semesters ? `<div class="course-semesters">${course.semesters} Semesters</div>` : ''}
            </td>
            <td>
              <div class="course-fees">₹${course.fees.toLocaleString('en-IN')}</div>
              ${course.scholarship ? `<div class="course-scholarship">Scholarship Available</div>` : ''}
            </td>
          `;
        } else {
          // Subsequent rows of the group
          row.innerHTML = `
            <td>
              <div class="course-specialization">${course.specialization || 'General'}</div>
              <div class="course-duration">${course.duration}</div>
              ${course.semesters ? `<div class="course-semesters">${course.semesters} Semesters</div>` : ''}
            </td>
            <td>
              <div class="course-fees">₹${course.fees.toLocaleString('en-IN')}</div>
              ${course.scholarship ? `<div class="course-scholarship">Scholarship Available</div>` : ''}
            </td>
          `;
        }
        
        row.style.animationDelay = `${(groupIndex * 0.2) + (index * 0.1)}s`;
        row.classList.add('slide-in');
        if (index === 0) {
          row.classList.add('group-first');
        }
        coursesList.appendChild(row);
      });
    });
  }
  
  // Update facilities list with animation
  const facilitiesList = document.querySelector('.facilities-list');
  facilitiesList.innerHTML = '';
  if (college.facilities && college.facilities.length > 0) {
    college.facilities.forEach((facility, index) => {
      const item = document.createElement('div');
      item.className = 'facility-item';
      item.innerHTML = `
        <svg><use href="#${facility.icon}"></use></svg>
        <span>${facility.name}</span>
      `;
      item.style.animationDelay = `${index * 0.1}s`;
      item.classList.add('fade-in');
      facilitiesList.appendChild(item);
    });
  }
  
  // Update sidebar information
  const sidebar = document.querySelector('.college-info');
  sidebar.innerHTML = `
    <h3 class="info-title">College Information</h3>
    <div class="info-item">
      <span class="info-label">Ranking</span>
      <span class="info-value">${college.ranking || 'Not Available'}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Accreditation</span>
      <span class="info-value">${college.accreditation || 'Not Available'}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Website</span>
      <a href="${college.website || '#'}" class="info-link" target="_blank">Visit Website</a>
    </div>
    <div class="info-item">
      <span class="info-label">Contact</span>
      <a href="contact.html" class="info-link">Click here</a>
    </div>
    <div class="info-item apply-section">
      <a href="apply.html" class="btn-apply-large">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span>Apply Now</span>
      </a>
      <p class="apply-note">Applications are currently open for the next academic year</p>
    </div>
  `;
  sidebar.classList.add('fade-in');

  // Update photo gallery
  if (college.photoGallery) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) {
      console.error('Gallery grid element not found');
      return;
    }
    
    galleryGrid.innerHTML = '';

    // Add featured image if available
    if (college.photoGallery && college.photoGallery.featured) {
      const featuredItem = document.createElement('div');
      featuredItem.className = 'gallery-item featured';
      featuredItem.innerHTML = `
        <img src="${college.photoGallery.featured.image}" alt="${college.photoGallery.featured.title}" loading="lazy">
        <div class="gallery-overlay">
          <h3>${college.photoGallery.featured.title}</h3>
          <p>${college.photoGallery.featured.description || ''}</p>
        </div>
      `;
      galleryGrid.appendChild(featuredItem);
    }

    // Add remaining images
    if (college.photoGallery && college.photoGallery.images) {
      college.photoGallery.images.forEach((item, index) => {
        // Skip if this is the featured image
        if (college.photoGallery.featured && item.image === college.photoGallery.featured.image) {
          return;
        }

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <h3>${item.title}</h3>
            <p>${item.description || ''}</p>
          </div>
        `;
        galleryGrid.appendChild(galleryItem);
      });
    }

    // Initialize gallery functionality
    initializeGallery();
  }
}

// Initialize all animations
function initializeAnimations() {
  // Add initial animations to elements
  const elements = document.querySelectorAll('.college-type, .college-rating, .college-location, .college-established, .college-description');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add('fade-in');
  });
}

// Initialize scroll animations
function initializeScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stagger-children')) {
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`;
            child.classList.add('fade-in');
          });
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.college-section').forEach(section => {
    observer.observe(section);
  });
}

// Initialize hover effects
function initializeHoverEffects() {
  // Add hover effect to course table rows
  const tableRows = document.querySelectorAll('.courses-table tbody tr');
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.transform = 'translateX(10px)';
      row.style.backgroundColor = 'rgba(var(--primary-color-rgb), 0.05)';
    });
    
    row.addEventListener('mouseleave', () => {
      row.style.transform = 'translateX(0)';
      row.style.backgroundColor = '';
    });
  });
  
  // Add hover effect to facility items
  const facilities = document.querySelectorAll('.facility-item');
  facilities.forEach(facility => {
    facility.addEventListener('mouseenter', () => {
      facility.style.transform = 'translateY(-5px)';
      facility.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
      facility.style.borderColor = 'var(--primary-color)';
    });
    
    facility.addEventListener('mouseleave', () => {
      facility.style.transform = 'translateY(0)';
      facility.style.boxShadow = '';
      facility.style.borderColor = 'var(--border)';
    });
  });
  
  // Add hover effect to apply button
  const applyButton = document.querySelector('.btn-apply-large');
  if (applyButton) {
    applyButton.addEventListener('mouseenter', () => {
      applyButton.style.transform = 'translateY(-2px)';
      applyButton.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    });
    
    applyButton.addEventListener('mouseleave', () => {
      applyButton.style.transform = 'translateY(0)';
      applyButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
  }
}

// Initialize parallax effect
function initializeParallax() {
  const hero = document.querySelector('.college-hero');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDiff = currentScrollY - lastScrollY;
    
    if (hero) {
      const currentTransform = parseFloat(hero.style.backgroundPositionY || '0');
      hero.style.backgroundPositionY = `${currentTransform + scrollDiff * 0.5}px`;
    }
    
    lastScrollY = currentScrollY;
  });
}

// Initialize smooth scroll behavior
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return `
    ${'<svg><use href="#star-filled"></use></svg>'.repeat(fullStars)}
    ${halfStar ? '<svg><use href="#star-half"></use></svg>' : ''}
    ${'<svg><use href="#star-empty"></use></svg>'.repeat(emptyStars)}
  `;
}

function initializeGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid || !college) return;

  // Clear existing content
  galleryGrid.innerHTML = '';

  // Add featured image if available
  if (college.photoGallery && college.photoGallery.featured) {
    const featuredItem = document.createElement('div');
    featuredItem.className = 'gallery-item featured';
    featuredItem.innerHTML = `
      <img src="${college.photoGallery.featured.image}" alt="${college.photoGallery.featured.title}" loading="lazy">
      <div class="gallery-overlay">
        <h3>${college.photoGallery.featured.title}</h3>
        <p>${college.photoGallery.featured.description || ''}</p>
      </div>
    `;
    galleryGrid.appendChild(featuredItem);
  }

  // Add remaining images
  if (college.photoGallery && college.photoGallery.images) {
    college.photoGallery.images.forEach((item, index) => {
      // Skip if this is the featured image
      if (college.photoGallery.featured && item.image === college.photoGallery.featured.image) {
        return;
      }

      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <h3>${item.title}</h3>
          <p>${item.description || ''}</p>
        </div>
      `;
      galleryGrid.appendChild(galleryItem);
    });
  }

  // Add click handlers for lightbox
  const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h3')?.textContent || '';
      const description = item.querySelector('p')?.textContent || '';
      showLightbox({
        image: img.src,
        title: title,
        description: description
      });
    });
  });
}

function showLightbox(item) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img src="${item.image}" alt="${item.title}" class="lightbox-image">
      <div class="lightbox-caption">
        <h3>${item.title}</h3>
        ${item.description ? `<p>${item.description}</p>` : ''}
      </div>
    </div>
  `;

  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';

  // Close lightbox
  const closeButton = lightbox.querySelector('.lightbox-close');
  closeButton.addEventListener('click', () => {
    lightbox.remove();
    document.body.style.overflow = '';
  });

  // Close on click outside
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.remove();
      document.body.style.overflow = '';
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.remove();
      document.body.style.overflow = '';
    }
  });
}

function initializeVirtualTour() {
  const tourStart = document.querySelector('.tour-start');
  const tourSpots = document.querySelectorAll('.tour-spot');
  
  if (tourStart) {
    tourStart.addEventListener('click', () => {
      // Implement virtual tour start logic here
      console.log('Virtual tour started');
    });
  }

  tourSpots.forEach(spot => {
    spot.addEventListener('click', () => {
      // Remove active class from all spots
      tourSpots.forEach(s => s.classList.remove('active'));
      // Add active class to clicked spot
      spot.classList.add('active');
      // Implement spot navigation logic here
      console.log(`Navigating to ${spot.dataset.spot}`);
    });
  });
}

function initializeTestimonials() {
  const slider = document.querySelector('.testimonials-slider');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  if (!slider) return;

  function updateSlider() {
    const slideWidth = slider.clientWidth;
    slider.scrollTo({
      left: currentSlide * slideWidth,
      behavior: 'smooth'
    });

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = Math.max(0, currentSlide - 1);
      updateSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = Math.min(dots.length - 1, currentSlide + 1);
      updateSlider();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Auto-advance slides
  setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlider();
  }, 5000);
}

function initializeContactForm() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Show loading state
      const submitBtn = form.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
        form.reset();
      } catch (error) {
        // Show error message
        showNotification('Failed to send message. Please try again.', 'error');
      } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Add fade-in animation
  setTimeout(() => notification.classList.add('active'), 10);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('active');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Add CSS for new components
const style = document.createElement('style');
style.textContent = `
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1000;
  }

  .lightbox.active {
    opacity: 1;
  }

  .lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }

  .lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
  }

  .notification {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 500;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .notification.active {
    transform: translateY(0);
    opacity: 1;
  }

  .notification.success {
    background: var(--success-color, #10b981);
  }

  .notification.error {
    background: var(--error-color, #ef4444);
  }

  /* Navigation Styles */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--header-bg, #fff);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: var(--text-color, #333);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--primary-color, #007bff);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--primary-color, #007bff);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
  }

  .contact-btn:hover {
    background: var(--secondary-color, #0056b3);
  }

  @media (max-width: 991px) {
    .mobile-menu-btn {
      display: flex;
    }

    .nav-wrapper {
      position: fixed;
      top: 0;
      right: -100%;
      width: 300px;
      height: 100vh;
      background: white;
      flex-direction: column;
      align-items: flex-start;
      padding: 6rem 2rem 2rem;
      transition: right 0.3s ease;
      z-index: 1000;
      box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    }

    .nav-wrapper.active {
      right: 0;
    }

    .nav-links {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }

    .nav-link {
      display: block;
      padding: 0.75rem 0;
      font-size: 1.1rem;
    }

    .nav-actions {
      width: 100%;
      margin-top: 2rem;
    }

    .contact-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

document.head.appendChild(style);

// Initialize course filtering functionality
function initializeCourseFilter() {
  const coursesList = document.getElementById('courses-list');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  let currentFilter = 'all';
  
  // Function to determine course category
  function getCourseCategory(course) {
    const name = course.name.toLowerCase();
    if (name.includes('b.tech') || name.includes('m.tech') || name.includes('engineering')) {
      return 'engineering';
    }
    if (name.includes('mba') || name.includes('bba') || name.includes('management')) {
      return 'management';
    }
    if (name.includes('b.sc') || name.includes('m.sc') || name.includes('science')) {
      return 'science';
    }
    if (name.includes('b.a') || name.includes('arts')) {
      return 'arts';
    }
    return 'other';
  }
  
  // Add event listeners for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.dataset.category;
      filterAndDisplayCourses();
    });
  });
  
  function filterAndDisplayCourses() {
    if (!college || !college.courses) return;
    
    const selectedCategory = document.querySelector('.category-filter').value;
    const coursesList = document.querySelector('.courses-table tbody');
    if (!coursesList) return;

    // Clear existing content
    coursesList.innerHTML = '';

    // Filter courses based on selected category
    const filteredCourses = selectedCategory === 'all' 
      ? college.courses 
      : college.courses.filter(course => getCourseCategory(course) === selectedCategory);

    // Display filtered courses
    filteredCourses.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${course.name}</td>
        <td>${course.duration}</td>
        <td>₹${course.fees.toLocaleString('en-IN')}</td>
      `;
      coursesList.appendChild(row);
    });
  }
  
  // Initial display of courses
  filterAndDisplayCourses();
}

// Call the initialization function when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCourseFilter);
