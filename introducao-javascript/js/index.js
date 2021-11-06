var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Desaparecida"


var paciente2 = ( document.querySelector("#paciente_2"));

var tdPeso = paciente2.querySelector(".info_peso");
var peso = tdPeso.textContent;

var tdAltura = paciente2.querySelector(".info_altura")
var altura = tdAltura.textContent;

var tdImc = paciente2.querySelector (".info_imc");


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
calculaImc(paciente_1,info-peso,info-altura,info-imc);


console.log(imc)

