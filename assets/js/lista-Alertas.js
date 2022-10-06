document.getElementById("add-alert").addEventListener("click", function () {
    window.location.href = ("Alertas.html")
});
//solicitud de redireccionamiento sobre boton de ir alertas hacia alertas.html

//declaracion de fucniones
(function crearListaAlertas(){
    

    var html = '';
    let alertasDB = JSON.parse(window.localStorage.getItem("alertas")) // ir a traer informacion por el key alertas
    for (var i = 0; i <= alertasDB.length-1; i++) {
        html += //desde este punto se estan llenando las columnas con la informacion nueva registrada en cada td
        `<tr>
        <th scope="row">${i+1}</th> 
        <td >${alertasDB[i].especie}</td>
        <td >${alertasDB[i].ubicacion}</td>
        <td>${alertasDB[i].observacion}</td>
        <td><input type="checkbox" name="" id=""></td>
        
    </tr>`
    } // fin de la estructura de la tabla. 
    
    document.getElementById('container-list').innerHTML += html;
})()