//RELACION 1 TEMA 6 DAW DWEC
//Jose Pablo Ferre Leorini

/* 5. Crea una web que funcione como un cliente de correo electrónico. Para ello
supongamos que en tu servidor dispones de un script que conforme se recibe un
correo, éste se escribe en un fichero XML. Por tanto:
• Define el formato de fichero XML que te permita simular esta situación (correos
electrónicos).
• Crea la web con la interfaz necesaria para que periodicamente actualice la lista de
correos.*/

function peticion(){
	if (window.XMLHttpRequest) {
    	peti = new XMLHttpRequest();
 	} else {
    	peti = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//Funcion de respuesta
	peti.onreadystatechange = muestraCorreo;
	
	//Realizar peticion HTTP
	peti.open("POST", "correos.xml", true);
	peti.send();
	
	
	function muestraCorreo(){
		if (peti.readyState == 4 && peti.status == 200) {
			var xmlDoc = peti.responseXML;
			var listaCorreos = xmlDoc.getElementsByTagName("correo");
			var i = 0;
			function espera () {
				setTimeout(function () {
					let caja = document.createElement('div');
					caja.className = 'caja';
					let remitente = document.createElement('b');
					let asunto = document.createElement('div');
					let r = document.createTextNode(listaCorreos[i].getElementsByTagName("remitente")[0].childNodes[0].nodeValue);
					let a = document.createTextNode(listaCorreos[i].getElementsByTagName("asunto")[0].childNodes[0].nodeValue);
					remitente.appendChild(r);
					asunto.appendChild(a);
					document.body.appendChild(caja);
					caja.appendChild(remitente);
					caja.appendChild(asunto);
      				i++;
      				if (i < listaCorreos.length) {
         				espera();
      				}
   				}, 3000);
			}
			espera();
    	}
	}
}

window.onload = function(){
	peticion();
}