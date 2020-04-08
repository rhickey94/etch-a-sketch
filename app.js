let size = 16;
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const rainbowMode = document.querySelector("#rainbow-select");

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const getOpacity = e => {
    return parseFloat(e.target.style.backgroundColor.split(" ").pop().slice(-4, -1));
}

const setColor = e => {
    let red     = 0;
    let green   = 0;
    let blue    = 0;
    let opacity = getOpacity(e);
    e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity < 1 ? opacity += 0.1 : opacity})`;
}

const setRainbow = e => {
    let red   = getRandomInt(255);
    let green = getRandomInt(255);
    let blue  = getRandomInt(255);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const generateGrid = (size) => {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
        }   
    }
}

const addListeners = (rainbowMode) => {
    const squares = document.querySelectorAll(".square");
    if(rainbowMode === "off") {
        squares.forEach(square => {
            square.addEventListener("mouseover", setColor);
        });
    } else {
        squares.forEach(square => {
            square.addEventListener("mouseover", setRainbow);
        });
    }
}

const removeListeners = (rainbowMode) => {
    const squares = document.querySelectorAll(".square");
    if(rainbowMode === "off") {
        squares.forEach(square => {
            square.removeEventListener("mouseover", setRainbow);
        });
    } else {
        squares.forEach(square => {
            square.addEventListener("mouseover", setColor);
        });
    }
}

const reset = () => {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    size = parseInt(prompt("How many squares per side?"));
    rainbowMode.value = "off";
    generateGrid(size);
    addListeners(rainbowMode.value);
}

resetButton.addEventListener("click", reset);
rainbowMode.addEventListener("change", e => {
    removeListeners(rainbowMode.value);
    addListeners(rainbowMode.value);
})

generateGrid(size);
addListeners(rainbowMode.value);
