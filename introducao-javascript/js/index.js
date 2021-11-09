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


for( i = 1; i <= pacientes.length; i++){

    calculaImc(`#paciente_${i}`,'.info_peso','.info_altura','.info_imc');

}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    var nome = formulario.nome.value;        
    var altura = formulario.altura.value;        
    var peso = formulario.peso.value;        
    var gordura = formulario.gordura.value;        
     
    var pacienteAdd = document.createElement("tr");
    
    var nomeAdd = document.createElement("td");
    var pesoAdd = document.createElement("td");
    var alturaAdd = document.createElement("td");
    var gorduraAdd = document.createElement("td");
    var imcAdd = document.createElement("td");

    nomeAdd.textContent = nome;     
    pesoAdd.textContent = peso;
    alturaAdd.textContent = altura;
    gorduraAdd.textContent = gordura;

    pacienteAdd.appendChild(nomeAdd)
    pacienteAdd.appendChild(pesoAdd)
    pacienteAdd.appendChild(alturaAdd)
    pacienteAdd.appendChild(gorduraAdd)
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteAdd);



})