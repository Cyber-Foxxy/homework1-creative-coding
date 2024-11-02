let x1, x2, y1, y2, dx1, dx2, dy1, dy2, dxy1, dxy2, titleSize, titleGrowing;

function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Initialize positions and speeds
  x1 = 50;
  x2 = 350;
  y1 = 50;
  y2 = 350;
  dx1 = random(1, 3);
  dx2 = random(1, 3);
  dy1 = random(1, 3);
  dy2 = random(1, 3);
  dxy1 = random(1, 3);
  dxy2 = random(1, 3);
  titleSize = 24;
  titleGrowing = true;
}

function draw() {
  background(220);
  
 
  
  // Face
  fill(255, 224, 189);
  ellipse(200, 200, 150, 200);
  
  // Eyes
  fill(255);
  ellipse(170, 180, 30, 20);
  ellipse(230, 180, 30, 20);
  fill(34, 139, 34); // Green color for eyes
  ellipse(170, 180, 10, 10);
  ellipse(230, 180, 10, 10);
  
  // Nose
  fill(255, 224, 189);
  triangle(200, 190, 190, 230, 210, 230);
  
  // Mouth
  fill(255, 0, 0);
  arc(200, 260, 15, 20, 0, PI);
  
  // Hair
  fill(139, 69, 19); // Brown color
  beginShape();
  vertex(10, 150);
  bezierVertex(180, 240, 600, 15, 28, 9);
  bezierVertex(100, 100, 100, 500, 150, 100);
  bezierVertex(200, 200, 150, 250, 380, 300);
  bezierVertex(3, 50, 40, 35, 18, 150);
  endShape(CLOSE);
  
   // Title animation
  textSize(titleSize);
  textAlign(CENTER);
  fill(0);
  text("Bad Hair Day", width / 2, 50);
  if (titleGrowing) {
    titleSize += 0.5;
    if (titleSize >= 36) titleGrowing = false;
  } else {
    titleSize -= 0.5;
    if (titleSize <= 24) titleGrowing = true;
  }
  
  // Signature
  textSize(16);
  textAlign(RIGHT);
  fill(0);
  text("Christina Wright", width - 10, height - 10);
  
  // Moving shapes
  fill(0, 0, 255);
  ellipse(x1, 100, 20, 20);
  ellipse(x2, 300, 20, 20);
  x1 += dx1;
  x2 -= dx2;
  if (x1 > width || x1 < 0) dx1 *= -1;
  if (x2 > width || x2 < 0) dx2 *= -1;
  
  fill(255, 0, 0);
  rect(100, y1, 20, 20);
  rect(300, y2, 20, 20);
  y1 += dy1;
  y2 -= dy2;
  if (y1 > height || y1 < 0) dy1 *= -1;
  if (y2 > height || y2 < 0) dy2 *= -1;
  
  fill(0, 255, 0);
  ellipse(x1, y1, 20, 20);
  x1 += dxy1;
  y1 += dxy1;
  if (x1 > width || x1 < 0) dxy1 *= -1;
  if (y1 > height || y1 < 0) dxy1 *= -1;
}
