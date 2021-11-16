var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    for (var i=0; i<pacientes.length; i++){
        paciente = pacientes[i];
        var nomeTd = paciente.documentquerySelector(".info_nome");
        var nome = paciente.textContent;
    }
})