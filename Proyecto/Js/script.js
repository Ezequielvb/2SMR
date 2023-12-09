/*      primer script          */
/*      autor: Ezequiel Vargas */


/************** nav *****************************/

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
} 



 function redirigirAPaginaNueva() {
    window.location.href ="index2.html";
}