var counter=0;
var dialog=[
    "Pozdravljen/a! Moje ime je Zoran Mušič",
    "Imel sem zelo pestro življenje. Žal so me zaprli v koncentracijsko taborišče Dachau. To mi je pustilo ogromno posledic, tudi bolezni",
    "V zadnjih letih življenja mi je vid precej oslabel",
    "Za menoj je slika, a ker več ne vidim tako dobro, ne vem za katero gre. Pomagaj mi, da se spomnim",
];
function MapClick(){
    // document.getElementById("tekst").innerHTML = dialog[counter];
    if(counter==0){
        let el=document.getElementById("tekst").innerHTML="Zdravo moje ime je Zoran";
    }
    else if(counter==1){
        let el=document.getElementById("tekst").innerHTML="Moje zivljenje ni bilo lahko bilo je tesko";
    }
    else if(counter==2){
        let el=document.getElementById("tekst").innerHTML="Zivel sem tu in tam";     
    }
    counter++;

    if(counter == 3){
        let btn=document.getElementById("skrito");
        btn.style.display="block";      
        counter=0;
    }

    console.log(counter);  
}

function ContinueToNewPage(){
    
}