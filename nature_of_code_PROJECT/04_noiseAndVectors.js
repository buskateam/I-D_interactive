//What is Perlin Noise?
var inc  = 0.1;
var nq = 2;
var scl = 20;
var cols, rows;
var fr;
var zoff = 0;
var particle = [];


function setup(){
createCanvas(500,500);
cols = floor(width/scl);
rows = floor(height/scl);
fr = createP('');

for(var i =0; i<100; i++){
  particle[i] = new Particle();
}

 }

function draw(){
background(255);

  var yoff = 0;


  for(var y = 0; y <rows; y++){
    var xoff = 0;
    for(var x = 0; x < cols; x++){
      var index = (x+y*width)*4;
      var angle = noise(xoff,yoff,zoff)*TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff +=inc;
      stroke(0,50);
      push();
      translate(x*scl,y*scl);
      rotate(v.heading());
      line(0,0,scl,0);
      pop();
    }
      yoff += inc;
      zoff += 0.0004;
    }
    for(var i = 0 ; i<particle.length; i++){
      particle[i].update();
      particle[i].show();
      particle[i].edges();
    }

    fr.html(floor(frameRate()));
  }
