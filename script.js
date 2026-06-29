const divContainer = document.querySelector(".grid-container");

const resetGrid = document.querySelector(".reset-grid");

const selectedColor = document.querySelector(".color-picker")

selectedColor.addEventListener("input", () =>{
    gridBackgroundColor = event.target.value
})

let gridBackgroundColor = selectedColor.value;

createGrid(16)

function createGrid(gridSize){

    const  totalGridSize = gridSize * gridSize;

    for(let i = 0; i < totalGridSize; i++){
        const grid = document.createElement("div");

        grid.style.width = `calc(100% / ${gridSize})`;
        grid.style.height = `calc(100% / ${gridSize})`;

        grid.classList.add("grid-box");

        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = gridBackgroundColor;
        });

        divContainer.appendChild(grid);
    }
}

resetGrid.addEventListener("click", () => {
    let newSize = getGridValue();
    createGrid(newSize);
});

function getGridValue(){
    divContainer.innerHTML = "";

    let gridSize = parseInt(prompt("Enter the number of squares per side for the new grid:", 16));

    if (gridSize > 100){
        gridSize = 100;
    } else if(gridSize <= 0){
        gridSize = 16;
    }
    return gridSize
}

