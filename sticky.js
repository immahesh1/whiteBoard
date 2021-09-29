let stickyAdd = document.querySelector("#sticky-notes")


stickyAdd.addEventListener('click', function(){
    let sticky = document.createElement("div");
    sticky.classList.add("sticky")
    // <div class="sticky"></div>

    let stickyHeader = document.createElement("div")
    stickyHeader.classList.add("sticky-header")

    let minimize = document.createElement("div")
    minimize.classList.add("minimize")

    let close = document.createElement("div")
    close.classList.add("close")

    let stickyContent = document.createElement("div")
    stickyContent.classList.add("sticky-content")

    let textBox = document.createElement("textarea")
    textBox.setAttribute("class", "stickybox")
    textBox.setAttribute("rows", "10")
    textBox.setAttribute("cols", "30")

    stickyContent.appendChild(textBox)
    stickyHeader.appendChild(minimize)
    stickyHeader.appendChild(close)
    sticky.appendChild(stickyHeader)
    sticky.appendChild(stickyContent)

    document.body.appendChild(sticky)


    minimize.addEventListener('click', function(){
        textBox.style.display = textBox.style.display == "none" ? "block" : "none";
    })

    close.addEventListener('click', function(){
        sticky.remove();
    })
})