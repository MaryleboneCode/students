class Circle {
	  constructor(x, y, r, g) {
			this . x = x;
			this . y = y;
			this . radius = r;
			this . gravity= g;

    }
  show() {
    ellipse(this.x, this.y, this.radius*2);
	}
      
   update() {
    if (this.y > height) {
    	this.y= -10;
    }  else {
    	this.y += this.gravity;
    }
   }
}
  
  
let circles = []

function setup() {
  createCanvas(400, 400);
	
	for (let i = 0; i < 100; i++) {
		circles.push(new Circle(random(width), random(height), 20, random(5)))
	}
}
let circle = new Circle(200, 200, 50);
function draw() {
  background(220);
	for (let i = 0; i < circles.length; i++) {
    noStroke();
    fill(64, 204, 248, 100)
		circles[i].show();
    circles[i].update();
	}

}