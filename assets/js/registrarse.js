let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signup = document.getElementById("btnSignup")
let form = document.getElementById("form")

signup.addEventListener("click", function () {
    form.classList.add('was-validated')
    if (form.checkValidity()) {
        if (window.localStorage.getItem(email.value)) {
            console.error("Ya existe el usuario")
            showToast("El usuario ya se encuentra registrado")
        } else {
            window.localStorage.setItem(email.value, JSON.stringify({ "email": email.value, "name": name.value, "phone": phone.value, "password": password.value }))
            form.classList.remove('was-validated')
            form.reset()
            showToast("¡Usuario registrado con exito!")
        }
    } else {
        console.error("Primero revise validaciones")
        showToast("Formulario incompleto")
    }
    
});

function showToast(msg) {
    let spanMsg = document.getElementById("msg")
    spanMsg.innerHTML = msg
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

