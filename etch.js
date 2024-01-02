const body = document.querySelector("body");

let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

for (let y = 0; y <= 16; y++) {
    let line = document.createElement("div");
    line.classList.add("line");
    container.appendChild(line);
    for (let i = 0; i <= 16; i++) {
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

