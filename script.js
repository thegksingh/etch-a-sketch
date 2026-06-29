const divContainer = document.querySelector(".grid-container");

const resetGrid = document.querySelector(".reset-grid");

const erase = document.querySelector(".erase");

const clear = document.querySelector(".clear");

const selectedColor = document.querySelector(".color-picker");

const opacity = document.querySelector(".opacity")

let opacityMode = false;

selectedColor.addEventListener("input", (event) =>{
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

        grid.dataset.passes = 0;

        grid.addEventListener("mouseenter", () => {
            if (opacityMode === true){
                let passes = Number(grid.dataset.passes);
                if (passes < 10){
                    passes++;
                    grid.dataset.passes = passes;
                }
                grid.style.backgroundColor = gridBackgroundColor;
                grid.style.opacity = passes * 0.1;
            } else {
                grid.style.backgroundColor = gridBackgroundColor;
                grid.style.opacity = 1;
                grid.dataset.passes = 10;
            }

        })

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

erase.addEventListener("click", eraseGrid);

function eraseGrid (){
    gridBackgroundColor = "white";
}

clear.addEventListener("click", clearGrid);

function clearGrid(){
    const gridBox = document.querySelectorAll(".grid-box");
    gridBox.forEach((box) => {
        box.style.backgroundColor = "";
    });
}

opacity.addEventListener("click", () => {
    opacityMode = true;
});