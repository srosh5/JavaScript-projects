let eyeIcon = document.getElementById('eye-icon');
let password = document.getElementById('password');

eyeIcon.onclick = function () {
  if (password.type == 'password') {
    password.type = 'text';
    eyeIcon.src = 'eye-icons/eye-open.png';
  } else if (password.type == 'text') {
    password.type = 'password';
    eyeIcon.src = 'eye-icons/eye-close.png';
  }
}