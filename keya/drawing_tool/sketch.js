let shape
let brushSize;
let r;
let g;
let p;
let b;
function setup() {
  brushSize = random(15, 30);
  shape = 10
  createCanvas(600,600);
  background('snow');
	p = createP("Start Drawing!");
	p.position(10, 10);
  r = 0
  g = 0
  b = 0
}



function draw() {
  noStroke()
  fill(mouseX % 256, g % 256, mouseY % 256);
  g = (g + 1)

  if (mouseIsPressed) {
    if (keyIsPressed === true) {
			rectMode(CENTER);
      rect(mouseX, mouseY, brushSize, brushSize);
    } else {
      ellipse(mouseX, mouseY, brushSize, brushSize);
    }
  
  }
}