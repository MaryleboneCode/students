let appleX = 200
let appleY = 100
let crateX = 200
let crateY = 200
let score = 0

function setup() {
  createCanvas(400, 400);
  background('skyblue');
}

function draw() {
  //draws tree
  crateX = mouseX
  crateY = mouseY
  background('skyblue');
  fill('forestgreen');
  noStroke();
  rect(0, 390, 400, 25);
  ellipse(400, 0, 80, 80);
  ellipse(0, 0, 80, 80);
  ellipse(320, 0, 80, 80);
  ellipse(260, 0, 80, 80);
  ellipse(120, 0, 80, 80);
  ellipse(70, 0, 80, 80);
  fill('darkred');
  rect(160, 0, 50, 390);
  fill('forestgreen');
  ellipse(190, 0, 80, 80);


  // draws apple
  fill('red');
  ellipse(appleX, appleY, 25, 25);
  fill('forestgreen');
  rect(appleX + 2, appleY - 19, 2, 10);
  appleY = appleY + 3;

  if (appleY > 400) {
    appleY = 0;
    appleX = random(0, 400);
  }

  fill('saddlebrown');
  rect(crateX, crateY, 90, 50);
  fill('white');
  text('APPLES', crateX + 20, crateY + 30);
  // this catches apples!!!!
  if (appleX > crateX &&
    appleX < crateX + 90 &&
    appleY > crateY &&
    appleY < crateY + 50) {

    appleY = 0
    appleX = random(0, 400)
    score = score + 1

 // if(appleY > 400) {
    
    
  }
  fill('black');
  text("score=" + score, 10, 20);

//  if (score === 20) {
  //  appleY = +6
 
  //}
  
 
}