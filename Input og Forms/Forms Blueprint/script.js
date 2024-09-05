/* Forbundet og virker :)*/

/* Det her suger værdien ud af tekstfeltet: */
let besked = document.getElementById("besked");
let output = document.getElementById("output");
const button = document.getElementById("button");


button.addEventListener("click", visTumpetTekst )

function visTumpetTekst(){
   output.innerHTML = besked.value; 
}