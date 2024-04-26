// Función para cerrar sesión
const logout = async () => {
    try {
      // Enviar una solicitud al servidor
      const res = await fetch("/api/logout", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
      });
  
      // Eliminar la cookie de token al cerrar sesión
      document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
      
      // Redirigir al usuario a la página de inicio
      document.location.href = "/";
      
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  
  // Agregar un evento de escucha al botón de cierre de sesión
  document.getElementById("logoutBtn").addEventListener("click", logout);