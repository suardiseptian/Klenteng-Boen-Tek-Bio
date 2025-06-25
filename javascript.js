// script.js

// Menampilkan konten sesuai tautan
function showContent(page) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  const activeSection = document.getElementById(page);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

// Menjalankan fungsi showContent berdasarkan hash URL
window.addEventListener('DOMContentLoaded', () => {
  const defaultPage = location.hash ? location.hash.substring(1) : 'beranda';
  showContent(defaultPage);

  // Tambahkan event listener ke tautan menu
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const page = this.getAttribute('href').replace('.html', '');
      showContent(page);
      history.pushState(null, '', `#${page}`);
    });
  });
});
