function Casilla(x,y){
	var id;
	var color;
	var estado;
	var ficha = null;

	this.nuevaCasilla = function(i,j){
		//color = ficha_color;
		$("#fila"+i).append
		(
			$(document.createElement("div"))
				.attr("id","casilla"+i+j)
				.addClass("divCasilla")
				.droppable({
					drop:function(event,ui)
					{


						var inicio = ui.draggable.parent().attr("id");
						var fin = event.target.id;
					
						var color = ui.draggable.attr("class");
						var color = color.slice(0,6);
						var xFin = parseInt(fin.slice(7,8));
						var yFin = parseInt(fin.slice(8,9));
						var xIn = parseInt(inicio.slice(7,8));
						var yIn = parseInt(inicio.slice(8,9));
						var f = new Ficha();
						var reglaprimera= new Reglas();
						reglaprimera.reglacutre (f,ficha,xIn,xFin,yIn,yFin,color,event,ui);


					}
					
				})
		)
		
	}
	this.asignarFicha = function(nuevaFicha){
		ficha = nuevaFicha;
	}
	this.hayFicha = function(){
		if (ficha == null) {
			return false;
		}
		else{
			return true;
		}
	}















	
}