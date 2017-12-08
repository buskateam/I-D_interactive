
//----------------------------------------------
//PARTICLE OBJECT

var sz = 1;
var ligth = 10;
function Particle(){
this.pos = createVector(random(width),random(height));
this.vel = createVector(0,0);
this.acc = createVector(0,0);
this.maxspeed = 2;


this.update = function(){
  this.vel.add(this.acc);
  this.vel.limit(this.maxspeed);
  this.pos.add(this.vel);
  this.acc.mult(0);
}

this.follow = function(vectors){
  var x = floor(this.pos.x/scl);
  var y = floor(this.pos.y/scl);
  var index = x+y*cols; //formulta to take two dimensional values into one dimensional array
  var force = vectors[index];
  this.applyForce(force);
}

this.applyForce = function(force){
  this.acc.add(force);
}

this.show = function(){
    stroke(115,30,200,random(30,75));
    strokeWeight(random(2,6));
    point(this.pos.x, this.pos.y);

    ligth+= ligth;
    sz++;

    if(ligth >= 255){
      ligth = 10;
    }else if (sz >= 10){
      sz = 1;
    }
  }


this.edges = function(){
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
}


}
