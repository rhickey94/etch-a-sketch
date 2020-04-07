const size = 50;
const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
    }   
}