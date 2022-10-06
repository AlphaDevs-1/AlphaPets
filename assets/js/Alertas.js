//declaracion de variables
let especie = document.getElementById("especie")
let ubicacion = document.getElementById("ubicacion")
let observacion = document.getElementById("observacion")
let btnRegistrarAlerta = document.getElementById("btnRegistrarAlerta")
let form = document.getElementById("alertasForm")

//fin declaracion de variables
//declaracion de fucniones
btnRegistrarAlerta.addEventListener("click", function () {
    if (especie.value && ubicacion.value && observacion.value) {
        let alertasDB = JSON.parse(window.localStorage.getItem("alertas")) //ir a buscar por alertas
        if (!alertasDB) {
            alertasDB = []
        }
        alertasDB.push({ "especie": especie.value, "ubicacion": ubicacion.value, "observacion": observacion.value })
        window.localStorage.setItem("alertas", JSON.stringify(alertasDB))
        form.reset()
        showToast("Alerta Creada")
    }else{
        showToast("Debe llenar todos los campos")
    }
})

function showToast(msg) { //funcionshowtoast para las ventanas emergentes de notificacion
    let spanMsg = document.getElementById("msg")
    spanMsg.innerHTML = msg
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}