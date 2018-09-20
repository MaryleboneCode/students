function setup() {
  createCanvas(400, 400);
}
let x = 200;
let y = 200;
let w = 200;
let h = 200;
let cx = 200
let cy = 200
function draw() {
	background(154.8,90);
  noStroke();
  fill(250,50,100);
  rect(x, y, w, h);
  fill(0,255,0);
  ellipse(cx, cy, 200);
    fill(20,4,90);
  ellipse(mouseX,mouseY,150,200);

  
  
  cy--;
  if (cy < 0) {
   cy = height;
}
  x++
  if (x > width) {
    x = 0;
  }
}
