var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Desaparecida"


function calculaImc(id,classPeso, classAltura,classImc) {
    
    var pesoValido = true;
    var alturaValida = true;
    
    var paciente =(document.querySelector(id));

    var peso = paciente.querySelector(classPeso).textContent;;
    
    var altura = paciente.querySelector(classAltura).textContent;
    
    var tdImc = paciente.querySelector(classImc);

    if(peso<0 || peso >100){
        tdImc.textContent = "Inválido";
        pesoValido = false;
    }
    if(altura<0 || altura > 3.0){
        tdImc.textContent = "Inválido";
        alturaValida = false
    }
    

    if(pesoValido && alturaValida){

        var imc =   peso / (altura ** 2);
        
        var imc = imc.toFixed(2)
        
        tdImc.textContent = imc;
    }
    
}

var totalPacientes = 5
for( i = 1; i <= totalPacientes; i++){

    calculaImc(`#paciente_${i}`,'.info_peso','.info_altura','.info_imc');

}


