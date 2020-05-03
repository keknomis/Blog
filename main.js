var counter = 0;
var dialog = [
    "Pozdravljen/a! Moje ime je Zoran Mušič",
    "Imel sem zelo pestro življenje. Žal so me zaprli v koncentracijsko taborišče Dachau. To mi je pustilo ogromno posledic, tudi bolezni",
    "V zadnjih letih življenja mi je vid precej oslabel",
    "Za menoj je slika, a ker več ne vidim tako dobro, ne vem za katero gre. Pomagaj mi, da se spomnim",
];
//polje hotspotov na sliki
const hotspots = [
    'avtomobil', 'skupina ljudi', 'stojnica', 'antena',
    'drevo', 'žična napeljava', 'drog za ulično luč',
    'pločnik'
];

function MapClick() {
    // document.getElementById("tekst").innerHTML = dialog[counter];
    if (counter == 0) {
        let el = document.getElementById("tekst").innerHTML = "Imel sem zelo pestro življenje. Žal so me zaprli v koncentracijsko taborišče Dachau. To mi je pustilo ogromno posledic, tudi bolezni";
    }
    else if (counter == 1) {
        let el = document.getElementById("tekst").innerHTML = "V zadnjih letih življenja mi je vid precej oslabel";
    }
    else if (counter == 2) {
        let el = document.getElementById("tekst").innerHTML = "Za menoj je slika, a ker več ne vidim tako dobro, ne vem za katero gre. Pomagaj mi, da se spomnim";
    }
    counter++;
    if (counter == 3) {
        let el = document.getElementById("tekst").innerHTML = "";
        let btn = document.getElementById("skrito");
        let btn2 = document.getElementById("skrito2");
        btn.style.display = "block";
        btn2.style.display = "block";
        counter = 0;
    }
}

//vsakic ko najde element, ga odstranimo iz polja, ko je polje prazno
// redirectamo na novo stran
//Ce najde isti element ga opozorimo da je tega ez nasel
function HotspotFound(name) {
    const hotspot =

    let el=document.getElementById("tekst").innerHTML="Manjka vam še "+hotspots.length+" podrobosti";
}

