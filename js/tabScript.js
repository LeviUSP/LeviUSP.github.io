// function () {
//    $("#content div:nth-child(1)").show();
//    $(".abas li:first div").addClass("selected");       
    
           
// };
document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("aba1").classList.add("selected");   
   
});


function abaClicada (elem){
  var abaAnterior = document.getElementsByClassName("selected")[0];
  if(abaAnterior != null) abaAnterior.classList.remove("selected");
  elem.classList.add("selected");

  var idDoConteudoAnterior = "conteudo_" + abaAnterior.id;
  document.getElementById(idDoConteudoAnterior).style.display = "none";

  var idDoConteudoAtual = "conteudo_" + elem.id;
  document.getElementById(idDoConteudoAtual).style.display = "block";

}
