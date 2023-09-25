const about = document.getElementById('about-tab');
const password = document.getElementById('password-tab');
const form = document.getElementById('form');
const passwordForm = document.getElementById('password-form');

password.addEventListener('click', () => {
  passwordForm.classList.remove('hidden');
  form.style.display = 'none';
})

about.addEventListener('click', () => {
  passwordForm.classList.toggle('hidden');
  form.style.display = 'block';
})
