document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const errorDiv = document.getElementById('error-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === 'abc@gmail.com' && password === '123') {
      errorDiv.textContent = '';
      alert('logined');
    } else {
      errorDiv.textContent = 'Invalid email or password!';
    }
  });
});