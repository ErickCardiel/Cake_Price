
function desplegarAditivos(objetoPastel) {
    let seccion = document.getElementById("AditivosPan");
    objetoPastel.AditivosPan.forEach(function (elemento) {
        let radio = document.createElement("input");
        let label = document.createElement("label");
        radio.setAttribute("id",elemento.nombre);
        radio.setAttribute("type","radio");
        radio.setAttribute("name","AditivosPan");
        radio.setAttribute("value",elemento.nombre);
        label.setAttribute("for",elemento.nombre);
        label.innerHTML = elemento.nombre;
        seccion.appendChild(radio);
        seccion.appendChild(label);
    });
}

function desplegarTamano(objetoPastel) {
    let seccion = document.getElementById("Tamano");
    objetoPastel.Tamano.forEach(function (elemento) {
        let button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", elemento.nombre);
        seccion.appendChild(button);
    });
}


window.onload = function() {
    fetch('http://localhost:8000/cotizaciones/api/all/').then(function (response) {
        return response.json();
    }).then(function (jsonresponse) {
        let objetoPastel = jsonresponse;
        desplegarAditivos(objetoPastel);
        desplegarTamano(objetoPastel);
    }).catch(function (error) {
        console.log(error);
    });
};
