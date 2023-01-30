// Variables
const btn = document.querySelector('.btn');
const cross = document.querySelector('.cross');
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function () {
  modal.style.display = 'flex';
  overlay.style.display = 'block';
});

cross.addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
});
