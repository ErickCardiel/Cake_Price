function desplegarAditivos(objetoPastel) {
    let tag = document.getElementById("AditivosPan");
    let radioHtml;
    objetoPastel.AditivosPan.forEach(function (elemento) {
        radioHtml = '<input type="radio" name="AditivosPan" value="' + elemento.nombre + '" />';
        radioHtml += elemento.nombre;
        radioHtml += "</br>";
        tag.insertAdjacentHTML('beforeend', radioHtml);
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