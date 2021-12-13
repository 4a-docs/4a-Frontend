
// objeto datos de prueba
const adminUser = {
    name: "Julian Mora",
    email: "admin@admin.com",
    password: "admin1234",
    img: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  };

const loginService = {
    login(credenciales) {
        if (
            credenciales.email === adminUser.email &&
            credenciales.password === adminUser.password
          ) {
            console.log("Iniciaste sesión!");
      
            return adminUser;
        }
        console.log("Ingresa datos correctos");
        return null;
    }
}

export default loginService;
