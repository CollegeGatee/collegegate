// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  // Render colleges immediately
  if (typeof colleges !== 'undefined') {
    console.log('Colleges data loaded:', colleges.length);
    renderColleges(colleges);
  } else {
    console.error('Colleges data not found');
  }
  
  // Setup event listeners
  setupEventListeners();
  
  // Initial reveal check
  setTimeout(reveal, 100);
});

function setupEventListeners() {
  console.log('Setting up event listeners');
  // Search and filter events
  const searchInput = document.getElementById('college-search');
  const searchButton = document.getElementById('search-button');
  
  if (searchInput) {
    // Search on input change
    searchInput.addEventListener('input', (e) => {
      console.log('Search input:', e.target.value);
      filterColleges();
    });

    // Search on enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        filterColleges();
      }
    });
  } else {
    console.error('Search input element not found');
  }

  // Search button click
  if (searchButton) {
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Search button clicked');
      filterColleges();
    });
  } else {
    console.error('Search button not found');
  }

  // Add event listeners for other filters
  ['course-filter', 'fee-filter', 'type-filter', 'rating-filter', 'sort-select'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', filterColleges);
    } else {
      console.error(`Filter element ${id} not found`);
    }
  });

  // Reset filters button
  const resetButton = document.getElementById('reset-filters');
  if (resetButton) {
    resetButton.addEventListener('click', resetFilters);
  } else {
    console.error('Reset filters button not found');
  }
  
  // Scroll event for animations
  window.addEventListener('scroll', reveal);
}

function filterColleges() {
  console.log('Filtering colleges');
  const searchTerm = document.getElementById('college-search')?.value.toLowerCase() || '';
  const courseFilter = document.getElementById('course-filter')?.value.toLowerCase() || '';
  const feeFilter = document.getElementById('fee-filter')?.value || '';
  const typeFilter = document.getElementById('type-filter')?.value.toLowerCase() || '';
  const ratingFilter = parseFloat(document.getElementById('rating-filter')?.value) || 0;
  const sortOption = document.getElementById('sort-select')?.value || 'name';

  console.log('Filter criteria:', {
    searchTerm,
    courseFilter,
    feeFilter,
    typeFilter,
    ratingFilter,
    sortOption
  });

  if (!Array.isArray(colleges)) {
    console.error('Colleges data is not an array');
    return;
  }

  let filteredColleges = colleges.filter(college => {
    // Safe check for college properties
    const collegeName = college?.name?.toLowerCase() || '';
    const collegeShortName = college?.shortName?.toLowerCase() || '';
    const collegeLocation = college?.location?.toLowerCase() || '';
    const collegeType = college?.type?.toLowerCase() || '';
    const collegeRating = college?.rating || 0;
    const collegeCourses = Array.isArray(college?.courses) ? college.courses : [];

    // Search term matching - now includes shortName
    const matchesSearch = !searchTerm || 
      collegeName.includes(searchTerm) ||
      collegeShortName.includes(searchTerm) ||
      collegeLocation.includes(searchTerm) ||
      collegeCourses.some(course => 
        course?.name?.toLowerCase()?.includes(searchTerm) || false
      );

    // Course filter matching
    const matchesCourse = !courseFilter || 
      collegeCourses.some(course => 
        course?.name?.toLowerCase()?.includes(courseFilter) || false
      );

    // Type matching
    const matchesType = !typeFilter || collegeType === typeFilter;

    // Rating matching
    const matchesRating = collegeRating >= ratingFilter;

    // Fee matching
    let matchesFee = true;
    if (feeFilter && collegeCourses.length > 0) {
      const [min, max] = feeFilter.split('-').map(Number);
      const validFees = collegeCourses
        .map(c => c?.fees)
        .filter(fee => typeof fee === 'number');
      
      if (validFees.length > 0) {
        const minCourseFee = Math.min(...validFees);
        matchesFee = (!min || minCourseFee >= min) && (!max || minCourseFee <= max);
      }
    }

    return matchesSearch && matchesCourse && matchesType && matchesRating && matchesFee;
  });

  console.log('Filtered colleges:', filteredColleges.length);

  // Sort colleges
  filteredColleges = sortColleges(filteredColleges, sortOption);
  
  // Update results count
  const resultsCount = document.getElementById('results-count');
  if (resultsCount) {
    resultsCount.textContent = 
      `${filteredColleges.length} ${filteredColleges.length === 1 ? 'College' : 'Colleges'} Found`;
  }

  // Show/hide no results message
  const noResults = document.getElementById('no-results');
  if (noResults) {
    noResults.style.display = filteredColleges.length === 0 ? 'block' : 'none';
  }

  renderColleges(filteredColleges);
}

function sortColleges(colleges, sortOption) {
  switch (sortOption) {
    case 'name':
      return colleges.sort((a, b) => a.name.localeCompare(b.name));
    case 'rating':
      return colleges.sort((a, b) => b.rating - a.rating);
    case 'fees':
      return colleges.sort((a, b) => {
        const aFee = a.courses && a.courses.length > 0 ? Math.min(...a.courses.map(c => c.fees)) : Infinity;
        const bFee = b.courses && b.courses.length > 0 ? Math.min(...b.courses.map(c => c.fees)) : Infinity;
        return aFee - bFee;
      });
    default:
      return colleges;
  }
}

function renderColleges(collegeData) {
  const container = document.getElementById('colleges-grid');
  if (!container) return;
  
  container.innerHTML = '';

  // Update results count
  document.getElementById('results-count').textContent = 
    `${collegeData.length} ${collegeData.length === 1 ? 'College' : 'Colleges'} Found`;

  // Show/hide no results message
  const noResults = document.getElementById('no-results');
  if (noResults) {
    noResults.style.display = collegeData.length === 0 ? 'block' : 'none';
  }

  collegeData.forEach((college) => {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    // Get the first course fee as the display fee
    const displayFee = college.courses && college.courses.length > 0 
      ? college.courses[0].fees 
      : 'Contact for fees';
    
    // Get course names as a list
    const courseNames = college.courses 
      ? college.courses.map(course => course.name).join(', ')
      : '';
    
    card.innerHTML = `
      <div class="college-image-wrapper">
        <img src="${college.image}" alt="${college.name}" class="college-image" onerror="this.src='college_images/default-college.jpg'">
        <span class="college-badge">${college.rating} ★</span>
      </div>
      <div class="college-content">
        <h3 class="college-name">${college.name}</h3>
        <div class="college-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${college.location}
        </div>
        <p class="college-description">${college.description}</p>
        <div class="college-stats">
          <div class="stat-item">
            <span class="stat-label">Type</span>
            <span class="stat-value">${college.type}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Established</span>
            <span class="stat-value">${college.established}</span>
          </div>
        </div>
        <div class="college-actions">
          <a href="college-details.html?id=${college.id}" class="action-button action-primary">View Details</a>
          <a href="tel:${college.contact || '+919193993693'}" class="action-button action-secondary">Contact</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function resetFilters() {
  document.getElementById('college-search').value = '';
  document.getElementById('course-filter').value = '';
  document.getElementById('fee-filter').value = '';
  document.getElementById('type-filter').value = '';
  document.getElementById('rating-filter').value = '';
  document.getElementById('sort-select').value = 'name';
  
  renderColleges(colleges);
}

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}
