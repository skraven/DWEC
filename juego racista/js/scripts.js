$(document).ready(function (){
	$("#boton_juego1").click(function(){
		tauler = new Tablero();
		tauler.crearTablero();
		tauler.darFichas();
	})
});