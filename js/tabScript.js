document.addEventListener("DOMContentLoaded", function(event) {
	abaInicial = localStorage.getItem('abaInicial')
  
  	document.getElementById(abaInicial).classList.add("selected");
   
	var conteudos = document.getElementsByClassName("tab_content");
	
	for (i = 0; i < conteudos.length; i++){
		conteudos[i].style.display = "none";
	}

	document.getElementById("conteudo_" + abaInicial).style.display = "block";
	
});



function abrePaginaNaAbaCerta(esteElemento){
  localStorage.setItem('abaInicial', "aba" + esteElemento);

}

function abaClicada (elem){
  var abaAnterior = document.getElementsByClassName("selected")[0];
  if(abaAnterior != null) abaAnterior.classList.remove("selected");
  elem.classList.add("selected");

  var idDoConteudoAnterior = "conteudo_" + abaAnterior.id;
  document.getElementById(idDoConteudoAnterior).style.display = "none";

  var idDoConteudoAtual = "conteudo_" + elem.id;
  document.getElementById(idDoConteudoAtual).style.display = "block";

}

function complete(elem){

}
