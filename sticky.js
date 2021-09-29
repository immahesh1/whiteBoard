let stickyAdd = document.querySelector("#sticky-notes")


stickyAdd.addEventListener('click', function(){
    
    let stickyContent = createSticky();
    let textBox = document.createElement("textarea")
    textBox.setAttribute("class", "stickybox")
    textBox.setAttribute("rows", "10")
    textBox.setAttribute("cols", "30")

    stickyContent.appendChild(textBox)    
})