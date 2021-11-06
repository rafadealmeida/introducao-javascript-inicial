var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Desaparecida"


var paciente2 = ( document.querySelector("#paciente_2"));

var tdPeso = paciente2.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente2.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente2.querySelector (".info-imc");


var imc =   peso / (altura ** 2);

 var imc = imc.toFixed(2)

tdImc.textContent = imc

function calculaImc(id,classPeso, classAltura,ClassImc) {
    var paciente =(document.querySelector("#id"));

    var tdPeso = paciente.querySelector(".classPeso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".classAltura")
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector (".classImc");
    
    
    var imc =   peso / (altura ** 2);
    
     var imc = imc.toFixed(2)
    
    tdImc.textContent = imc
}
calculaImc(paciente_1,info_peso,info_altura,info_imc);


console.log(imc)

