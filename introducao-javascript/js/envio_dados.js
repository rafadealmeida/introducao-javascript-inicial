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

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteNovo);

    formulario.reset();
    formulario.nome.focus();

    mensagemDeErro = document.querySelector("#mensagem-erro");
    mensagemDeErro.innerHTML = "";
})

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = ""; 
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

        
    }


function validaPaciente(paciente) {
    erros = [];
    
    if(paciente.nome == 0){
        erros.push("Por favor preencha o nome do paciente")
    }
    if(!validaPeso(paciente.peso) || (paciente.peso.length == 0)){
        erros.push("Peso inválido");
    } 
    if (!validaAltura(paciente.altura) || (paciente.altura.length == 0)){
        erros.push("Altura inválido");
    }

    if (paciente.gordura == 0){
        erros.push("A gordura não pode ficar em branco")
    }
    return erros;
}
