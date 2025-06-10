/**
 * CollegeGate Utilities
 * 
 * A collection of utility functions for the CollegeGate website
 */

// Form Validation Utilities
/**
 * Validates a form based on specified rules
 * @param {string} formId - The ID of the form to validate
 * @param {object} rules - Validation rules for form fields
 * @returns {boolean} Whether the form is valid
 */
function validateForm(formId, rules) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const formElements = form.elements;
  let valid = true;
  
  // Reset previous errors
  form.querySelectorAll('.error-message').forEach(el => el.remove());
  form.querySelectorAll('.error-field').forEach(el => el.classList.remove('error-field'));
  
  // Validate each field according to rules
  for (const fieldName in rules) {
    const field = formElements[fieldName];
    if (!field) continue;
    
    const fieldRules = rules[fieldName];
    let fieldValid = true;
    let errorMessage = '';
    
    // Required check
    if (fieldRules.required && !field.value.trim()) {
      fieldValid = false;
      errorMessage = fieldRules.required === true ? 'This field is required' : fieldRules.required;
    }
    
    // Email format check
    if (fieldRules.email && field.value.trim() && 
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(field.value)) {
      fieldValid = false;
      errorMessage = fieldRules.email === true ? 'Please enter a valid email address' : fieldRules.email;
    }
    
    // Phone format check
    if (fieldRules.phone && field.value.trim() && 
        !/^(\+\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(field.value)) {
      fieldValid = false;
      errorMessage = fieldRules.phone === true ? 'Please enter a valid phone number' : fieldRules.phone;
    }
    
    // Min length check
    if (fieldRules.minLength && field.value.length < fieldRules.minLength) {
      fieldValid = false;
      errorMessage = `Minimum ${fieldRules.minLength} characters required`;
    }
    
    // Max length check
    if (fieldRules.maxLength && field.value.length > fieldRules.maxLength) {
      fieldValid = false;
      errorMessage = `Maximum ${fieldRules.maxLength} characters allowed`;
    }
    
    // Numeric check
    if (fieldRules.numeric && field.value.trim() && !/^\d+$/.test(field.value)) {
      fieldValid = false;
      errorMessage = fieldRules.numeric === true ? 'Please enter a numeric value' : fieldRules.numeric;
    }
    
    // Custom validation
    if (fieldRules.validate && typeof fieldRules.validate === 'function' && !fieldRules.validate(field.value)) {
      fieldValid = false;
      errorMessage = fieldRules.message || 'Invalid value';
    }
    
    // Set error state if invalid
    if (!fieldValid) {
      valid = false;
      field.classList.add('error-field');
      
      // Add error message
      const errorSpan = document.createElement('span');
      errorSpan.className = 'error-message';
      errorSpan.textContent = errorMessage;
      field.parentNode.appendChild(errorSpan);
    }
  }
  
  return valid;
}

// Animation and DOM Utilities

/**
 * Animates elements when they enter the viewport
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} animationClass - Class to add when element is visible
 * @param {number} threshold - Visibility threshold (0 to 1)
 */
function animateOnScroll(selector, animationClass = 'visible', threshold = 0.2) {
  const elements = document.querySelectorAll(selector);
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { 
      threshold: threshold 
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    elements.forEach(element => {
      element.classList.add(animationClass);
    });
  }
}

/**
 * Lazy loads images to improve page performance
 * @param {string} selector - CSS selector for images to lazy load
 */
function lazyLoadImages(selector = 'img[data-src]') {
  const images = document.querySelectorAll(selector);
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.remove('lazy');
    });
  }
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Milliseconds to wait between invocations
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

/**
 * Throttle function to limit the rate at which a function can fire
 * @param {Function} func - Function to throttle
 * @param {number} limit - Milliseconds to wait between invocations
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Get URL query parameters as an object
 * @returns {Object} Object containing query parameters
 */
function getQueryParams() {
  const params = {};
  const queryString = window.location.search;
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }
  }
  return params;
}

/**
 * Smooth scroll to an element
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from the top in pixels
 */
function scrollToElement(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Add event listeners that clean up automatically
 * @param {HTMLElement} element - Element to attach listener to
 * @param {string} eventType - Type of event (click, change, etc)
 * @param {Function} handler - Event handler function
 * @param {boolean|object} options - Event listener options
 * @returns {Function} Function to remove the event listener
 */
function addEventListenerWithCleanup(element, eventType, handler, options = false) {
  if (!element) return () => {};
  
  element.addEventListener(eventType, handler, options);
  
  return () => {
    element.removeEventListener(eventType, handler, options);
  };
}

/**
 * Format a number as Indian currency (₹)
 * @param {number} amount - Amount to format
 * @returns {string} Formatted amount
 */
function formatIndianCurrency(amount) {
  return amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

/**
 * Format a date to Indian format (DD/MM/YYYY)
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date
 */
function formatIndianDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN');
}

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize lazy loading for images
  lazyLoadImages();
  
  // Initialize animations for elements with .animate-on-scroll class
  animateOnScroll('.animate-on-scroll');
});

// Export utilities for use in other scripts
window.collegeGateUtils = {
  validateForm,
  animateOnScroll,
  lazyLoadImages,
  debounce,
  throttle,
  getQueryParams,
  scrollToElement,
  addEventListenerWithCleanup,
  formatIndianCurrency,
  formatIndianDate
};
