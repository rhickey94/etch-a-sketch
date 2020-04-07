let size = 0;
let opacity = 0;
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");


const generateGrid = () => {
    size = parseInt(prompt("How many squares per side?"));
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
        }   
    }
}

const addListeners = () => {
    const squares = document.querySelectorAll(".square");
    
    squares.forEach(square => {
        square.addEventListener("mouseover", e => {
            // opacity = (opacity + 10) % 255;
            // e.target.style.backgroundColor = `rgba(${opacity},${opacity},${opacity},${opacity})`;
            e.target.classList.toggle("shaded");
        });
    });
}

const reset = () => {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    generateGrid();
    addListeners();
}
resetButton.addEventListener("click", reset);

generateGrid();
addListeners();