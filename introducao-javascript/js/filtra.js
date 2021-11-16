var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    for (var i=0; i<pacientes.length; i++){
        var paciente = pacientes[i];
        var nomeTd = paciente.documentQuerySelector(".info_nome");
        var nome = nomeTd.textContent;

        if(nome != this.value){
            paciente.classList.add("invisivel")
        }
        else{
            paciente.classList.remove("invisivel")
        }
    }
})