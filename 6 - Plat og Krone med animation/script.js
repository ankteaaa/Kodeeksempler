const plat = document.getElementById("plat");
const krone = document.getElementById("krone");
const output = document.getElementById("output");
let platEllerKrone = "";// 'plat' eller 'krone'

let random = Math.floor(Math.random() * 2);
output.innerHTML = random;

if(random == 0){
    krone.style.display = "none";
    plat.style.display = "block";
    plat.style.animationName = "scaleUp";
}else if(random == 1){
    plat.style.display = "none";
    krone.style.display = "block";
    krone.style.animationName = "scaleUp";
}