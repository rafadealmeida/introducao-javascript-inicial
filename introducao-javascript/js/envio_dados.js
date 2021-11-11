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
    var pacienteNovo = createElement.querySelector("tr");
    pacienteNovo.classList.add("paciente");

    pacienteNovo.appendChild(criarPaciente(paciente.nome, "info_nome"));
    pacienteNovo.appendChild(criarPacienteTabela(paciente.peso, "info_peso"));
    pacienteNovo.appendChild(criarPaciente(paciente.altura,"info_altura"));
    pacienteNovo.appendChild(criarPaciente(paciente.gordura, "info_gordura"));
    pacienteNovo.appendChild(criarPaciente(paciente.imc, "info_imc"));

    return pacienteNovo;
}

function criarPacienteColuna(dado, classe) {
    var coluna = document.querySelector("td");
    
    coluna.textContent = dado;

    coluna.classList.add(classe);
}
