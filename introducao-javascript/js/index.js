var titulo = document.querySelector(".titulo");
			
titulo.textContent = "Nutrição Aparecida"


function calculaImc(id,classPeso, classAltura,classImc) {
    
    var pesoValido = true;
    var alturaValida = true;

    var paciente =(document.querySelector(id));

    var peso = paciente.querySelector(classPeso).textContent;;
    
    var altura = paciente.querySelector(classAltura).textContent;
    
    var tdImc = paciente.querySelector(classImc);

    if(i%2==0){

        paciente.classList.add("linhaPar")
        
    }

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

        var imc =   peso / (altura ** 2);
        
        tdImc.textContent = imc.toFixed(2);
    }
    
}
var pacientes = document.querySelectorAll('.paciente');


for( i = 1; i < pacientes.length; i++){

    calculaImc(`#paciente_${i}`,'.info_peso','.info_altura','.info_imc');

}

function acoesMouse(evento) {
    
}
titulo.addEventListener('click', mostraMensagem);

function mostraMensagem() {
    console.log( "Olá , fui clicado!")
}

var botaoAdicionar = document.querySelector ('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(){
    alert('Você clicou!')
})