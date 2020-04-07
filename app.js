let size = 0;
let opacity = 0;
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

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
        let opacity = 0;
        square.addEventListener("mouseover", e => {
            let red   = getRandomInt(255);
            let green = getRandomInt(255);
            let blue  = getRandomInt(255);
            // e.target.classList.toggle("shaded");
            // let red     = 0;
            // let green   = 0;
            // let blue    = 0;
            e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity < 1 ? opacity += 0.1 : opacity = 0})`;
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