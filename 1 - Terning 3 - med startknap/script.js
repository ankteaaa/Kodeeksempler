// Output:
const vistTerning = document.getElementById("terning");

// Array med strings så der kan skrives HTML:
const t1 = '<img src="images/1.svg" alt="1">';
const t2 = '<img src="images/2.svg" alt="2">';
const t3 = '<img src="images/3.svg" alt="3">';
const t4 = '<img src="images/4.svg" alt="4">';
const t5 = '<img src="images/5.svg" alt="5">';
const t6 = '<img src="images/6.svg" alt="6">';

const terning = [t1, t2, t3, t4, t5, t6];

// Funktion der vælger tilfældigt tal og putter den string ind til det billede, der passer med resultatet:
function rul(){
    let resultat = Math.floor((Math.random() * 6)+1);
    console.log(resultat);    
    switch(resultat) {
        case 1:
            vistTerning.innerHTML = terning[0];
            break;
        case 2:
            vistTerning.innerHTML = terning[1];
            break;
        case 3:
            vistTerning.innerHTML = terning[2];
            break;
        case 4:
            vistTerning.innerHTML = terning[3];
            break;
        case 5:
            vistTerning.innerHTML = terning[4];
            break;
        case 6:
            vistTerning.innerHTML = terning[5];
            break;
        default:
          alert("Der skete noget umuligt - umuligt siger jeg!");
      }
}

// Funktionskald:
rul();