function captarDados (formulario){
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImcInput(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function calculaImcInput(peso,altura) {
   var imc = 0;

   imc = peso /( altura ** 2);

   return imc.toFixed(2);
}

function criarPacienteTabela(paciente) {
    var pacienteNovo = document.createElement("tr");
    pacienteNovo.classList.add("paciente");
    

    pacienteNovo.appendChild(criarPacienteColuna(paciente.nome, "info_nome"));
    pacienteNovo.appendChild(criarPacienteColuna(paciente.peso, "info_peso"));
    pacienteNovo.appendChild(criarPacienteColuna(paciente.altura,"info_altura"));
    pacienteNovo.appendChild(criarPacienteColuna(paciente.gordura, "info_gordura"));
    pacienteNovo.appendChild(criarPacienteColuna(paciente.imc, "info_imc"));

    return pacienteNovo;
}

function criarPacienteColuna(dado, classe) {
    var coluna = document.createElement("td");
    
    coluna.textContent = dado;

    coluna.classList.add(classe);

    return coluna;
}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(evento){
    evento.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    var paciente = captarDados(formulario);

    var pacienteNovo = criarPacienteTabela(paciente);

    if(!validaPaciente(paciente)){
        console.log("Paciente Invalido");
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteNovo);

    formulario.reset();
    formulario.nome.focus();
})

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso)){
        return true;
    } else {
        return false;
    }
        
    if(validaAltura(paciente.altura)){
        return true;
    } else {
        return false;
        }
}