let sliderD;
let sliderY
let inputD
let inputY
let size = 800
if(!prefix){
  let prefix = ''
}


function preload() {
  BOX_WIDTH = 1083;
  BOX_HEIGHT = 1457;
  BOX_DEPTH = 345;
  FRONT_IMG = loadImage(prefix+'static/descarga.jpeg');
  LEFT_IMG = loadImage(prefix+'static/images.jpg');
  TOP_IMG = loadImage(prefix+'static/images.jpg');
  RIGHT_IMG = loadImage(prefix+'static/images.jpg');
  BOTTOM_IMG = loadImage(prefix+'static/images.jpg');
  BACK_IMG = loadImage(prefix+'static/images.jpg');
}

function setup() {
  createCanvas(size, size, WEBGL);
  sliderD = createSlider(100,400,345,1)
  sliderY = createSlider(0,45,20,1)
  sliderD.position(10,10)
  sliderY.position(size/2+10,10)
  inputD = createInput(345)
  inputY = createInput(20)
  inputD.position(10,size-20)
  inputY.position(size/2 + 10, size-20)
  // Make sure the box always fit the screen.
  SCALE_FACTOR = size / 2 /
      Math.max(Math.max(BOX_WIDTH, BOX_HEIGHT), BOX_DEPTH);
}

function drawFaceBox(boxWidth, boxHeight, boxDepth,
    front, top, right, bottom, left, back) {
  angleMode(DEGREES); 
  noStroke();
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
  background(250);
  rd = sliderD.value()
  let ry = sliderY.value()
  inputD.value(rd)
  inputY.value(ry)
  // Simple rotation control by mouse.
  //rotateX(rx);
  rotateY(-ry);

  drawFaceBox(BOX_WIDTH, BOX_HEIGHT, rd,
      FRONT_IMG, TOP_IMG, RIGHT_IMG, BOTTOM_IMG, LEFT_IMG, BACK_IMG);
}
