document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    const errorMsg = document.getElementById("login-error-msg");

    //Gets stored users from localStorage
    const storedUser = localStorage.getItem("registeredUser");
    const storedPass = localStorage.getItem("registeredPass");

    if (username === storedUser && password === storedPass) {
         alert("Login successful!");
         window.location.href = "products.html";
    } else {
         errorMsg.textContent = "Invalid username or password.";
         errorMsg.style.color = "red";
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMsg = document.getElementById("register-error-msg");

    //Password validation
    if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
         errorMsg.textContent = "Password must be at least 8 characters, include a number and an uppercase letter.";
         errorMsg.style.color = "red";
         return;
    }

    if (password !== confirmPassword) {
         errorMsg.textContent = "Passwords do not match.";
         errorMsg.style.color = "red";
         return;
    }

    //Store user info in localStorage
    localStorage.setItem("registeredUser", username);
    localStorage.setItem("registeredPass", password);

    alert("Registration successful");
    window.location.href = "login.html";
});
