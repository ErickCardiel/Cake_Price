var gastosAdicionales=5;
var multiplicadorGanancia=2;
var multiplicadorTamano;
var total = 0;
var cnt = 0;
var precioSelecciones = [];
var listas = ['listaTamano','listaTipoPan','listaAditivos','listaRelleno','listaCubierta','listaToppings'];

var bandera_topping=0;
var tam;
var matriz;
var flotantePrecioSeleccion;
var stringPrecioSeleccion;


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


    $('#listaToppings').selectable
    ({
        stop: function()
        {
            $('.ui-selected').each(function()
            {
               stringPrecioSeleccion=$(this).text();
            });
            $('#seleccionActual').html(stringPrecioSeleccion);
            bandera_topping = 1;
            flotantePrecioSeleccion = parseFloat(stringPrecioSeleccion);
        }
    });

    $('#pastel').droppable
    ({
        drop:eventoDrop
    });
});


function toggleShow(show)
{
    for(var index=0; index<listas.length; index++)
    {
        if (index !== show)
            $(document.getElementById(listas[index])).hide();

        else
        {
            $(document.getElementById(listas[show])).show();
            if(show==5)
                colocarMatriz(); // Crea matriz de divs
        }
    }
}

function colocarMatriz()
{
    var elemento;
    if (multiplicadorTamano == 1) tam = 2;
    else if (multiplicadorTamano == 2) tam = 4;
    else if (multiplicadorTamano == 4) tam = 6;
    else if (multiplicadorTamano == 8) tam = 10;
    matriz = new Array(tam);

    for(var i=0; i<tam; i++)
        matriz[i] = new Array(tam);


    for(var i=0; i<tam; i++)
        for(var j=0; j<tam; j++)
        {
            elemento = document.createElement("div");
            elemento.id="div"+(j+i*tam);
            elemento.setAttribute("style","position: absolute; left: "+((20*j)+7)+"px; top: "+((20*i)+65)+"px;");
            elemento.setAttribute("precio","0");
            elemento.classList.add("divMatriz");
            elemento.setAttribute("onclick","event_pastel('"+elemento.getAttribute("id")+"')");
            matriz[i][j] = elemento;
        }

    for(var i=0; i<tam; i++)
        for(var j=0; j<tam; j++)
            document.body.appendChild(matriz[i][j]);
}


function event_pastel(idDiv)
{
    if(bandera_topping==0)
	{
        console.log("Estoy en bandera_topping==0");
        if(document.getElementById(idDiv).style.backgroundColor=='yellow')
        {
            document.getElementById(idDiv).style.backgroundColor=null;
            total = total - parseFloat(document.getElementById(idDiv).getAttribute("precio")); // Convierto el atributo
             // precio del cuadrito seleccionado del pastel a flotante
            $('#total').text(total);
        }
	}

	if(bandera_topping==1)
	{
        if(document.getElementById(idDiv).style.backgroundColor!='yellow')
		{
		    document.getElementById(idDiv).setAttribute("precio",stringPrecioSeleccion)
            document.getElementById(idDiv).style.backgroundColor='yellow';
            console.log("Estoy en bandera_topping==1");
            console.log("El valor de fresas es: "+flotantePrecioSeleccion);
            total = total + flotantePrecioSeleccion;
            $('#total').text(total);
            bandera_topping=0;
        }
	}
}


function muestraPrecio()
{
    total = 0;
    for(var index=0; index<precioSelecciones.length; index++)
        total += precioSelecciones[index];

    total = (total+gastosAdicionales)*multiplicadorTamano*multiplicadorGanancia;
    $('#total').text(total);
}


function eliminaMatriz()
{
    for(var i=0; i<tam; i++)
        for(var j=0; j<tam; j++)
            matriz[i][j].remove();
}

function deshacerSeleccion()
{
    if(cnt>0)
    {
        cnt--;
        toggleShow(cnt);
        if(cnt===0)
            multiplicadorTamano=0;

        else if (cnt===1)
        {
            precioSelecciones.pop();
            $('#total').text('0');
        }

        else
        {
            precioSelecciones.pop();
            eliminaMatriz();
            muestraPrecio();
        }
    }
}
    // document.getElementById('back').addEventListener('click',deshacerSeleccion);


function eventoDrop(evento,ui)
{
    var draggable = ui.draggable;
    var nuevoPrecio = parseFloat(draggable.children('.precio').text());
    cnt++;
    toggleShow(cnt);
    if(parseFloat(draggable.children('.multiplicador').text()))
        multiplicadorTamano = parseFloat(draggable.children('.multiplicador').text());

    if(multiplicadorTamano&&nuevoPrecio)
    {
        precioSelecciones.push(nuevoPrecio);
        muestraPrecio();
    }
}