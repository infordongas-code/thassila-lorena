const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('aberto'));
});

document.getElementById('ano').textContent = new Date().getFullYear();
