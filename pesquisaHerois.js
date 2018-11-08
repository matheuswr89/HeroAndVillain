window.onload = function(){
	var nome = this.queryString("nome");
 	var element = document.getElementById('element');
 	var power = document.getElementById('power');
  var pesquisa = document.getElementById('pesquisa');	

  var request = new XMLHttpRequest();
  
request.open('GET', 'http://www.superheroapi.com/api.php/2195914800646269/search/' + nome , true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
  	
   pesquisa.innerHTML="";
    
  	element.innerHTML +="<h2>resultados para " +nome+"</h2>";
  	power.innerHTML +="Resultados para " +nome;

  try {
        for(var i=0; i<=data.results.length; i++){
          pesquisa.innerHTML += " <center><img src=" +data.results[i].image.url + " class='imgherois'></center>" +
           ""+"Nome: " +data.results[i].name +    
           "<br>"+ "Nome Real: " +data.results[i].biography["full-name"] +   
           "<br>"+ "Alter-Ego: " +data.results[i].biography["alter-egos"] +   
           "<br>"+ "Aliados: " +data.results[i].biography.aliases +   
           "<br>"+ "Naturalidade: " +data.results[i].biography["place-of-birth"] +   
           "<br>"+ "Apareceu pela primeira vez em: " +data.results[i].biography["first-appearance"] +   
           "<br>"+ "Universo: " +data.results[i].biography.publisher +   
           "<br>"+"Do Bem ou do Mau: " +data.results[i].biography.alignment+    
           "<br>"+"Inteligencia: " + "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+data.results[i].powerstats.intelligence+"%>"+data.results[i].powerstats.intelligence+"</div></div>"+ 
           "<br>"+"Força: "+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+data.results[i].powerstats.strength+"%>"+data.results[i].powerstats.strength+"</div></div>"+ 
           "<br>"+"Velocidade: "+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+data.results[i].powerstats.speed+"%>"+data.results[i].powerstats.speed+"</div></div>"+ 
           "<br>"+"Durabilidade: "+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+data.results[i].powerstats.durability+"%>"+data.results[i].powerstats.durability+"</div></div>"+ 
           "<br>"+"Poder: "+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+data.results[i].powerstats.power+"%>"+data.results[i].powerstats.power+"</div></div>"+ 
           "<br>"+"Combate: "+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+data.results[i].powerstats.combat+"%>"+data.results[i].powerstats.combat+"</div></div>"+   
           "<br>"+"Genero: " +data.results[i].appearance.gender+    
           "<br>"+"Raça: " +data.results[i].appearance.race+    
           "<br>"+"Altura: " +data.results[i].appearance.height+    
           "<br>"+"Peso: " +data.results[i].appearance.weight+    
           "<br>"+"Cor dos Olhos: " +data.results[i].appearance["eye-color"]+    
           "<br>"+"Cor dos Cabelos: " +data.results[i].appearance["hair-color"]+    
           "<br>"+"Oucupação: " +data.results[i].work.occupation+    
           "<br>"+"Base: " +data.results[i].work.base+    
           "<br>"+"Afiliação: " +data.results[i].connections["group-affiliation"]+    
           "<br>"+"Parentes: " +data.results[i].connections.relative;    

	     } 
  } catch (e) {
     //console.log(e);
     if (data.results == null) {
     	pesquisa.innerHTML += ""+"O Herói ou Vilão não foi encontrado!!! =(";
     }
    return undefined;
  }


  } else {
    console.log('error');
  }

}
  request.send();

}

// função pra ler querystring
function queryString(parameter) {  
              var loc = location.search.substring(1, location.search.length);   
              var param_value = false;   
              var params = loc.split("&");   
              for (i=0; i<params.length;i++) {   
                  param_name = params[i].substring(0,params[i].indexOf('='));   
                  if (param_name == parameter) {                                          
                      param_value = params[i].substring(params[i].indexOf('=')+1)   
                  }   
              }   
              if (param_value) {   
                  return param_value;   
              }   
              else {   
                  return undefined;   
              }   
        }
