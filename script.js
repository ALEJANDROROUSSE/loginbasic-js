document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Credenciales Fijas (SOLO PARA ESTE EJEMPLO SENCILLO)
    const validUsername = 'usuario';
    const validPassword = 'password123';

    if (usernameInput === validUsername && passwordInput === validPassword) {
        messageElement.textContent = '¡Inicio de sesión exitoso! 🎉';
        messageElement.style.color = 'green';
        // Redirigir o mostrar contenido privado
        // window.location.href = 'dashboard.html';
    } else {
        messageElement.textContent = 'Usuario o contraseña incorrectos. 🛑';
        messageElement.style.color = 'red';
    }
});