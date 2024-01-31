let container = document.querySelector(".container")


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

createGrid(12)


let cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        // cell.style.backgroundColor = 'black'; // Change background color when mouse enters
        cell.classList.add('hoverd')
    });
});