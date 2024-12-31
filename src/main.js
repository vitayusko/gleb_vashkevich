// experiance parcial

document.querySelectorAll('.collapsible-button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.experiance-list-item');
    item.classList.toggle('collapsed');
    const content = item.querySelector('.collapsible-content');
    const isMobile = window.innerWidth <= 320; // Условие для мобильной версии
    const isCollapsed = item.classList.contains('collapsed');

    if (isMobile) {
      content.style.display = isCollapsed ? 'block' : 'none';
    } else {
      if (isCollapsed) {
        content.textContent = content.originalText;
      } else {
        content.originalText = content.textContent;
        content.textContent = content.textContent.slice(0, 200) + '...';
      }
    }

    const svg = button.querySelector('svg');
    svg.innerHTML = isCollapsed
      ? `<path d="M6.66669 20H33.3334" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="M6.66669 20H33.3334" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 6.66699V33.3337" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  });
});

// Инициализация текста при загрузке страницы
document.querySelectorAll('.collapsible-content').forEach(content => {
  const isMobile = window.innerWidth <= 768;
  if (!isMobile && content.textContent.length > 200) {
    content.originalText = content.textContent;
    content.textContent = content.textContent.slice(0, 200) + '...';
  } else if (isMobile) {
    content.style.display = 'none'; // Скрываем контент для мобильной версии
  }
});

// header

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link'); // Находим все ссылки с классом nav-link
  const currentUrl = window.location.pathname.endsWith('/')
    ? window.location.pathname.slice(0, -1)
    : window.location.pathname;

  navLinks.forEach(link => {
    const linkUrl = new URL(link.getAttribute('href'), window.location.origin)
      .pathname;

    if (linkUrl === currentUrl || linkUrl === `${currentUrl}.html`) {
      link.classList.add('active'); // Добавляем класс active
    } else {
      link.classList.remove('active'); // Удаляем класс active
    }
  });
});

// burger menu

document.addEventListener('DOMContentLoaded', () => {
  // Элементы меню
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerOverlay = document.querySelector('.burger-overlay');
  const closeMenu = document.querySelector('.close-menu');

  // Проверяем, найдены ли элементы
  if (!burgerMenu || !burgerOverlay || !closeMenu) {
    console.error('One or more elements not found:', {
      burgerMenu,
      burgerOverlay,
      closeMenu,
    });
    return;
  }

  // Открытие меню
  burgerMenu.addEventListener('click', () => {
    console.log('Menu opened');
    burgerOverlay.classList.add('active');
  });

  // Закрытие меню
  closeMenu.addEventListener('click', () => {
    console.log('Menu closed');
    burgerOverlay.classList.remove('active');
    console.log(
      'Class active removed:',
      burgerOverlay.classList.contains('active')
    ); // Проверка удаления
  });
});

// about page

document.addEventListener('DOMContentLoaded', () => {
  const watchMoreButton = document.querySelector('.watch-more-btn');

  if (watchMoreButton) {
    watchMoreButton.addEventListener('click', () => {
      window.location.href = './experience.html';
    });
  }
});

// contact form

document
  .getElementById('contactForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
      } else {
        alert(result.error || 'Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  });
