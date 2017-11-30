function Cell(pos,r,c,g){

  if(pos){
    this.pos = pos.copy();
  }else{
    this.pos = pos || createVector(width/2,height/2);
  }

  this.r = r || 60;
  this.c = c || color(random(100,255),0,random(100,255),random(40,150));
  this.g = g || color(random(100,255),0,random(100,255),100);

  this.clicked = function(x,y){
    var d = dist(this.pos.x, this.pos.y, x,y);
    if(d<this.r){
      return true;
    }else{
      return false;
    }
  }

  this.mitosis = function(){
    this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r*0.8, this.c);
    return cell;
  }

  this. move = function(){
    var vel = p5.Vector.random2D();
    let r = random(0,1);
    if(r < 0.3){
      this.pos.x * 2;
      this.pos.add(this.x)
    }else if (r < 0.6){
      this.pos.x * 2;
      this.pos.add(this.x)
    }else if (r < 0.8){
      this.pos.y * 2;
      this.pos.add(this.y)
    }else{
      this.pos.y * 2;
      this.pos.add(this.y)
    }
    this.pos.add(vel);
  }

  this.show = function(){
  //noFill();
  noStroke();
  fill(255,255,255, random(0.5,0.6));

  ellipse(this.pos.x, this.pos.y, 10+(mouseX/5),10+(mouseY/5));
  noFill();
  stroke(random(4,125), random(221,255), random(216,241), random(5,50));
  ellipse(this.pos.x, this.pos.y, 70+(mouseX),70+(mouseY));
  //noFill();
  /*beginShape();
  curveVertex(184+this.pos.x+(mouseX/3),  91+this.pos.y+(mouseY/3));
  curveVertex(84+this.pos.x,  91+this.pos.y);
  curveVertex(168+this.pos.x,  19+this.pos.y);
  curveVertex(21+this.pos.x+(mouseX/5),  17+this.pos.y+(mouseY/5));
  curveVertex(32+this.pos.x+(mouseX/10), 200+this.pos.y+(mouseY/20));
  curveVertex(232+this.pos.x, 200+this.pos.y);
endShape(CLOSE);*/


/*  stroke(43, 179, 148,random(0.2,0.6));
  noFill();
  ellipse(this.pos.y, this.pos.x,150,150);

  noFill();
  stroke(180, 242, 0,random(0.3,0.6));
  //noStroke();
  ellipse(this.pos.x, this.pos.y, random(35,10),random(35,10));
  ellipse(this.pos.x, this.pos.y, random(35,10),random(35,10));
  ellipse(this.pos.x, this.pos.y, random(35,10),random(35,10));
  ellipse(this.pos.x, this.pos.y, random(35,10),random(35,10));*/


}
}
