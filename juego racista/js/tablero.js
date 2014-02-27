



function Tablero(){
	this.tablero = null;

	$("#tablero").empty();
	this.crearTablero = function(){
		this.tablero = new Array(new Array(10))
		for (var i = 0; i < 10; i++) {
			$("#tablero").addClass("divTablero");
			this.tablero[i] = new Array(new Array(10));
			$("#tablero").append
			(
				$(document.createElement("div"))
					.attr("id","fila"+i)
					.addClass("divFila")
			)
			for (var j = 0; j < 10; j++) {
				var casilla = new Casilla(i,j);
				this.tablero[i][j] = casilla;
				this.tablero[i][j].nuevaCasilla(i,j);
			};
		};
		console.log(this.tablero);
	}
	
	this.darFichas = function(){

		for (var a = 0; a < fichas1; a++) {
			do{
				x = Math.floor((Math.random()*10)+0);
				y = Math.floor((Math.random()*10)+0);
			}while(this.tablero[x][y].hayFicha());
			var f = new Ficha();
			f.nuevaFicha(x, y, "ficha1");
			this.tablero[x][y].asignarFicha(f);

		};
		for (var a = 0; a < fichas2; a++) {
			do{
				x = Math.floor((Math.random()*10)+0);
				y = Math.floor((Math.random()*10)+0);
			}while(this.tablero[x][y].hayFicha());
			var f = new Ficha();
			f.nuevaFicha(x, y, "ficha2");
			this.tablero[x][y].asignarFicha(f);
			
		};
	}

	this.moverFichas = function(){
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 10; j++) {
			if (this.tablero[i][j].hayFicha()==false){
					
					//alert(i+"-"+j);
					$("#casilla"+i+j).droppable({
				      activeClass: "hover",
				      hoverClass: "active",
			    })

			}
			};
		};
	}


}
