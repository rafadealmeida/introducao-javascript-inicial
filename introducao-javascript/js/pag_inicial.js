var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info_peso").textContent;

    var altura = paciente.querySelector(".info_altura").textContent;

    var tdImc = paciente.querySelector(".info_imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = 0
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura ** 2);

    return imc.toFixed(2);

}

