var titulo =  document.querySelector(".titulo");

titulo.textContent ='Nutrição Aparecida';

function verificaDados(peso, altura) {
    
    if(peso<=0 && peso>=1000){
        pesoValido = false;
        imcTd.textContent = "Peso inválido";

    }
    else if (altura>=0 && altura>=1000){
        alturaValido = false;
        imcTd.textContent = "Altura inválido";
    }
    return alturaValido,pesoValido;
}

function imc(peso, altura) {
   var imc = 0;
   
   verificaDados(peso, altura);
   
    if (peso && altura){
        imc = peso/( altura ** 2);
        imcTd.textContent = imc.toFixed(2);
    }
   
   return imcTd;

}
var pesoValido = true;
var alturaValido = true;


var paciente = document.querySelector(".paciente");
var peso = paciente.querySelector(".info_peso").textContent;
var altura = paciente.querySelector('.info_altura').textContent;
var gordura = paciente.querySelector('.info_gordura').textContent;
var imcTd = paciente.querySelector('.info_imc');

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const element = pacientes[i];
    calculaImc(peso, altura);
}



