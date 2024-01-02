const body = document.querySelector("body");

let btnContainer = document.createElement("div");
btnContainer.classList.add("btncontainer");
body.appendChild(btnContainer);

let squaresBtn = document.createElement("button");
btnContainer.appendChild(squaresBtn);
squaresBtn.textContent = "Choose how big you want the grid!";
squaresBtn.style.cssText = "display: flex; flex: 1; padding: 30px; justify-content: center;";

let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = "display: flex; flex: 1; margin: auto; margin-top: 50px";
body.appendChild(container);

squaresBtn.addEventListener("click", pickNoOfSquares);

function pickNoOfSquares () {
    squaresBtn.remove();
    let noSquares = prompt("How many squares wide?");
    if (noSquares <= 50) {
        for (let y = 1; y <= noSquares; y++) {
            let line = document.createElement("div");
            line.classList.add("line");
            container.appendChild(line);
            for (let i = 1; i <= noSquares; i++) {
                let box = document.createElement("div");
                box.classList.add("box");
                box.addEventListener("mouseover", () => {
                    box.classList.add("black")})
                line.appendChild(box);
             }
        }
    } else {
        alert("Please enter a number less than 50.");
    }
}


