var objetoPastel;

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
//
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
    // desplegarAditivos();
}

window.onload = function() {
    init();
};