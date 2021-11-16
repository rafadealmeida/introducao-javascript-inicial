var tabela = document.querySelector('#tabela-pacientes');

/*tabela.addEventListener('dblclick',function(event) {
    var alvoDoEvento = event.target;//verificando aonde o double click foi, que pode ser em qualquer td da tabela.
    var paiDoAlvo = alvoDoEvento.parentNode; //com o '.parentNode' pego a partir do click o pai do alvo, que no caso seria a linha da tabela.

     var resposta = prompt('Você deseja apagar esse paciente? Responda com sim ou nao.')

     if (resposta == "sim"){
         paiDoAlvo.remove();
     }
})
*/

tabela.addEventListener("dblclick", function(evento){
    evento.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){
        evento.target.parentNode.remove();

    },500)

});
