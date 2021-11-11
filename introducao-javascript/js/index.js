var titulo = document.querySelector(".titulo");

titulo.textContent = "Nutrição Aparecida"

var pacientes = document.querySelectorAll('.paciente');

for( i = 1; i <= pacientes.length; i++){

    var paciente = pacientes[i];
    
    var pesoValido = true;
    var alturaValida = true;
    
    
    var peso = paciente.querySelector(".info_peso").textContent;
    
    var altura = paciente.querySelector(".info_altura").textContent;
    
    var tdImc = calculaImc(peso, altura);
    

    
    if(peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso inválido";
        pesoValido = false;
        paciente.classList.add("calculoInvalido");
    }
    if(altura <= 0 || altura > 3.0){
        tdImc.textContent = "Altura inválido";
        alturaValida = false
        paciente.classList.add("calculoInvalido");
        
    }
    
    if(pesoValido && alturaValida){
        
       var imc = calculaImc(peso, altura)
        
        tdImc.textContent = imc;
    }
    
}


function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura ** 2);

    return imc.toFixed(2);

}

