const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let {top : topOffset} = canvas.getBoundingClientRect() // tools ka height mange krne ke liye
canvas.height = window.innerHeight - topOffset
canvas.width = window.innerWidth

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight - topOffset
    canvas.width = window.innerWidth
    drawPoints()
})

var isPenDown = false;
let pointsDB = []
let redoStack = []
let line = [] // each line will contain id, x and y

canvas.addEventListener("mousedown", function(e){
    if(redoStack.length){
        redoStack = []
    }
    isPenDown = true;
    var x = e.clientX;
    var y = e.clientY - topOffset;
    ctx.beginPath();
    ctx.moveTo(x,y);

    let point = {
        id : "md",
        x : x,
        y : y
    }
    line.push(point);
})

canvas.addEventListener("mousemove", function(e){
    if(isPenDown){
        let x = e.clientX;
        let y = e.clientY - topOffset;
        ctx.lineTo(x,y);
        ctx.stroke();
        let point = {
            id : "mm",
            x : x,
            y : y
        }
        line.push(point);
    }
})

canvas.addEventListener("mouseup", function(e){
    isPenDown = false;
    pointsDB.push(line);
    console.log(pointsDB);
    line = []; // making line empty for next line
})

