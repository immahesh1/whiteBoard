function createSticky(){

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

    stickyHeader.appendChild(minimize)
    stickyHeader.appendChild(close)
    sticky.appendChild(stickyHeader)
    sticky.appendChild(stickyContent)

    document.body.appendChild(sticky);

    let initialX;
    let initialY;
    let isStickyHold = false;

    stickyHeader.addEventListener('mousedown', function(e){
        isStickyHold = true;
        initialX = e.clientX;
        initialY = e.clientY
    })

    stickyHeader.addEventListener('mousemove', function(e){
        if(isStickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;

            let dy = finalY - initialY;
            let dx = finalX - initialX;

            let {top, left} = sticky.getBoundingClientRect();

            sticky.style.top = top + dy + "px";
            sticky.style.left = left + dx + "px";

            initialX = finalX;
            initialY = finalY;
            // console.log(initialX);
            // console.log(initialY);
            // console.log(isStickyHold);
        }
    })

    stickyHeader.addEventListener('mouseup', function(e){
        isStickyHold = false;
    })

    minimize.addEventListener('click', function(){
        stickyContent.style.display = stickyContent.style.display == "none" ? "block" : "none";
    })
    

    close.addEventListener('click', function(){
        sticky.remove();
    })




    return stickyContent;
}