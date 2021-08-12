let spaceship = document.getElementById("spaceship");
let gameWindow = document.getElementById("gameWindow");

//arrow function
window.addEventListener("keydown", function gameStart(e) {

    let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));

    if (e.key === "ArrowLeft" && left > 0) {
        spaceship.style.left = left - 10 + "px";

    } else if (e.key === "ArrowRight" && left <= 590) {
        spaceship.style.left = left + 10 + "px";
    }
})
window.addEventListener("keyup", (e) => {

    let up = parseInt(window.getComputedStyle(spaceship).getPropertyValue("top"));

    if (e.key == "ArrowUp" && up > 0) {
        spaceship.style.up = up + 50 + "px";

    } else if (e.key == "ArrowUP" && up <= 890) {
        spaceship.style.up = up - 10 + "px";

    }

});

let generatealiens = setInterval(() => {

    let alien = document.createElement("div");
    alien.classList.add("aliens");

    // This will place the ufo's in random postions for the attack..
    let alienleft = parseInt(
        window.getComputedStyle(alien).getPropertyValue("left")
    );
    alien.style.left = Math.floor(Math.random() * 590) + "px";

    gameWindow.appendChild(alien);
}, 1500);

let movealiens = setInterval(() => {

    let aliens = document.getElementsByClassName("aliens");

    if (aliens != undefined) {
        for (let i = 0; i < aliens.length; i++) {
            /* This will increase the top of each alien ufo, so that t
            he ufos can move downwards*/
            
            let alien = aliens[1];
            let alientop = parseInt(
                window.getComputedStyle(alien).getPropertyValue("top")
            );

            alien.style.top = alientop + 20 + "px";
        }
    }
}, 450);