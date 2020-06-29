/* javascript za prvi monolog */
var counter = 0;
const hotspots = ['skupina ljudi', 'spomenik', 'žična napeljava'];

/*javascript iskanje predmetov za stran Hostspot2 */
function HotspotFound(name,id) {

    // $(id).css("text-decoration","line-through");
    document.getElementById(id).style.textDecoration="line-through";

    if (hotspots.includes(name)) {
        hotspots.splice(hotspots.indexOf(name), 1);
        if (hotspots.length >= 1) {
          
        }
        
        else {
            let el = document.getElementById("tekst").innerHTML = "Čestitam odkril/a si vse predmete";
            setTimeout(function () {
                //menjamo sliko
                $('.img').attr('src', 'zorantrgsvb.png')
                let el = document.getElementById("tekst")
                .innerHTML = "Kako zanimovo! Kakšne pa so razlike med preteklo in današnjo podobo te ulice? Brez skrbi, "+
                 "spomin si lahko osvežiš v spodnjem desnem kotu, kjer sta sličici moje slike Ulica in pa fotografija aleksandrove ceste nekoč. "+
                 "S klikom nanju ju povečaš.";

                let clearHotspot1=document.getElementById("hotspot1").innerHTML="";
                let clearHotspot2=document.getElementById("hotspot2").innerHTML="";
                let clearHotspot3=document.getElementById("hotspot3").innerHTML="";
                let clearh1 = document.getElementById("naslov").innerHTML = "";

                let btn3 = document.getElementById("skrito3");
                btn3.style.display = "block";
            }, 1500)
        }
    }
}

