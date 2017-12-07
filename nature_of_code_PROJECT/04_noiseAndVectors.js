
var inc  = 0.1;
var nq = 2;
var scl = 20;
var cols, rows;
var fr;

function setup(){
createCanvas(300,300);
cols = floor(width/scl);
rows = floor(height/scl);
fr = createP('');

 }

function draw(){
background(255);

  var yoff = 0;


  for(var y = 0; y <height; y++){
    var xoff = 0;
    for(var x = 0; x < width; x++){
      var index = (x+y*width)*4;
      var r = noise(xoff,yoff)*255;
      var v = p5.Vector.fromAngle(random(TWO_PI));
      xoff +=inc;
      stroke(0);
      push();
      translate(x*scl,y*scl);
      rotate(v.heading());
      line(0,0,scl,0);
      pop();
    }
      yoff += inc;

    }
    fr.html(floor(frameRate()));
  }
