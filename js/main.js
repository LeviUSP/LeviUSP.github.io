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
	var abaAtual = document.getElementById("aba" + intAbaAtual);
	var conteudoDaAbaAtual = document.getElementById("conteudo_" + abaAtual);

	//pop-up de finalização com sucesso
	popupFinalization(abaAtual);
	//coloca um certo na aba que foi finalizada
	putRightMarkOnDiv(abaAtual);

	//fazer o baguio passar de um form para outro na outra tela

	//armazenar os subcriterios em um localstorage

	
	
}

function putRightMarkOnDiv(abaAtual){
	//se já tiver imagem
	if(abaJaFinalizada(abaAtual)){return}
	
	//cria uma nova imagem
	var img = document.createElement("img");
	img.src = "../images/round-done-24px.svg";
	img.className="checked";
	abaAtual.appendChild(img); 
}

function abaJaFinalizada(abaAtual){
	var checkedTabs = document.getElementsByClassName("checked");
	var i;
	for(i = 0; i < checkedTabs.length; i++){
		if(checkedTabs[i].parentNode === abaAtual)
			return true;
	}
	return false;
}

function popupFinalization(abaAtual){
	if(abaJaFinalizada(abaAtual))
		createCustomAlert("Avaliação atualizada com sucesso!");
	else
		createCustomAlert("Avaliação armazenada com sucesso!");	
}


function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(txt));

   

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode("OK"));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}