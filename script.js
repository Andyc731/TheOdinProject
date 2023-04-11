const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('pixel');
        grid.style.padding = "20px";
        container.appendChild(grid);
        grid.addEventListener("mouseover", () => {
            grid.style.background = "black";
        })
        console.log(grid.style.padding);
    }
}


const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    const elements = document.getElementsByClassName('pixel');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    let gridSize = prompt("Please enter new grid size 1-100");
    while (isNaN(Number(gridSize)) || Number(gridSize) > 100) {
        gridSize = prompt("Please enter a number between 1-100");
    }
    console.log(Number(gridSize))
    let num = 640/Number(gridSize)/2;
    for (let i = 0; i < Number(gridSize); i++) {
        for (let j = 0; j < Number(gridSize); j++) {
            const grid = document.createElement('div');
            grid.classList.add('pixel');
            grid.style.padding = num.toString() + "px";
            container.appendChild(grid);
            grid.addEventListener("mouseover", () => {
                grid.style.background = "black";
            })
        }
    }
});