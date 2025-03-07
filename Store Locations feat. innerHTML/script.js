const locationContainer = document.getElementById("location");
const buttonAarhus = document.getElementById("aarhus");
const buttonRanders = document.getElementById("randers");
const buttonAalborg = document.getElementById("aalborg");

buttonAarhus.onclick = visAarhus;
buttonRanders.onclick = visRanders;
buttonAalborg.onclick = visAalborg;

function visAarhus(){
    locationContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d563999.0208664807!2d9.372317937264533!3d56.48289975200688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c4020ad2dafc9%3A0xc46d11607096a51d!2sPOWER!5e0!3m2!1sda!2sdk!4v1693309572655!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}

function visRanders(){
    locationContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.2178625623706!2d10.054374175721849!3d56.42954413966565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c1c84a975d8e7%3A0xf6d6cddf91714b64!2sPOWER!5e0!3m2!1sda!2sdk!4v1693309711334!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}

function visAalborg(){
    locationContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2172.862803519274!2d9.872216975772337!3d57.00253409504894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464933e4d28a356b%3A0x189f368cabcc3873!2sPOWER!5e0!3m2!1sda!2sdk!4v1693309752285!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}