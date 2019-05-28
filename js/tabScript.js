document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("aba1").classList.add("selected");
   
   var conteudos = document.getElementsByClassName("tab_content");
   
   for (i = 0; i < conteudos.length; i++){
	   conteudos[i].style.display = "none";
   }

   document.getElementById("conteudo_aba1").style.display = "block";
   
});



function abrepaginanaabacerta(esteElemento){
  var idDaAba = "aba" + esteElemento.numeroDeID;
  // vai pra pagina "avaliaçao"
  document.getElementById(idDaAba).classList.add("selected"); 

  document.getElementById("conteudo_"+idDaAba).style.display = "block";

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
