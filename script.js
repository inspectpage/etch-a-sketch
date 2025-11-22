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


