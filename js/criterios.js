document.addEventListener("DOMContentLoaded", function(event) {
    resetarCriterios();
    localStorage.clear();
    document.getElementById("criterio-4-avaliado").style.display = "block";
});

function abrePaginaNaAbaCerta(intElemento){
    localStorage.setItem('abaInicial', "aba" + intElemento);
}

function resetarCriterios(){
    var i;
    for(i = 1; i < 5; i++){
        if(localStorage.getItem(""+i)){
            document.getElementById(localStorage.getItem(""+ i) + "-naoavaliado").style.display = "none";
            document.getElementById(localStorage.getItem(""+ i) + "-avaliado").style.display = "block";
        }
    }
}