function datosPastel(){
    $.ajax("http://localhost:8000/cotizaciones/api/all/",
        {
            method:"GET"
        }
    ).then(function(res){
            console.log(res);
        },
        function(err){
            console.error(err);
        }
    );
}

function init()
{
    console.log("javascript loaded");
    datosPastel();
}

window.onload = init;