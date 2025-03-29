const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login form');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 

    const usernameInput = loginForm.querySelector('input[type="text"]').value;
    const passwordInput = loginForm.querySelector('input[type="password"]').value;

    if (usernameInput === "Prity Aisyah Putri Evita" && passwordInput === "April") {
        alert("Login berhasil! Happy Birthdayyy Prity!");
        window.location.href = "../index.html"; 
    } else {
        alert("Hayoo dilarang masuk selain Prity!");
    }
});
