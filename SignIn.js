const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (usernameInput.value === 'admin' && passwordInput.value === 'admin') {
    window.location.href = 'home.html';
  } else {
    errorMessage.textContent = 'Invalid username or password';
    form.classList.add('shake');
    setTimeout(() => {
      form.classList.remove('shake');
    }, 500);
  }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value === 'user' && passwordInput.value === 'user') {
      window.location.href = 'upload.html';
    } else {
      errorMessage.textContent = 'Invalid username or password';
      form.classList.add('shake');
      setTimeout(() => {
        form.classList.remove('shake');
      }, 500);
    }
  });


