  var gastosAdicionales=5;
	var multiplicadorGanancia=2;
	var multiplicadorTamano;
	var total=0;
	var cnt=0;
	var anterior=0;

	$(document).on('ready',function()
	{

		$('#listaTamano li').draggable
		({
			helper:'clone',
			revert: "invalid",
		})

		$('#listaTipoPan li').draggable
		({
			helper:'clone',
			revert: "invalid",
		})
    $('#listaAditivos li').draggable
		({
			helper:'clone',
			revert: "invalid",
		})

    $('#listaCubierta li').draggable
		({
			helper:'clone',
			revert: "invalid",
		})


		$('#carrito').droppable
		({
			drop:eventoDrop
	    });


		function eventoDrop(evento,ui)
		{
			var draggable = ui.draggable;
			nuevoPrecio = parseFloat(draggable.children('.precio').text());

			if(parseFloat(draggable.children('.multiplicador').text()))
			{
				multiplicadorTamano = parseFloat(draggable.children('.multiplicador').text());
				$('#listaTamano li').hide();
        $('#listaTamano').hide();
        // $('#tipoPan').hide();
			}

			if(multiplicadorTamano&&nuevoPrecio)
				muestraPrecio(nuevoPrecio);
		}


		function muestraPrecio(nuevoPrecio)
		{
		    cnt=cnt+1;

			if(cnt==1)
			{
			    $('#listaTipoPan li').hide();
          $('#listaTipoPan').hide();
			    //$('#listaTamano li').css.('display','none');
				var nuevo = (((multiplicadorTamano*nuevoPrecio)*multiplicadorGanancia)+gastosAdicionales);
				total = nuevo;
				$('#total').text(nuevo);
			}

			if(cnt>=2&&cnt<=8)
			{
				total = total + ((nuevoPrecio*multiplicadorTamano)*multiplicadorGanancia);
				anterior = total;
				$('#total').text(total);
			}
        }
	});
