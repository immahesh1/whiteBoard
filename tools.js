let undo = document.querySelector("#undo")
let redo = document.querySelector("#redo")


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