var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Aparecida"


function calculaImc(id,classPeso, classAltura,classImc) {
    
    var pesoValido = true;
    var alturaValida = true;
    
    var paciente =(document.querySelector(id));

    var peso = paciente.querySelector(classPeso).textContent;;
    
    var altura = paciente.querySelector(classAltura).textContent;
    
    var tdImc = paciente.querySelector(classImc);

    if(peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso inválido";
        pesoValido = false;
        paciente.style.backgroundColor = 'lightcoral'
    }
    if(altura <= 0 || altura > 3.0){
        tdImc.textContent = "Altura inválido";
        alturaValida = false
        paciente.style.backgroundColor = 'lightcoral'
    }
    

    if(pesoValido && alturaValida){

        var imc =   peso / (altura ** 2);
        
        tdImc.textContent = imc.toFixed(2);
    }
    
}
var pacientes = document.querySelectorAll('.paciente');

console.log(pacientes)
for( i = 1; i <= pacientes.length; i++){

    calculaImc(`#paciente_${i}`,'.info_peso','.info_altura','.info_imc');

}


