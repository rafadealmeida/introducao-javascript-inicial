
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