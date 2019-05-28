//$(document).ready(function(){
//    $("#content div:nth-child(1)").show();
  //  $(".abas li:first div").addClass("selected");       
  //  $(".aba").click(function(){
//        $(".aba").removeClass("selected");
//        $(this).addClass("selected");
//        var indice = $(this).parent().index();
//        indice++;
//        $("#content div").hide();
//        $("#content div:nth-child("+indice+")").show();
//    });      
//    $(".aba").hover(
//        function(){$(this).addClass("ativa")},
//        function(){$(this).removeClass("ativa")}
//    );              
//});

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



function openPage(){

document.getElementById("tab1").style.visibility = "visible";
document.getElementById("tab2").style.visibility = "collapse";
document.getElementById("tab3").style.visibility = "collapse";
document.getElementById("tab4").style.visibility = "collapse";


}

function openPage2(){

  document.getElementById("tab1").style.visibility = "collapse";
  document.getElementById("tab2").style.visibility = "visible";
  document.getElementById("tab3").style.visibility = "collapse";
  document.getElementById("tab4").style.visibility = "collapse";
  
  
  }

  function openPage3(){

    document.getElementById("tab1").style.visibility = "collapse";
    document.getElementById("tab2").style.visibility = "collapse";
    document.getElementById("tab3").style.visibility = "visible";
    document.getElementById("tab4").style.visibility = "collapse";
    
    
    }
    function openPage4(){

      document.getElementById("tab1").style.visibility = "collapse";
      document.getElementById("tab2").style.visibility = "collapse";
      document.getElementById("tab3").style.visibility = "collapse";
      document.getElementById("tab4").style.visibility = "visible";
      
      
      }
        
    
  



