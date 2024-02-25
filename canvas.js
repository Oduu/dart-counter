let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius1 = Math.min(canvas.width, canvas.height) * 0.48;
var radius = Math.min(canvas.width, canvas.height) * 0.4;
var circumference = Math.PI * 2;

function onClickHandler(element, value) {
	// Listen for mouse moves
	canvas.addEventListener('click', function(event) {
	  // Check whether point is inside circle
	  if (ctx.isPointInPath(element, event.offsetX, event.offsetY)) {
	  	console.log(value)
	  }
	});
}

// x, y = coordinates to draw
// width/height = size of object
// c.fillRect(x, y, width, height);
// c.fillRect(100, 100, 100, 100);

// Black Border
ctx.beginPath();
ctx.arc(centerX, centerY, radius1, 0, circumference);
ctx.fill();
ctx.closePath();



// Tan Singles
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, circumference);
ctx.fillStyle = "tan";
ctx.fill();
ctx.closePath();

// Black Singles
// ctx.beginPath();
// ctx.arc(centerX, centerY, canvas.height / 2.65, 0, circumference);
// ctx.fillStyle = "black";
// ctx.fill();
// ctx.closePath();

// Doubles Line
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, circumference);
ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

// Triples Line
ctx.beginPath();
ctx.arc(centerX, centerY, radius / 2, 0, circumference);
ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.stroke();

ctx.closePath();

// Divider Lines
function drawDividerLines() {
    for (var angle = 9; angle <= 360; angle += 18) {
        var radians = angle * (Math.PI / 180);
        var endX = centerX + radius * Math.cos(radians);
        var endY = centerY + radius * Math.sin(radians);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = 5;
        ctx.stroke();
    }
}

drawDividerLines()

// Single Bull
const singleBull = new Path2D();
singleBull.arc(centerX, centerY, canvas.height / 20, 0, circumference);
ctx.fillStyle = "green";
ctx.fill(singleBull);
onClickHandler(singleBull, "You clicked 25")

// Double Bull
ctx.beginPath();
ctx.arc(centerX, centerY, canvas.height / 45, 0, circumference);
ctx.fillStyle = "red"
ctx.fill();
ctx.closePath();



