let container = document.querySelector(".container")
let button = document.querySelector(".changeSize")
function createCell() {
    const div = document.createElement("div")
    div.classList.add('cell')
    container.appendChild(div)
}

function createGrid(numberOfSquares) {
    container.style.setProperty('--grid-size', numberOfSquares)
    for (let i = 0; i < numberOfSquares; i++) {
        for (let j = 0; j < numberOfSquares; j++) {
            createCell(numberOfSquares);
        }
    }
}

function removeGrid() {
    let cells = document.querySelectorAll(".cell")
    for (const cell of cells) {
        container.removeChild(cell)
    }
}

function changeSize() {
    let input = prompt("What is the size you want??")
    removeGrid()
    createGrid(input);
    let cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('hoverd')
        });
    });
}

createGrid(16)
let cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('hoverd')
    });
});

button.addEventListener('click', function () {
    console.log("button Clicked")
    changeSize();
});



