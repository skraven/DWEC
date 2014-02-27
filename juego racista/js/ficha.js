
function Ficha(x,y){
	var id;
	this.color;
	var estado;

	this.nuevaFicha = function(i,j, color){
		
		$("#casilla"+i+j).append
		(
			$(document.createElement("div"))
				.attr("id","ficha"+i+j)
				.addClass(color+" ui-widget-content ")
				.draggable(
				{
					revert:'invalid',
					start:function(event,ui)
					{
						tauler.moverFichas();
					}
				})
					
		)
		id = "ficha"+i+j;
	}

	
}