function setup() {
  createCanvas(400, 400);
}
let x=200;
let y=200;
let h=200;
let w=200;
let cx=200;
let cy=200;
function draw() {  
background(160);
  noStroke();
  fill(280, 40, 100);
rect(x,y,w,h);
fill(255,230,40);
ellipse(cx, cy,90);
  
  cy--;
  if (cy < 0) {
   cy = height;
}
  x++;
  if (x> width) {
  x=0;
   }
}