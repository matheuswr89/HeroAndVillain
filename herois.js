function consultar(){

var passaValor= function(valor){
    window.location = "pages/search.html?nome="+valor;
}
 passaValor(document.getElementById('nomeHeroi').value);
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    	var passaValor= function(valor){
    		window.location = "pages/search.html?nome="+valor;
		}
		passaValor(document.getElementById('nomeHeroi').value);
});

