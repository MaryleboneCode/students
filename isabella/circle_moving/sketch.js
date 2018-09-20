function setup() {
  createCanvas(400, 400);
}
let x = 200;
let y = 200;
let cx = 200
let cy = 200

function draw() {
  background(50, 150, 255);
  ellipse(cx,cy,200);
  fill(255, 100, 190);
  triangle(200,200,250, 150, 250, 200);
  
  
  
  cy--;
  if(cy < 0){
    cy = height;
  } 
  
}