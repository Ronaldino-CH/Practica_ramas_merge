const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  // Credenciales simuladas
  if (user === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login correcto. Bienvenido 👍";
  } else {
    message.style.color = "red";
    message.textContent = "Usuario o contraseña incorrectos ❌";
  }
});
