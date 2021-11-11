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
