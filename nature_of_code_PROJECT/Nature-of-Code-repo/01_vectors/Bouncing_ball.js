var x = 100;
var y = 100;
var xspeed = 1;
var yspeed = 3;

function setup(){
  createCanvas(640,360);
  background(258);
}


function draw(){
  background(258);


  x = x + xspeed;
  y = y + yspeed;

  if((x > width) || (x < 0)){
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)){
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x,y,16,16);

}
