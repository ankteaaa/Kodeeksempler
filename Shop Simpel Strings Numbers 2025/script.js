// VARIABLE:
let samletPris = 0;
let produktNavne = "";

// FUNKTIONER:
function handleButtonClick(event){
    const klikketKnap = event.target;
    // Tilføj data-pris til samletPris
    console.log(event.target);
}

// EVENT LISTENERS:
document.querySelector("div#oel button").onclick = handleButtonClick;

// Funktion der kaldes af alle knapper:
// Det her er mere effektivt, men vi skal så også lære:
// - Parameter i event listener
// - event.target
// - arrow functions
/*
function handleButtonClick(event) {
    // Get the button that was clicked
    const button = event.target;
    // Perform some action
    console.log(`Button ${button.id} clicked!`);
}
*/

// Tilføj event listeners til alle knapper:
// Det her er mere effektivt, men vi skal så også lære:
// - querySelectorAll
// - forEach
// - arrow functions
/*
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
*/
