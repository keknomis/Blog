/* koda za slider slik*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

/*Ovrednotenje klikov (odgovora)*/
function odgovor(zastavica){
if(zastavica==true){
    let el = document.getElementById("tekst").innerHTML = "Odgovor je pravilen";
    setTimeout (function(){
        let btn3 = document.getElementById("skrito2");
        btn3.style.display = "block";
    },500)
}
else{
    let el = document.getElementById("tekst").innerHTML = "Odgovor je nepravilen";
}
}

