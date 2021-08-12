let spaceship = document.getElementById("spaceship");
let gameWindow = document.getElementById("gameWindow");

//arrow function
window.addEventListener("keydown", (e) => {

    let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
    
    if (e.key === "ArrowLeft" && left > 0){
        spaceship.style.left = left - 10 + "px";

    } else if (e.key === "ArrowRight" && left <= 590){
        spaceship.style.left = left + 10 + "px";  
    } 
})
window.addEventListener("keyup", (e) => {

    let up = parseInt(window.getComputedStyle(spaceship).getPropertyValue("up"));

    if (e.key == "ArrowUp" && up > 0) {
        spaceship.style.up = up + 50 + "px";

}  else if (e.key == "ArrowUP" && up <= 890){
    spaceship.style.up = up - 10 + "px";

} 
    
});

let generaterocks = setInterval(()=> {
   
    let rock = document.createElement("div");
    rock.classList.add("rocks");

   // This will place the ufo's in random postions for the attack..
   let rockleft = parseInt(
    window.getComputedStyle(rocks).getPropertyValue("left")
   );
   rocks.style.left = Math.floor(Math.random() * 590) + "px";

   canvas.appendChild(rocks);
}, 1500);