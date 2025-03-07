// CART
// User Interface:
const btn_tilfoejKurv = document.getElementById("tilfoejKurv");
const drink_farverig = document.getElementById("drink_farverig");
const aside_cart = document.querySelector("aside ul"); 
const p_totalPris = document.querySelector("aside p#totalPris");

// VARIABLE:
let cart_produkt = [];
let cart_pris = [];
let cartIndhold = "";

// EVENT LISTENER OG HANDLER:
btn_tilfoejKurv.onclick = foejTilKurv;

function foejTilKurv(){
    // ARRAY MED PRODUKTER:
    // Føj produktteksten til arrayet med tekst:
    cart_produkt.push(drink_farverig.getAttribute('data-navn'));
    
    // ARRAY MED PRISER:
    // Føj prisen til arrayet med priser:
    let prisForProdukt = parseInt(drink_farverig.getAttribute('data-pris'));
    cart_pris.push(prisForProdukt);

    // OPDATER UI TIL CART:
    // Hent cartIndhold og tilføj det nye produkt og pris: 
    cartIndhold = cartIndhold + "<li>"+cart_produkt[0]+"      "+ cart_pris[0] + "kr." + "</li>";
    // Skriv stringen 'cartIndhold' i aside_cart:
    aside_cart.innerHTML = cartIndhold;

    // For-loop regner det hele sammen fra cart_pris:
    let samletPris = 0;
    for(i=0; i < cart_pris.length ; i++){
            samletPris += cart_pris[i];   
    }
    p_totalPris.innerHTML = samletPris;   
    
} // end function foejTilKurv

// BURGERKNAP OG BURGERMENU - yum:
const burger = document.getElementById("burger");
const hiddenMenu = document.getElementById("hiddenMenu");

burger.onclick = toggleMenu;
let menuVisible = false;

function toggleMenu(){
    if(menuVisible == false){
        console.log("Vis menuen!");
        menuVisible = true;
        hiddenMenu.style.opacity = "1";
    }else{
        console.log("Skjul menuen");
        menuVisible = false;
        hiddenMenu.style.opacity = "0";
    }
}