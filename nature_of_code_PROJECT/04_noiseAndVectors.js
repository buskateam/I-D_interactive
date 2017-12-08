//What is Perlin Noise?
var inc  = 0.1;
var nq = 2;
var scl = 20;
var cols, rows;
var fr;
var zoff = 0;
var particle = [];
var flowField;

function setup(){
createCanvas(500,500);
background(255);
cols = floor(width/scl);
rows = floor(height/scl);
fr = createP('');

flowField = new Array(cols * rows);
for(var i =0; i<500; i++){
  particle[i] = new Particle();
}

 }

function draw(){
  var yoff = 0;


  for(var y = 0; y <rows; y++){
    var xoff = 0;
    for(var x = 0; x < cols; x++){
      var index = (x+y*cols);
      var angle = noise(xoff,yoff,zoff)*TWO_PI*4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index]= v;
      xoff +=inc;
      stroke(0,20);
      push();
      translate(x*scl,y*scl);
      rotate(v.heading());
      strokeWeight(1);
      line(0,0,scl,0);
      pop();
    }
      yoff += inc;
      zoff += 0.0005;
    }
    for(var i = 0 ; i<particle.length; i++){
      particle[i].follow(flowField);
      particle[i].update();
      particle[i].show();
      particle[i].edges();
    }

    fr.html(floor(frameRate()));
  }
