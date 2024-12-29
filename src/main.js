// experiance parcial

document.querySelectorAll('.collapsible-button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.experiance-list-item');
    item.classList.toggle('collapsed');
    const content = item.querySelector('.collapsible-content');
    const isCollapsed = item.classList.contains('collapsed');

    if (isCollapsed) {
      content.textContent = content.originalText;
    } else {
      content.originalText = content.textContent;
      content.textContent = content.textContent.slice(0, 200) + '...';
    }

    const svg = button.querySelector('svg');
    svg.innerHTML = isCollapsed
      ? `<path d="M6.66669 20H33.3334" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="M6.66669 20H33.3334" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 6.66699V33.3337" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  });
});

// Инициализация текста при загрузке страницы
document.querySelectorAll('.collapsible-content').forEach(content => {
  if (content.textContent.length > 200) {
    content.originalText = content.textContent;
    content.textContent = content.textContent.slice(0, 200) + '...';
  }
});

// header

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentUrl = window.location.pathname.endsWith('/')
    ? window.location.pathname.slice(0, -1)
    : window.location.pathname;
  console.log('Current URL:', currentUrl);

  navLinks.forEach(link => {
    const linkUrl = new URL(link.getAttribute('href'), window.location.origin)
      .pathname;
    console.log('Link Href:', linkUrl);

    if (linkUrl === currentUrl || linkUrl === `${currentUrl}.html`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// about page
const watchMoreBtn = document.querySelector('.watch-more-btn');
if (watchMoreBtn) {
  watchMoreBtn.addEventListener('click', () => {
    window.location.href = './experience.html';
  });
}
