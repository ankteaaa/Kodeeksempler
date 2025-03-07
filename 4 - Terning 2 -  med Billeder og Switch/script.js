const vistTerning = document.getElementById("terning");

function rul(){
    let resultat = Math.floor(Math.random() * 6) + 1;
    switch(resultat) {
        case 1:
            vistTerning.innerHTML = '<img src="images/1.svg" alt="1">';
            break;
        case 2:
            vistTerning.innerHTML = '<img src="images/2.svg" alt="2">';
            break;
        case 3:
            vistTerning.innerHTML = '<img src="images/3.svg" alt="3">';
            break;
        case 4:
            vistTerning.innerHTML = '<img src="images/4.svg" alt="4">';
            break;
        case 5:
            vistTerning.innerHTML = '<img src="images/5.svg" alt="5">';
            break;
        case 6:
            vistTerning.innerHTML = '<img src="images/6.svg" alt="6">';
            break;
        default:
          alert("WTF?!??");
      }
}

rul();