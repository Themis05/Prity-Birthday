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

    if (usernameInput === "Prity Aisyah Putri Evita" && passwordInput === "10 April") {
        alert("Login berhasil! Happy Birthdayyy Prity!");
        window.location.href = "../Project.html"; 
    } else {
        alert("Hayoo dilarang masuk selain Prity!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login form");
    const loginBtn = loginForm.querySelector(".btn");
    const usernameInput = loginForm.querySelector("input[placeholder='Username']");
    const passwordInput = loginForm.querySelector("input[placeholder='Password']");

    function toggleLoginButton() {
        const isUsernameFilled = usernameInput.value.trim() !== "";
        const isPasswordFilled = passwordInput.value.trim() !== "";

        if (isUsernameFilled && isPasswordFilled) {
            loginBtn.disabled = false;
            loginBtn.style.opacity = "1"; // aktif
            loginBtn.style.cursor = "pointer";
        } else {
            loginBtn.disabled = true;
            loginBtn.style.opacity = "0.5"; // redup
            loginBtn.style.cursor = "not-allowed";
        }
    }

    // Set awal redup
    toggleLoginButton();

    // Cek tiap kali input berubah
    usernameInput.addEventListener("input", toggleLoginButton);
    passwordInput.addEventListener("input", toggleLoginButton);
});
