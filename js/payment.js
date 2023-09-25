const withdrawl = document.getElementById('withdrawl');
const history = document.getElementById('history');
const withdrawlPage = document.getElementById('withdrawl-page');
const historyContainer = document.getElementById('history-container');
const withdrawlBtn = document.querySelectorAll('.withdrawl-btn');
const paymentForm = document.getElementById('payment-form');

history.addEventListener('click', () => {
  
  historyContainer.classList.remove('hidden');
  withdrawlPage.style.display = 'none';

})
withdrawl.addEventListener('click', () => {
  
  historyContainer.classList.toggle('hidden');
  withdrawlPage.style.display = 'block';

})

withdrawlBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    paymentForm.style.display = "flex";
  })
})

