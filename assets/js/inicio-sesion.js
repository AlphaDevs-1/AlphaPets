//declaracion de variables
let email = document.getElementById("correo")
let password = document.getElementById("password")
let Login = document.getElementById("ingresar")
//fin declaracion de variables
function login() {
    let usuario = JSON.parse(window.localStorage.getItem(email.value))
    if (usuario) {
        if (email.value == usuario.email && password.value == usuario.password) { //validacion si el usuario se esta loguenado de forma correcta
            alert("Bienvenido") // en caso de que  registre la informacion correcta 
            window.location.href = ("./Principal.html")
        } else { // en caso de que no registre la informacion correcta 
            alert("No son las credenciales correctas")
        }
    } else {
        alert("El correo no esta registrado") // en caso de que no este registrado
    }
}

Login.addEventListener("click", login)