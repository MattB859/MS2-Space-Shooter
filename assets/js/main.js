let spaceship = document.getElementById("spaceship");
let canvas = document.getElementById("canvas");

//arrow function
window.addEventListener("keydown", (e) => {

    let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
    let up = parseInt(window.getComputedStyle(spaceship).getPropertyValue("up"));

    if (e.key === "ArrowLeft" && left > 0){
        spaceship.style.left = left - 10 + "px";

    } else if (e.key === "ArrowRight" && left <= 590){
        spaceship.style.left = left + 10 + "px";
    
    } else if (e.key === "ArrowUp" && up <= 0) {
            spaceship.style.up = up - 10 + "px";

    }
});

let multiUfo = setInterval(()=>{
   
    let ufo = document.createElement("div");
    ufo.classList.add("ufo");
   // This will place the ufo's in random postions for the attack

   let ufoLeft = parseInt(window.getComputedStyle(ufo).getPropertyValue("left")
   );
   ufo.style.left = Math.floor(Math.random() * 450) + "px";

   canvas.appendChild(rock);
}, 1500);