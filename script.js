const divContainer = document.querySelector(".grid-container");

const gridSize = 16;

const  totalGridSize = gridSize * gridSize;

for(let i = 0; i < totalGridSize; i++){
    const grid = document.createElement("div");

    grid.classList.add("grid-box")
    divContainer.appendChild(grid);
}

