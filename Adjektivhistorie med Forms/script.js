let p_historie = document.querySelector("p");

// Opret to stringvariable ('let', de ændrer sig) med variabelnavnene 'navn' og 'adjektiv'.
let navn = "Gulli mulli what the fox";
let adjektiv = "snotforkælet, fed og gusten";

// Skriv historien hernede om til din egen historie:
let historie = "Der var en gang en, der hed " + navn + ". Hen gik en tur, og så straks en meget " + adjektiv + " skabning. Den sagde: " + navn + ", skal du have en på dækslet? " + navn + " sagde: Hvad sulen betyder det? Du er godt nok " + adjektiv + ".";

p_historie.innerHTML = historie;