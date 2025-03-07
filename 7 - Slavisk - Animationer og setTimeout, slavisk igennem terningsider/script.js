const output = document.getElementById("output");
const knapNaeste = document.getElementById("naeste");
    
const terningSider = [
    '<img src="images/1.svg" alt="1">',
    '<img src="images/2.svg" alt="2">',
    '<img src="images/3.svg" alt="3">',
    '<img src="images/4.svg" alt="4">',
    '<img src="images/5.svg" alt="5">',
    '<img src="images/6.svg" alt="6">'
];
knapNaeste.addEventListener("click", naesteFlyvUd);

// Variabel til at holde styr på den viste side:
let vistSide = 1;
// Billedet der passer til, vises.
output.innerHTML = terningSider[vistSide-1];

function naesteFlyvUd(){
    // UI flyver ud og forsvinder
    output.style.animationName = "flyvUd";
    // En timer tæller ned og aktiverer en funktion:
    const myTimeout = setTimeout(myFunction, 300);


    function myFunction() {
        let naesteSide;
        if(vistSide == 6){
            vistSide = 1;
        }else{
            vistSide++;
        }
        output.innerHTML = terningSider[vistSide-1];
        output.style.animationName = "flyvInd";
    }
}
