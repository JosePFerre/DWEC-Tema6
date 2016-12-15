//RELACION 1 TEMA 6 DAW DWEC
//Jose Pablo Ferre Leorini

/* 1 - Crea una página web con un botón, que haciendo uso de AJAX al pulsarlo se llame a
otra página del servidor y se muestre su contenido.*/

function peticion(){
	if (window.XMLHttpRequest) {
    	peti = new XMLHttpRequest();
 	} else {
    	peti = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//Funcion de respuesta
	peti.onreadystatechange = cambiaPagina;
	
	//Realizar peticion HTTP
	peti.open("POST", "nuevapaginaEj1.html", true);
	peti.send();
	
	
	function cambiaPagina(){
		if (peti.readyState == 4 && peti.status == 200) {
      		document.write(peti.responseText);
    	}
	}
}
