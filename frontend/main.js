let objetoPastel;

function datosPastel() {
    fetch('http://localhost:8000/cotizaciones/api/all/').then(function (response) {
        return response.json();
    }).then(function (myjson) {
        objetoPastel = myjson;
    });
}

// function desplegarDatos(){
//     $.each(objetoPastel, function( index, array ) {
//         $.each(array, function(object, arrayObject){
//            console.log(arrayObject.nombre);
//            $("#lista").append(arrayObject.nombre);
//         });
//     });
// }

// function desplegarAditivos(){
//     $.each(objetoPastel.AditivosPan, function (object, arrayObject) {
//         $("#lAdiciones").append("<li>"+arrayObject.nombre+"</li>");
//     })
// }

function desplegarAditivos(){
    let tag = document.getElementById("AditivosPan");
    let radioHtml;
    objetoPastel.AditivosPan.forEach(function (elemento) {
        radioHtml = '<input type="radio" name="AditivosPan" value="' + elemento.nombre + '" />';
        radioHtml += elemento.nombre;
        radioHtml += "</br>";
        tag.insertAdjacentHTML('beforeend',radioHtml);
    });
}

// function desplegarTamano(){
//     $.each(objetoPastel.Tamano, function (object, arrayObject) {
//         $("#lTamano").append("<li>"+arrayObject.nombre+"</li>");
//     })
// }

function init(){
    console.log("javascript loaded");
    datosPastel();
    console.log(objetoPastel);
    // desplegarTamano();
    desplegarAditivos();
}

function testTraverse(){
    test = objetoPastel.AditivosPan;
    test = test.filter(function (current) {
        return current !== undefined;
    });
    test.forEach(function (aditivo) {
        console.log(aditivo.nombre);
    })
}

window.onload = function() {
    init();
};