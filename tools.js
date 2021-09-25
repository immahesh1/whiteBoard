let pencil = document.querySelector("#pencil")
let ereaser = document.querySelector("#ereaser")
let undo = document.querySelector("#undo")
let redo = document.querySelector("#redo")

ctx.lineWidth = 20;

pencil.addEventListener('click',function(){
    if(!pencil.classList.contains("active-tool")){
        ereaser.classList.remove("active-tool")
        pencil.classList.add("active-tool")
        ctx.strokeStyle = "black";
    }
})

ereaser.addEventListener('click', function(){
    if(!ereaser.classList.contains("active-tool")){
        pencil.classList.remove("active-tool")
        ereaser.classList.add("active-tool")
        ctx.strokeStyle = "white";
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