let width;
let height;
let rotationAmount;

function setup() {
  createCanvas(400, 400);
  
  isGrowing = true;
  width = 50;
  height = 50;
  
  rotationAmount = 0;
}

function draw() {
  background(220);
  
  if (isGrowing) {
    if (width < 250) {
      width += 5;
    } else {
      isGrowing = false;
    }
  } else {
    if (width > 50) {
      width -= 5;
    } else {
      isGrowing = true;
    }
  }
  
  rotationAmount += 5;
  
  translate(200, 200);
  rectMode(CENTER);
  
  rotate(rotationAmount / 200);
  noStroke();
  
  fill(100, 150, 255);
  rect(0, 0, width, height, 8);
  rect(0, 0, height, width, 8);
}

