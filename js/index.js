const dropdownBtn = document.getElementById('dropdown-btn');
const profileContainer = document.getElementById('profile-container');

dropdownBtn.addEventListener('click', () => {
  profileContainer.classList.remove('hidden');
  return;
})
