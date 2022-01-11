function preload() {
  BOX_WIDTH = 1083;
  BOX_HEIGHT = 1457;
  BOX_DEPTH = 345;
  FRONT_IMG = loadImage('descarga.jpeg');
  LEFT_IMG = loadImage('images.jpeg');
  TOP_IMG = loadImage('images.jpeg');
  RIGHT_IMG = loadImage('images.jpeg');
  BOTTOM_IMG = loadImage('images.jpeg');
  BACK_IMG = loadImage('images.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Make sure the box always fit the screen.
  SCALE_FACTOR = windowHeight / 2 /
      Math.max(Math.max(BOX_WIDTH, BOX_HEIGHT), BOX_DEPTH);
}

function drawFaceBox(boxWidth, boxHeight, boxDepth,
    front, top, right, bottom, left, back) {
  angleMode(DEGREES); 
  let w = boxWidth * SCALE_FACTOR;
  let h = boxHeight * SCALE_FACTOR;
  let d = boxDepth * SCALE_FACTOR;

  // Center the box.
  translate(-w / 2, -h / 2);

  texture(front);
  quad(0, 0, w, 0, w, h, 0, h);

  push();
  texture(left);
  translate(0, 0, -d);
  rotateY(-90);
  quad(0, 0, d, 0, d, h, 0, h);

  pop();
  push();
  texture(top);
  translate(0, 0, -d);
  rotateX(90);
  quad(0, 0, w, 0, w, d, 0, d);

  pop();
  push();
  texture(right);
  translate(w, 0, 0);
  rotateY(90);
  quad(0, 0, d, 0, d, h, 0, h);

  pop();
  push();
  texture(bottom);
  translate(0, h, 0);
  rotateX(-90);
  quad(0, 0, w, 0, w, d, 0, d);

  pop();
  push();
  texture(back);
  rotateY(180);
  translate(-w, 0, d);
  quad(0, 0, w, 0, w, h, 0, h);
}

function draw() {
  background(50);

  // Simple rotation control by mouse.
  rotateX(mouseY);
  rotateY(-mouseX);

  drawFaceBox(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH,
      FRONT_IMG, TOP_IMG, RIGHT_IMG, BOTTOM_IMG, LEFT_IMG, BACK_IMG);
}
