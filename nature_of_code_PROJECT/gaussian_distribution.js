
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var dot = [];

function setup() {
  createCanvas(640,640);
  background(0);

  /*for (var i = 0; i<=width; i++){
    for (var j = 0; j<=height; j++){
      ellipse(i*50+20, j*50+20, 20,20);
    }
  }*/
}

function draw() {

  var xloc = randomGaussian();
  var yloc = randomGaussian();

  var sd = 120;                // Define a standard deviation
  var meanX = width/2;         // Define a mean value (middle of the screen along the x-axis)
  xloc = ( xloc * sd ) + meanX;  // Scale the gaussian random number by standard deviation and mean

  var meanY = height/2;
  yloc = (yloc * sd) + meanY

  //noFill();
  fill(xloc, yloc,random(xloc,yloc),random(10,60));
  noStroke();
  ellipse(xloc, yloc, 16, 16);

}
