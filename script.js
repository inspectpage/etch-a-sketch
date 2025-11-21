function gridCreator(width, height){
    const container = document.querySelector(".container")
    for (let i = 0; i < height; i++){
        const divContainer = document.createElement('div')
        const newDiv = document.createElement('div');
        newDiv.style.cssText = "border: 1px solid black; margin: 0; padding: 24px";
        divContainer.appendChild(newDiv);
        container.appendChild(divContainer);
        
        for (let j = 0; j < width-1; j++){
            const newDiv = document.createElement('div');
            newDiv.style.cssText = "border: 1px solid black; margin: 0; padding: 24px";
            divContainer.appendChild(newDiv);
            newDiv.classList.add(".hover")
        }
        newDiv.classList.add(".hover")
        divContainer.style.cssText = "display: flex; justify-content: center;";
    }

}
gridCreator(16, 16)