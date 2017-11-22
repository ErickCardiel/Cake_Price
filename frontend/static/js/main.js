var gastosAdicionales=5;
var multiplicadorGanancia=2;
var multiplicadorTamano;
var total=0;
var cnt = 0;
var precioSelecciones = [];
var listas = ['listaTamano','listaTipoPan','listaRelleno','listaCubierta','listaAditivos'];

function toggleShow(show){
    for(var index=0; index<listas.length; index++) {
        if (index !== show) {
            $(document.getElementById(listas[index])).hide();
        }
        else {
            $(document.getElementById(listas[show])).show();
        }
    }
}

function muestraPrecio()
{
    total = 0;
    //multiplicador * tamano * (pan + aditivo + cubierta + relleno + toppings + gastos)
    for(var index=0; index<precioSelecciones.length; index++){
        total += precioSelecciones[index];
    }
    total = (total+gastosAdicionales)*multiplicadorTamano*multiplicadorGanancia;

    $('#total').text(total);
}

function deshacerSeleccion(){
    console.log(precioSelecciones);
    if(cnt>0){
        cnt--;
        toggleShow(cnt);
        if(cnt===0){
            multiplicadorTamano=0;
        }
        else if (cnt===1){
            precioSelecciones.pop();
            $('#total').text('0');
        }
        else {
            precioSelecciones.pop();
            muestraPrecio();
        }
    }

}

$(document).on('ready',function()
{
     toggleShow(cnt);
    $('#listaTamano li').draggable
    ({
        helper:'clone',
        revert: "invalid"
    });

    $('#listaTipoPan li').draggable
    ({
        helper:'clone',
        revert: "invalid"
    });
    $('#listaAditivos li').draggable
    ({
        helper:'clone',
        revert: "invalid"
    });

    $('#listaRelleno li').draggable
    ({
        helper:'clone',
        revert: "invalid"
    });

    $('#listaCubierta li').draggable
    ({
        helper:'clone',
        revert: "invalid"
    });


    $('#carrito').droppable
    ({
        drop:eventoDrop
    });

    document.getElementById('back').addEventListener('click',deshacerSeleccion);


    function eventoDrop(evento,ui)
    {
        var draggable = ui.draggable;
        var nuevoPrecio = parseFloat(draggable.children('.precio').text());
        cnt++;
        toggleShow(cnt);
        if(parseFloat(draggable.children('.multiplicador').text()))
        {
            multiplicadorTamano = parseFloat(draggable.children('.multiplicador').text());
            // $('#listaTamano li').hide();
            // $('#listaTamano').hide();
            // $('#tipoPan').hide();
        }

        if(multiplicadorTamano&&nuevoPrecio){
            precioSelecciones.push(nuevoPrecio);
            console.log(precioSelecciones);
            muestraPrecio();
        }

    }



});
