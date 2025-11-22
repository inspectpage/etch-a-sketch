function gridCreator(size){
    const container = document.querySelector(".container")
    container.style.cssText = "display: flex; flex-direction: column; width: 800px; height: 800px; margin: auto"
    totalBoxes = size * size
    
    let row;

    for (let i = 0; i < totalBoxes; i++){
        if (i % size == 0){
            row = document.createElement('div');
            row.classList.add("row")
            row.style.cssText = "display: flex; flex: 1";
            container.appendChild(row);
        }
        const newDiv = document.createElement('div');
        newDiv.style.cssText = "border: 2px solid black; margin: 0; flex: 1;"
        newDiv.classList.add("hover")
        newDiv.darkness = 0.10;
        row.appendChild(newDiv);

    }
}

const button = document.querySelector(".buttonClick")
button.addEventListener("click", function(){

    const userInput = prompt("Enter a Number from 1-100")
    reset()
    gridCreator(userInput)
    hoverListener()
})

function randomColor(){
    number1 = Math.floor(Math.random() * 255);
    number2 = Math.floor(Math.random() * 255);
    number3 = Math.floor(Math.random() * 255);
    let random = `rgb(${number1},${number2},${number3}, ${this.darkness})`;
    this.darkness += 0.10;
    this.style.backgroundColor = random;
}
// function resetColor(){
//     this.style.backgroundColor = "white";
// }

function reset(){
    const container = document.querySelector(".container")
    const rows = document.querySelectorAll(".row")
    rows.forEach(row =>{
        container.removeChild(row)
    })
}

function hoverListener(){
    const targets = document.querySelectorAll(".hover");
    targets.forEach(div => {
        div.addEventListener("mouseenter", randomColor)
        // div.addEventListener("mouseleave", resetColor)
    });
}

gridCreator(16)
hoverListener()

