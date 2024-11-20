const container = document.getElementById('container');
const registerBtn = document.getElementById('register'); // Corrected the variable name
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});