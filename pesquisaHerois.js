

window.onload = function(){
	var nome = this.queryString("nome");
	  console.log(nome);



 	var table =document.getElementById("tab");
	var tbody = document.getElementById("tbo");
	var div = document.getElementById("power");
	var retorno = new Object();

  var request = new XMLHttpRequest();

   var url = "https://superheroapi.com/api/2195914800646269/search/" + nome;

request.open('GET', url, true);

request.open('GET', url, true);
request.onload = function () {

  var data = JSON.parse(this.response);
  retorno = data;
  if (request.status >= 200 && request.status < 400) {
  	
   tbody.innerHTML="";

  try {
        for(var i=0; i<=retorno.results.length; i++){
          tbody.innerHTML += "<tr><td> <center><img src=" +retorno.results[i].image.url + " class='imgherois'></center>" +
           "<tr><td>"+"Nome:"+retorno.results[i].name +    
           "<tr><td>"+ "Nome Real:"+retorno.results[i].biography["full-name"] +   
           "<tr><td>"+ "Alter-Ego:"+retorno.results[i].biography["alter-egos"] +   
           "<tr><td>"+ "Aliados:"+retorno.results[i].biography.aliases +   
           "<tr><td>"+ "Naturalidade:"+retorno.results[i].biography["place-of-birth"] +   
           "<tr><td>"+ "Apareceu pela primeira vez em:"+retorno.results[i].biography["first-appearance"] +   
           "<tr><td>"+ "Universo:"+retorno.results[i].biography.publisher +   
           "<tr><td>"+"Do Bem ou do Mau:"+retorno.results[i].biography.alignment+    
           "<tr><td>"+"Inteligencia: " + "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+retorno.results[i].powerstats.intelligence+"%>"+retorno.results[i].powerstats.intelligence+"</div></div>"+ 
           "<tr><td>"+"Força:"+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+retorno.results[i].powerstats.strength+"%>"+retorno.results[i].powerstats.strength+"</div></div>"+ 
           "<tr><td>"+"Velocidade:"+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+retorno.results[i].powerstats.speed+"%>"+retorno.results[i].powerstats.speed+"</div></div>"+ 
           "<tr><td>"+"Durabilidade:"+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+retorno.results[i].powerstats.durability+"%>"+retorno.results[i].powerstats.durability+"</div></div>"+ 
           "<tr><td>"+"Poder:"+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+retorno.results[i].powerstats.power+"%>"+retorno.results[i].powerstats.power+"</div></div>"+ 
           "<tr><td>"+"Combate:"+ "<div class='porcentagem porc'><div class='por cor porc' + style=width:"+retorno.results[i].powerstats.combat+"%>"+retorno.results[i].powerstats.combat+"</div></div>"+   
           "<tr><td>"+"Genero:"+retorno.results[i].appearance.gender+    
           "<tr><td>"+"Raça:"+retorno.results[i].appearance.race+    
           "<tr><td>"+"Altura:"+retorno.results[i].appearance.height+    
           "<tr><td>"+"Peso:"+retorno.results[i].appearance.weight+    
           "<tr><td>"+"Cor dos Olhos:"+retorno.results[i].appearance["eye-color"]+    
           "<tr><td>"+"Cor dos Cabelos:"+retorno.results[i].appearance["hair-color"]+    
           "<tr><td>"+"Oucupação:"+retorno.results[i].work.occupation+    
           "<tr><td>"+"Base:"+retorno.results[i].work.base+    
           "<tr><td>"+"Afiliação:"+retorno.results[i].connections["group-affiliation"]+    
           "<tr><td>"+"Parentes:"+retorno.results[i].connections.relatives+"</td></tr>";    

	     } 
  } catch (e) {
     //console.log(e);
     if (retorno.results == null) {
     	tbody.innerHTML += "<tr><td>"+"O Herói ou Vilão não foi encontrado!!! =("+"</td><td>";
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
