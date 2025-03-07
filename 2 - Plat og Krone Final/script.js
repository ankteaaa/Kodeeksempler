const krone = document.getElementById("krone");
const plat = document.getElementById("plat");
const output = document.getElementById("output");
const startButton = document.querySelector("button");
let counter = 99;
let sideKrone;
let timer;
output.innerHTML = "";

startButton.onclick = function(){
    randomPlusTimerstart();
}

/* 
Der vælges et tilfældigt tal, som der tælles ned fra. 
Da tallet er tilfældigt vil det også enten være lige eller ulige.
Derfor vil mønten lige som i virkeligheden ramme på en af to tilfældige sider.
*/
function randomPlusTimerstart(){
    output.innerHTML = "";
    counter = Math.floor(Math.random() * 10);
    sideKrone = false;
    /* Nedtælling. Den tæller ned fra det tilfældige tal som max. */
    timer = window.setInterval(countdown, 1000);
}

function countdown(){
    console.log("Tallet er: " + counter);
    
    if(counter > 0 && sideKrone == false){
        counter--;
        sideKrone = true;
        rotateKrone();
    }else if(counter > 0 && sideKrone == true){
        counter--;
        sideKrone = false;
        rotatePlat();
    }else if(counter == 0 && sideKrone == true){
        output.innerHTML = ("Det blev krone!");
        krone.style.animationName = "showResult";
        clearInterval(timer);
    }else if(counter == 0 && sideKrone == false){
        output.innerHTML = ("Det blev plat!");
        plat.style.animationName = "showResult";
        clearInterval(timer);
    }
}

function rotatePlat(){
    krone.style.display = "none";
    
    plat.style.display = "block";
    plat.style.animationName = "rotateCoin";

}

function rotateKrone(){
    plat.style.display = "none";
    
    krone.style.display = "block";
    krone.style.animationName = "rotateCoin";

}