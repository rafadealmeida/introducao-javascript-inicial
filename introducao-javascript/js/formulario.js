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
    pacienteAdd.classList.add("paciente");
    
    pacienteAdd.appendChild(criaTd(paciente.nome,"info_nome"))
    pacienteAdd.appendChild(criaTd(paciente.peso,"info_peso"))
    pacienteAdd.appendChild(criaTd(paciente.altura,"info_altura"))
    pacienteAdd.appendChild(criaTd(paciente.gordura,"info_gordura"))
    pacienteAdd.appendChild(criaTd(paciente.imc,"info_imc")
    )
    
    return pacienteAdd;
}

function criaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function calculaImcInput(peso, altura) {
    var imc =  0;

    imc = peso /( altura**2);

    return imc.toFixed(2);
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

