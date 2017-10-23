var objetoPastel;

function datosPastel(){
    $.ajax("http://localhost:8000/cotizaciones/api/all/",
        {
            method:"GET"
        }
    ).then(function(res){
            console.log(res);
            objetoPastel = res;
        },
        function(err){
            console.error(err);
        }
    );
}

function desplegarDatos(){
    $.each(objetoPastel, function( index, array ) {
        $.each(array, function(object, arrayObject){
           console.log(arrayObject.nombre);
           $("#lista").append(arrayObject.nombre);
        });
    });
}

$(document).ready(function(){
    console.log("javascript loaded");
    datosPastel();
    desplegarDatos();
});