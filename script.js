document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme === 'light') {
      newTheme = 'dark';
      document.documentElement.removeAttribute('data-theme');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    localStorage.setItem('theme', newTheme);
  });

  const toggleReposBtn = document.getElementById('toggle-repos-btn');
  const allProjectsGrid = document.getElementById('all-projects-grid');

  if (toggleReposBtn && allProjectsGrid) {
    toggleReposBtn.addEventListener('click', () => {
      const isHidden = allProjectsGrid.classList.contains('hidden');
      
      if (isHidden) {
        allProjectsGrid.classList.remove('hidden');
        toggleReposBtn.innerHTML = '<span>Hide Additional Repositories</span> <i class="fa-solid fa-chevron-up"></i>';
      } else {
        allProjectsGrid.classList.add('hidden');
        toggleReposBtn.innerHTML = '<span>Show Additional Repositories</span> <i class="fa-solid fa-chevron-down"></i>';
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});