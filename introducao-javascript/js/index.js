var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Desaparecida"


function calculaImc(id,classPeso, classAltura,classImc) {
    var paciente =(document.querySelector(id));

    var peso = paciente.querySelector(classPeso).textContent;;
    
    var altura = paciente.querySelector(classAltura).textContent;
    
    var tdImc = paciente.querySelector(classImc);
    
    
    var imc =   peso / (altura ** 2);
    
    var imc = imc.toFixed(2)
    
    tdImc.textContent = imc;
    
}

var totalPacientes = 5
for( i = 1; i <= totalPacientes; i++){

    calculaImc(`#paciente_${i}`,'.info_peso','.info_altura','.info_imc');

}


