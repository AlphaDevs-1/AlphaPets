let email = document.getElementById("correo")
let password = document.getElementById("password")
let Login = document.getElementById("ingresar")

function login() {
    let usuario = JSON.parse(window.localStorage.getItem(email.value))
    if (usuario) {
        if (email.value == usuario.email && password.value == usuario.password) {
            alert("Bienvenido")
            window.location.href = ("./Principal.html")
        } else {
            alert("No son las credenciales correctas")
        }
    } else {
        alert("El correo no esta registrado")
    }
}

Login.addEventListener("click", login)