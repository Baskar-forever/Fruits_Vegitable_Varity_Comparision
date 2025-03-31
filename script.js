document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved user preference, if any, on load of the website
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme); // Apply the saved theme (e.g., 'dark')
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙'; // Update the toggle button icon
  }

  // Add event listener to the toggle button
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
});