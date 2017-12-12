//https://www.youtube.com/watch?v=IKB1hWWedMk&feature=youtu.be
//7:18

var cols,rows;
var scl = 20;
var w = 600;
var h = 600;

function setup() {
  createCanvas(600, 600, WEBGL);


  cols = w/scl;
  rows = h/scl;
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  translate(width/2,height/2);
  rotateX(PI/3);
  translate(-w/2,-h/2);
for(var y = 0; y<rows; y++){
    beginShape(TRIANGLE_STRIP)
    for(var x = 0; x < cols; x++){
      vertex(x*scl, y*scl);
      vertex(x*scl, (y+1)*scl);
    }
    endShape();
  }

}
