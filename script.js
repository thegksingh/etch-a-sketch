const divContainer = document.querySelector(".grid-container");

const gridSize = 16;

const  totalGridSize = gridSize * gridSize;

let gridBackgroundColor ="#00ADB5";

for(let i = 0; i < totalGridSize; i++){
    const grid = document.createElement("div");

    grid.classList.add("grid-box")

    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = gridBackgroundColor;
    });

    divContainer.appendChild(grid);
}