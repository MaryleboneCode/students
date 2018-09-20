function setup() {
  	createCanvas(400, 400);
}
let plusx = 1;

function draw() {
	background(0, 255, 255);
	fill(255,0,250);
	triangle(200+plusx, 200,250+plusx, 150, 250+plusx,250);
	ellipse(mouseX, mouseY, 200, 200);
	plusx = plusx + 1;

	if (200+plusx > width) {
		plusx = -width/2;
	}
}