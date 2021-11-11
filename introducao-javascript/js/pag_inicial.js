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

function calculaImc(peso, altura) {
   var imc = 0;
   
   verificaDados(peso, altura);
   
    if (peso && altura){
        imc = peso/( altura ** 2);
        
    }
   
   return imc.toFixed(2);

}
var pesoValido = true;
var alturaValido = true;
var paciente = document.querySelector(".paciente");

function recebeDados(paciente){
    paciente = {

        peso : paciente.querySelector(".info_peso").textContent,
        altura : paciente.querySelector('.info_altura').textContent,
        gordura : paciente.querySelector('.info_gordura').textContent,
        imc : paciente.querySelector('.info_imc')
    }

    return paciente;
}

var pacientes = document.querySelectorAll(".paciente");
console.log(paciente)

var imcTd = calculaImc()

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    recebeDados(paciente)
    imcTd.textContent = calculaImc(paciente ,peso, altura);
    
}


