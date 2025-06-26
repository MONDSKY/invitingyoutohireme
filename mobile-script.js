document.addEventListener('DOMContentLoaded', () => {
  // Show only the selected section
  function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });

    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
    }
  }

  // Toggle light/dark mode
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });
  }

  // Scroll animation effect
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after visible
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Optional: Initial section display
  // showSection('home'); // Replace 'home' with the default section ID
});