/* =====================
   NAVBAR: Active link highlight
===================== */
document.querySelectorAll('.navbar ul li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.navbar ul li').forEach(l => l.classList.remove('active'));
    li.classList.add('active');
  });
});

/* =====================
   CAROUSEL
===================== */
(function initCarousel() {
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  if (!dots.length) return;

  let current = 0;
  const total = dots.length;

  function goTo(index) {
    dots[current].classList.remove('active');
    current = (index + total) % total;
    dots[current].classList.add('active');
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Auto-play every 4 seconds
  setInterval(() => goTo(current + 1), 4000);
})();

/* =====================
   CATEGORY BAR: Active toggle
===================== */
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

/* =====================
   BOOK CARDS: Click to detail
===================== */
document.querySelectorAll('.book-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    window.location.href = 'book-detail.html';
  });
});

/* =====================
   UPDATE ITEMS: Click to reader
===================== */
document.querySelectorAll('.update-item').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    window.location.href = 'reader.html';
  });
});

/* =====================
   RANKING ITEMS: Click to detail
===================== */
document.querySelectorAll('.ranking-item').forEach(item => {
  item.addEventListener('click', () => {
    window.location.href = 'book-detail.html';
  });
});

/* =====================
   SEARCH BAR: Enter key
===================== */
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      if (q) window.location.href = `category.html?q=${encodeURIComponent(q)}`;
    }
  });
}

/* =====================
   CHAPTER ITEMS: Click to reader
===================== */
document.querySelectorAll('.chapter-item').forEach(item => {
  item.addEventListener('click', () => {
    window.location.href = 'reader.html';
  });
});

/* =====================
   LOGIN PANEL: Button nav
===================== */
const loginBtn = document.querySelector('.btn-login');
const registerBtn = document.querySelector('.nav-actions .btn-register');
if (loginBtn) loginBtn.addEventListener('click', () => window.location.href = 'user-center.html');

/* =====================
   TOAST HELPER (global utility)
   Usage: showToast('保存成功', 'success')
===================== */
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* =====================
   BOOKSHELF ADD BUTTON
===================== */
const addBtn = document.querySelector('.bookshelf-add');
if (addBtn) {
  addBtn.addEventListener('click', () => showToast('请先搜索并选择想要收藏的小说', 'info'));
}
