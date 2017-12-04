var walk;
function setup(){
  createCanvas(600,600);
    background(0);
    walk= new Walker(width/2,height/2);


}

function draw(){

    walk.step();
    walk.show();

}

//-------------------------------------------------------

class Walker {

constructor(x,y){
    this.x = x;
    this.y = y;
    this.tx = 0;
    this.ty = 10000;
  }

 step(){
    this.x = map(noise(this.tx),0,1,0,width);
    this.y = map(noise(this.ty),0,1,0,height);

    this.tx +=0.01;
    this.ty += 0.01;

  }

  show(){
    strokeWeight(random(0.5,2));
    stroke(135, 232, 255,50);
    fill(this.x,this.y,100,random(20,50));
    ellipse(this.x, this.y, this.x/10,this.x/10);
  }
}
