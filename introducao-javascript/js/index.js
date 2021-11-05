var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Desaparecida"


var paciente2 = ( document.querySelector("#paciente-2"));

var tdPeso = paciente2.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente2.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente2.querySelector (".info-imc");


var imc =   peso / (altura ** 2);

 var imc = imc.toFixed(2)

tdImc.textContent = imc


console.log(imc)

