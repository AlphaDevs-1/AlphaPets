//declaracion de variables
let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signup = document.getElementById("btnSignup")
let form = document.getElementById("form")
//fin declaracion de variables

//declaracion de fucniones
signup.addEventListener("click", function () {
    form.classList.add('was-validated')
    if (form.checkValidity()) { //condicional if para validar si el usuario se puede registrar
        if (window.localStorage.getItem(email.value)) {
            console.error("Ya existe el usuario")
            showToast("El usuario ya se encuentra registrado")
        } else {
            window.localStorage.setItem(email.value, JSON.stringify({ "email": email.value, "name": name.value, "phone": phone.value, "password": password.value }))
            form.classList.remove('was-validated')
            form.reset()
            showToast("¡Usuario registrado con exito!")
        } //validacion donde se alojan los datos en el local storage
    } else { // validacion en caso de que los datos esten incompletos
        console.error("Primero revise validaciones")
        showToast("Formulario incompleto")
    } //fin delvalidacion de registro
    
});

function showToast(msg) { //funcionshowtoast para las ventanas emergentes de notificacion
    let spanMsg = document.getElementById("msg")
    spanMsg.innerHTML = msg
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

