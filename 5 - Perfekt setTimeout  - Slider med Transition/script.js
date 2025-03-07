document.querySelector("button").addEventListener("click", naeste);
const slider = document.getElementById("slider");

function naeste(){
    slider.style.opacity = "0";
    let timeOut = window.setTimeout(fadeIn, 1000);

    function fadeIn(){
        slider.style.backgroundColor = "yellow";
        slider.style.opacity = "1";
    }
}