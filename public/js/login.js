document.addEventListener("DOMContentLoaded", () => {
  const welcomeMessage = document.getElementById("welcomeMessage");

  // Agregar un evento de escucha para el evento 'submit' del formulario
  document.getElementById("signInForm").addEventListener("submit", async (event) => {
      event.preventDefault();

      // Obtener los datos del formulario
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMessage = document.getElementById("errorMessage");

      // Enviar los datos del formulario al servidor
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

    
      // Si la respuesta no es exitosa desde el servidor, mostrar el mensaje de error en el id errorMessage
      if (!response.ok) {
        const errorData = await response.json();
        errorMessage.innerHTML = errorData.error;
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

      // Si la respuesta es exitosa, mostrar un mensaje de bienvenida al usuario
      } else {
        const data = await response.json();
        signInForm.classList.add("hidden");
        welcomeMessage.innerHTML = `<h1 class="welcomeTitle">Bienvenido, <br> ${email}</h1>
                                    <button class="btn-style" onclick="window.location.href='/dashboard'" id="dashboardButton">Ir al Dashboard</button>`;
      }

    });
});
