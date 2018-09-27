class Circle {
	  constructor(x, y, r) {
      this.x = x;
			this.y = y;
			this.radius = r;
      this.gravity = random(5);    
		}

  show() {
		noStroke();
		fill(255, 100, 0, 100)
    ellipse(this.x, this.y, this.radius*2);
	}
  
  update() {
    if (this.y > height) {
			this.x = random(width);
    	this.y = -10
			this.gravity = random(5);
    } else {
			this.y += this.gravity;
		}
  }
}
let circles = []

function setup() {
  createCanvas(400, 400);
	
	for (let i = 0; i < 200; i++) {
		circles.push(new Circle(random(width), random(height), random(20)))
	}
}
function draw() {
  background(220);
	for (let i = 0; i < circles.length; i++) {
		circles[i].show();
		circles[i].update();
	}
}