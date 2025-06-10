// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Theme toggle in header
  setupThemeToggle();

  // Remove any duplicate theme toggles that might exist
  const themeToggles = document.querySelectorAll('.theme-toggle');
  if (themeToggles.length > 1) {
    for (let i = 1; i < themeToggles.length; i++) {
      themeToggles[i].remove();
    }
  }
});

function initTheme() {
  // Get saved theme or use system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

function setupThemeToggle() {
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Toggle dark mode');
  themeToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  `;
  
  // Add to nav-actions before the Get Assistance button
  const navActions = document.querySelector('.nav-actions');
  if (navActions) {
    const firstChild = navActions.firstChild;
    navActions.insertBefore(themeToggle, firstChild);
  }
  
  // Add styles for the toggle button
  const style = document.createElement('style');
  style.textContent = `
    .theme-toggle {
      background: none;
      border: none;
      padding: 0.5rem;
      margin-right: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text);
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }
    
    .theme-toggle:hover {
      background-color: var(--nav-hover);
    }
    
    .theme-toggle .sun-icon,
    .theme-toggle .moon-icon {
      transition: transform 0.5s ease, opacity 0.3s ease;
    }
    
    .theme-toggle .sun-icon {
      display: none;
    }
    
    [data-theme="dark"] .theme-toggle .sun-icon {
      display: block;
    }
    
    [data-theme="dark"] .theme-toggle .moon-icon {
      display: none;
    }
  `;
  document.head.appendChild(style);
  
  // Add event listener to toggle theme
  themeToggle.addEventListener('click', toggleTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update button icons
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
  
  // Update body class
  document.body.classList.toggle('dark-mode', theme === 'dark');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}
