document.addEventListener("DOMContentLoaded", function(event) {
	abaInicial = localStorage.getItem('abaInicial')
  
  	document.getElementById(abaInicial).classList.add("selected");
   
	var conteudos = document.getElementsByClassName("tab_content");
	
	for (i = 0; i < conteudos.length; i++){
		conteudos[i].style.display = "none";
	}

	document.getElementById("conteudo_" + abaInicial).style.display = "block";
	
});



function abrePaginaNaAbaCerta(intElemento){
  localStorage.setItem('abaInicial', "aba" + intElemento);
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

function complete(intAbaAtual){
	var img = document.createElement("img");
 
	img.src = "../images/round-done-24px.svg";



	var abaAtual = document.getElementById("aba" + intAbaAtual);

	abaAtual.appendChild(img);


	//fazer o baguio passar de um form para outro na outra tela

	
}
