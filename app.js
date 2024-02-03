let container = document.querySelector(".container")
let button = document.querySelector(".changeSize")
let colorButton = document.querySelector(".colorMode")
let clearButton = document.querySelector(".clear")
let blackButton = document.querySelector('.blackMode')

let colorMode = 0;
let blackMode = 1;

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
    while (true) {
        if (input <= 100) break;
        else {
            input = prompt("please Enter a number between 1 and 100")
        }
    }
    removeGrid();
    createGrid(input);
    hovering();
}

createGrid(16);
hovering();

function hovering() {
    console.log(`colorMode=${colorMode} , blackMode=${blackMode}`)
    let cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        colors = ['red', 'green', 'violet', 'brown', 'darkorchid', 'pink', 'violet', 'yellow', 'orange']
        let randomColor = colors[Math.floor(Math.random() * colors.length)]

        cell.addEventListener('mouseenter', () => {

            if (!colorMode) cell.classList.add('hoverd')
            else cell.style.backgroundColor = randomColor;
        });
    });
}
function clearBlack() {
    let cells = document.querySelectorAll(".cell")
    for (const cell of cells) {
        cell.classList.remove('hoverd')
    }
}
function clearColors() {
    let cells = document.querySelectorAll(".cell")
    for (const cell of cells) {
        cell.style.backgroundColor = 'white'
    }
}

button.addEventListener('click', function () {
    console.log("button Clicked")
    changeSize();
});

colorButton.addEventListener('click', function () {
    colorMode = 1;
    blackMode = 0;
})

clearButton.addEventListener("click", () => {
    if (colorMode = 0) clearBlack()
    else clearColors()

    hovering()
})

