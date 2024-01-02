const body = document.querySelector("body");

let squaresBtn = document.createElement("button");
body.appendChild(squaresBtn);
squaresBtn.textContent = "Choose how big you want the grid!";
squaresBtn.style.cssText = "margin-bottom: 50px;";

squaresBtn.addEventListener("click", pickNoOfSquares);

function pickNoOfSquares () {
    let noSquares = prompt("How many squares wide?");
    if (noSquares <= 50) {
        for (let y = 0; y <= noSquares; y++) {
            let line = document.createElement("div");
            line.classList.add("line");
            container.appendChild(line);
            for (let i = 0; i <= noSquares; i++) {
                let box = document.createElement("div");
                box.classList.add("box");
                box.addEventListener("mousedown", () => {
                    if (box.classList.contains("black")) {
                        box.classList.remove("black");
                    } else {
                        box.classList.add("black")};
                })
                line.appendChild(box);
             }
        }
    } else {
        alert("Please enter a number less than 50.");
    }
}

let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);


