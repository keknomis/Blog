/* javascript za prvi monolog */
var counter = 0;
const hotspots = ['skupina ljudi', 'antena', 'žična napeljava'];

//Monolog avtorja
function MapClick() {
    counter++;
    if (counter == 1) {
        let el = document.getElementById("tekst").innerHTML = "Imel sem zelo pestro življenje. Žal so me zaprli v koncentracijsko taborišče Dachau. To mi je pustilo ogromno posledic, tudi bolezni";
    }
    else if (counter == 2) {
        let el = document.getElementById("tekst").innerHTML = "V zadnjih letih življenja mi je vid precej oslabel";
    }
    else if (counter == 3) {
        let el = document.getElementById("tekst").innerHTML = "Za menoj je slika, a ker več ne vidim tako dobro, ne vem za katero gre. Pomagaj mi, da se spomnim";
    }
    //tole bi blo bolse spremenit da se kr pokaze cez sekundo 2
    if (counter == 4) {
        //ponastavimo 
        // let clearh1 = document.getElementById("naslov").innerHTML = "";
        let el = document.getElementById("tekst").innerHTML = "";
        let btn = document.getElementById("skrito");
        let btn2 = document.getElementById("skrito2");
        btn.style.display = "block";
        btn2.style.display = "block";
        counter = 0;
    }
}

function ChangeImgSrc(url) {
    $('.img').attr('src', url)
}

/* javascript iskanje predmetov */
function HotspotFound(name) {
    if (hotspots.includes(name)) {
        //če obstaja, ga zbrišemo
        hotspots.splice(hotspots.indexOf(name), 1);
        if (hotspots.length >= 1) {
            let el = document.getElementById("tekst").innerHTML = "Število neodkritih predmetov: " + hotspots.length;
        }
        
        else {
            let el = document.getElementById("tekst").innerHTML = "Čestitam odkril/a si vse predmete";
            setTimeout(function () {
                //menjamo sliko
                ChangeImgSrc('1.png');
                let el = document.getElementById("tekst").innerHTML = "A torej gre za ulični prizor! Hm ... teh sem naslikal kar nekaj. Ali morda prepoznaš to ulico? Klikni na gumb in mi pomagaj.";
                let clearh1=document.getElementById("naslov").innerHTML="";
                let clearh5 = document.getElementById("podnaslov").innerHTML = "";

                let btn3 = document.getElementById("skrito3");
                btn3.style.display = "block";
            }, 1500)
        }
    }
}


/*javascript za stran monolog2 */
let counter2=0;
function MapClick2(){
    counter2++;

    if(counter2==1){
        let el = document.getElementById("tekst").innerHTML = "Hm, me zanima kako ta ulica izgleda danes... Klikni na gumb in poišči podrobnosti";
    }  
        //premik v stran Hotmap2
        let showButton=document.getElementById("skrito2").style.display="block";
    
}

function DisplayABC() {
    let el = document.getElementById("tekst").innerHTML = "Ali prepoznaš to sliko na ulici? Lahko si pomagaš s fotografijami na naslednjih straneh";
}

