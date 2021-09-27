let pencil = document.querySelector("#pencil")
let eraser = document.querySelector("#eraser")
let undo = document.querySelector("#undo")
let redo = document.querySelector("#redo")
let clear = document.querySelector("#clear")

let pencilOptions = document.querySelector("#pencil-options")
let eraserOptions = document.querySelector("#eraser-options")

let pencilSize = document.querySelector("#pencilSize")
let eraserSize = document.querySelector("#eraserSize")

let pencilColor = document.querySelectorAll(".pencil-colours div")
//[<div class="red"></div> <div class="yellow"></div> ...]
for(let i=0; i<pencilColor.length; i++){
    pencilColor[i].addEventListener('click', function(){
        if(pencilColor[i].classList.contains("red"))
            ctx.strokeStyle = "red"
        else if(pencilColor[i].classList.contains("blue"))
            ctx.strokeStyle = "blue"
        else if(pencilColor[i].classList.contains("yellow"))
            ctx.strokeStyle = "yellow"
        else
            ctx.strokeStyle = "black"
    })
}

// global variable for size of pencil and eraser
let pencilWidth = 1
let eraserWidth = 1

pencilSize.addEventListener('change', function(e){
    let size = e.target.value;
    pencilWidth = size
    ctx.lineWidth = pencilWidth
})

eraserSize.addEventListener('change', function(e){
    let size = e.target.value;
    eraserWidth = size
    ctx.lineWidth = eraserWidth
})

let activeTool = 'pencil'


// clear full screen
clear.addEventListener('click',function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pointsDB = []
})

pencil.addEventListener('click',function(){
    if(!pencil.classList.contains("active-tool")){ //1st click : activate if not
        eraserOptions.classList.add("hide")
        eraser.classList.remove("active-tool")
        pencil.classList.add("active-tool")
        ctx.strokeStyle = "black";
        ctx.lineWidth = pencilWidth
    }else if(pencilOptions.classList.contains("hide")){ // 2md click : if options hidden, unhide it
        pencilOptions.classList.remove("hide")
    }else{ // 3rd click : hide options
        pencilOptions.classList.add("hide")
    }
})

eraser.addEventListener('click', function(){
    if(!eraser.classList.contains("active-tool")){
        pencilOptions.classList.add("hide")
        pencil.classList.remove("active-tool")
        eraser.classList.add("active-tool")
        ctx.strokeStyle = "white";
        ctx.lineWidth = eraserWidth
    }else if(eraserOptions.classList.contains("hide")){
        eraserOptions.classList.remove("hide")
    }else{
        eraserOptions.classList.add("hide")
    }
})


undo.addEventListener('click', function(){
    if(pointsDB.length){
        // using stack functionality
        // 1. remove last line
        let lastLine = pointsDB.pop();
        redoStack.push(lastLine);
        // 2. clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 3. draw rest of the lines
        drawPoints();
    }
});

redo.addEventListener('click',function(){
    if(redoStack.length){
        let topLine = redoStack.pop();
        if(topLine.length)
            pointsDB.push(topLine)
        if(topLine.length > 0){
            for(let i=0; i<topLine.length; i++){
                let x = topLine[i].x;
                let y = topLine[i].y;
                ctx.strokeStyle = topLine[i].strokeStyle
                ctx.lineWidht = topLine[i].lineWidht
                if(topLine[i].id == "md"){
                    ctx.beginPath();
                    ctx.moveTo(x,y);
                }else{
                    ctx.lineTo(x,y);
                    ctx.stroke();
                }
            }
        }
    }
})

function drawPoints(){
    for(let i=0; i<pointsDB.length; i++){
        let line = pointsDB[i]
        if(line.length > 0){
            for(let j = 0; j<line.length; j++){
                let x = line[j].x;
                let y = line[j].y;
                ctx.strokeStyle = line[j].strokeStyle
                ctx.lineWidht = line[j].lineWidht
                if(line[j].id == 'md'){
                    ctx.beginPath();
                    ctx.moveTo(x,y);
                }else{
                    ctx.lineTo(x,y);
                    ctx.stroke();
                }
            }
        }
    }
}