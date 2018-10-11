function consultar(){

var passaValor= function(valor){
    window.location = "pages/search.html?nome="+valor;
}
 passaValor(document.getElementById('nomeHeroi').value);
}



