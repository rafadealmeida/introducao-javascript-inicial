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
        
    }
   
   return imc.toFixed(2);

}
var pesoValido = true;
var alturaValido = true;

function recebeDados(paciente){
    var paciente,[i] = document.querySelector(".paciente");
    var peso = paciente.querySelector(".info_peso").textContent;
    var altura = paciente.querySelector('.info_altura').textContent;
    var gordura = paciente.querySelector('.info_gordura').textContent;
    var imc = paciente.querySelector('.info_imc');

    return paciente;
}

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

var imcTd= imc

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    recebeDados(paciente)
    imcTd.textContent = imc(paciente ,peso, altura);
    
}


