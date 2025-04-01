document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Check for saved user preference, if any, on load of the website
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme); // Apply the saved theme (e.g., 'dark')
    if (themeToggle) {
      themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙'; // Update the toggle button icon
    }
  }

  // Add event listener to the toggle button
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark'); // Save the user's preference
        themeToggle.textContent = '☀️'; // Update the toggle button icon
      } else {
        localStorage.setItem('theme', 'light'); // Save the user's preference
        themeToggle.textContent = '🌙'; // Update the toggle button icon
      }
    });
  }
});