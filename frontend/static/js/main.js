
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

window.onload = function() {
    fetch('http://localhost:8000/cotizaciones/api/all/').then(function (response) {
        return response.json();
    }).then(function (jsonresponse) {
        let objetoPastel = jsonresponse;
        desplegarAditivos(objetoPastel);
    }).catch(function (error) {
        console.log(error);
    });
};
