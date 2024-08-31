document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const dashboardPage= document.getElementById('dashboardPage');
    const logoutButton = document.getElementById('logoutButton');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Example login logic
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // This should be replaced with real authentication logic
        if (username === "user" && password === "password") {
            loginPage.style.display = 'none';
            dashboardPage.style.display = 'block';
        } else {
            alert('Invalid username or password!');
        }
    });

    logoutButton.addEventListener('click', function() {
        dashboardPage.style.display = 'none';
        loginPage.style.display = 'block';
    });
})
