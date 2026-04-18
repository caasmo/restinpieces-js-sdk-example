import Restinpieces from "restinpieces";

const rp = new Restinpieces();
rp.store.auth.save(null);

document.getElementById('login-btn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('register-btn').addEventListener('click', () => {
  window.location.href = '/register.html';
});
