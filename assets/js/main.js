let spaceship = document.getElementById("spaceship");

window.addEventListener("keydown", function(e){
    let left = window.getComputedStyle("spaceship").getPropertyValue("left");
    if (e.key = "ArrowLeft"){
        spaceship.style.left = left - 10 + "px";

    }
});