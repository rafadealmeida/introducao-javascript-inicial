var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Desaparecida"


var peso =Number( document.querySelector(".info-peso"));
var altura = Number(document.querySelector(".info-altura"));
var imc =(document.querySelector(".info-imc"));

var calculoImc = (peso * (altura**2));



imc.textContent = calculoImc;