function obterDados(formulario) {
    var paciente = {
        nome:formulario.nome.value,
        altura:formulario.altura.value,
        peso:formulario.peso.value,
        gordura:formulario.gordura.value,
        imc: calculaImcInput(formulario.peso.value, formulario.altura.value)

    }
    return paciente;
}

function criaTr(paciente) {
    var pacienteAdd = document.createElement("tr");
    
    var nomeAdd = document.createElement("td");
    var pesoAdd = document.createElement("td");
    var alturaAdd = document.createElement("td");
    var gorduraAdd = document.createElement("td");
    var imcAdd = document.createElement("td");

    nomeAdd.textContent = paciente.nome;     
    pesoAdd.textContent = paciente.peso;
    alturaAdd.textContent = paciente.altura;
    gorduraAdd.textContent =paciente.gordura;
    imcAdd.textContent = calculaImcInput(paciente.peso,paciente.altura) 

    pacienteAdd.appendChild(nomeAdd)
    pacienteAdd.appendChild(pesoAdd)
    pacienteAdd.appendChild(alturaAdd)
    pacienteAdd.appendChild(gorduraAdd)
    pacienteAdd.appendChild(imcAdd)

    return pacienteAdd;
}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

   var paciente = obterDados(formulario);

   var pacienteAdd = criaTr(paciente);
   
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteAdd);



})

function calculaImcInput(peso, altura) {
    var imc =  0;

    imc = peso /( altura**2);

    return imc.toFixed(2);
}
