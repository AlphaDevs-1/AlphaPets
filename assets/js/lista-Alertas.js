document.getElementById("add-alert").addEventListener("click", function () {
    window.location.href = ("Alertas.html")
});



(function crearListaAlertas(){
    

    var html = '';
    let alertasDB = JSON.parse(window.localStorage.getItem("alertas"))
    for (var i = 0; i <= alertasDB.length-1; i++) {
        //console.log(alertasDB[i].especie)
        html += 
        `<tr>
        <th scope="row">${i+1}</th>
        <td >${alertasDB[i].especie}</td>
        <td >${alertasDB[i].ubicacion}</td>
        <td>${alertasDB[i].observacion}</td>
        <td><input type="checkbox" name="" id=""></td>
        
    </tr>`
    }
    
    document.getElementById('container-list').innerHTML += html;
})()