
//Numero de Fichas en Juego
var fichas1 = 20;
var fichas2 = 20;
// Condiciones Fichas Feliz
var feliz_juego1 = 3 ;
var feliz_juego2 = 1;
//REGLA1
	var contador=0;
	var incremento=1; //constante de incremento
	var resultado=0;

function Reglas(reglacutre,regla2){

this.reglacutre=function(f,ficha,xIn,xFin,yIn,yFin,color,event,ui){

			if (xIn == xFin && yIn == yFin){
							f.nuevaFicha(xFin, yFin, color);
							
							tauler.tablero[xIn][yIn].asignarFicha(null);
							tauler.tablero[xFin][yFin].asignarFicha(f);
							ui.draggable.remove();
							$("#casilla"+xFin+yFin).droppable({
				      activeClass: "",
			    })

						}
						else{// Si no esta feliz, dejara mover
							if (ficha==null && $("#ficha"+xIn+yIn).hasClass("ficha1") ||  $("#ficha"+xIn+yIn).hasClass("ficha2")) {

								
								f.nuevaFicha(xFin, yFin, color);//creamos nueva ficha
								tauler.tablero[xIn][yIn].asignarFicha(null);
								tauler.tablero[xFin][yFin].asignarFicha(f);
								ui.draggable.remove();
								tauler.tablero[xFin][yFin].asignarFicha(f);
								$("#casilla"+xFin+yFin).droppable({
				      activeClass: "",
			    })
							//alert(color);
							this.calcRango(xFin,yFin,color);
							this.felicidadracista(f,xFin,yFin,color,event,ui);
							ui.draggable.remove();
							
							}
							else{
								//alert("No se puede ");
								f.nuevaFicha(xIn, yIn, color);
								ui.draggable.remove();
							}
						}	

	}

	this.regla2=function(f,ficha,xIn,xFin,yIn,yFin,color,event,ui){

			if (xIn == xFin && yIn == yFin){
							f.nuevaFicha(xFin, yFin, color);
							
							tauler.tablero[xIn][yIn].asignarFicha(null);
							tauler.tablero[xFin][yFin].asignarFicha(f);
							ui.draggable.remove();
							$("#casilla"+xFin+yFin).droppable({
				      activeClass: "",
			    })

						}
						else{
							if (ficha==null) {
								f.nuevaFicha(xFin, yFin, color);
								tauler.tablero[xIn][yIn].asignarFicha(null);
								tauler.tablero[xFin][yFin].asignarFicha(f);
								ui.draggable.remove();
								tauler.tablero[xFin][yFin].asignarFicha(f);
								$("#casilla"+xFin+yFin).droppable({
				      activeClass: "",
			    })
							
							}
							else{
								//alert("Ahí ya hay una ficha");
								f.nuevaFicha(xIn, yIn, color);
								ui.draggable.remove();
							}
						}	

	}

this.calcRango=function(y,x,color,f){
	if((x-1)>=0 && (y-1)>=0 && (x-1)<10 && (y-1)<10){

			if($("#ficha"+(y-1)+(x-1)).hasClass(color)){
					resultado = contador + incremento ;
					contador=resultado;	
					//alert("soy igual");		
			}else{
				//alert("soy racista, no te ajunto");
			}
			
		}
		else{
			//alert("ARRIBA-IZQUIERDA fuera de rango");
		}


		if(x>=0 && (y-1)>=0 && x<10 && (y-1)<10){

			if($("#ficha"+(y-1)+(x)).hasClass(color)){

				//alert("soy del mismo color y sumo 1");
					resultado = contador + incremento ;
					contador=resultado;				
			}else{
				//alert("soy racista, no te ajunto");
			}
		}
		else{
			//alert("ARRIBA fuera de rango");
		}


		if((x+1)>=0 && (y-1)>=0 && (x+1)<10 && (y-1)<10){

			if($("#ficha"+(y-1)+(x+1)).hasClass(color)){
					resultado = contador + incremento ;
					contador=resultado;	
				//alert("soy del mismo color y sumo 1");			
			}else{
				//alert("soy racista, no te ajunto");
			}
		}
		else{
			//alert("ARRIBA-DERECHA fuera de rango");
		}
/*----------------- FILA DE MEDIO -----------------------------*/
		if((x-1)>=0 && y >=0 && (x-1)<10 && y<10){

			if($("#ficha"+(y)+(x-1)).hasClass(color)){
					resultado = contador + incremento ;
					contador=resultado;	
				//alert("soy del mismo color y sumo 1");			
			}else{
				//alert("soy racista, no te ajunto");
			}

		}
		else{
			//alert("IZQUIERDA fuera de rango");
		}


		if((x+1)>=0 && y >=0 && (x+1)<10 && y<10){
			
			if($("#ficha"+(y)+(x+1)).hasClass(color)){
				resultado = contador + incremento ;
					contador=resultado;
				//alert("soy del mismo color y sumo 1");			
			}else{
				//alert("soy racista, no te ajunto");
			}
		}
		else{
			//alert("DERECHA fuera de rango");
		}

/*----------------- FILA DE ABAJO -----------------------------*/		
		if((x-1)>=0 && (y+1)>=0 && (x-1)<10 && (y+1)<10){

			if($("#ficha"+(y+1)+(x-1)).hasClass(color)){
				resultado = contador + incremento ;
					contador=resultado;
				//alert("soy del mismo color y sumo 1");			
			}else{
				//alert("soy racista, no te ajunto");
			}
		}
		else{
			//alert("ABAJO-IZQUIERDA fuera de rango");
		}


		if(x>=0 && (y+1)>=0 && x<10 && (y+1)<10){

			if($("#ficha"+(y+1)+(x)).hasClass(color)){
				resultado = contador + incremento ;
					contador=resultado;
				//alert("soy del mismo color y sumo 1");			
			}else{
				//alert("soy racista, no te ajunto");
			}
		}
		else{
			//alert("ABAJO fuera de rango");
		}


		if((x+1)>=0 && (y+1)>=0 && (x+1)<10 && (y+1)<10){

			if($("#ficha"+(y+1)+(x+1)).hasClass(color)){
				resultado = contador + incremento ;
					contador=resultado;
				//alert("soy del mismo color y sumo 1");			
			}else{
				//alert("soy racista, no te ajunto");
			}
		}
		else{
			//alert("ABAJO-DERECHA fuera de rango");
		}


	}
	

this.felicidadracista=function(f,x,y,color,event,ui){

if($("#ficha"+x+y).hasClass('ficha1') && contador>=3){
				$("#ficha"+x+y).removeClass( "ui-draggable");
				$("#ficha"+x+y).removeClass( "ui-widget-content");
				$("#ficha"+x+y).removeClass( "ficha1").addClass("ficha3");
				$("#casilla"+x+y).droppable('disable');		
//$("#casilla"+x+y).removeClass( "ficha1" ).addClass( "ficha4" );
				//cambiar clase ficha 3
				contador=0;
						
			}else 
if($("#ficha"+x+y).hasClass('ficha2') && contador>=3){
				$("#ficha"+x+y).removeClass( "ui-draggable");
				$("#ficha"+x+y).removeClass( "ui-widget-content");
				$("#ficha"+x+y).removeClass( "ficha2").addClass("ficha4");
				$("#casilla"+x+y).droppable('disable');	
//$("#casilla"+x+y).removeClass( "ficha2" ).addClass( "ficha4" );
				//cambiar clase ficha 3
				contador=0;
						
			}

};

	
}