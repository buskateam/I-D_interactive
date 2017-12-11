

var cols,rows;
var scl = 20;

function setup() {
  createCanvas(600, 600, /*WEBGL*/);
  var w = 600;
  var h = 600;

  cols = w/scl;
  rows = h/scl;
}

function draw() {
  background(0);
  stroke(255);
  noFill();

for(var y = 0; y<rows; y++){
    beginShape(TRIANGLE_STRIP)
    for(var x = 0; x < cols; x++){
      vertex(x*scl, y*scl);
      vertex(x*scl, (y+1)*scl);
    }
    endShape();
  }

}
