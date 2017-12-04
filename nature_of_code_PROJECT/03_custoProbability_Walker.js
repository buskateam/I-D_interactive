let walk;

function setup(){
    createCanvas(800,400);
    walk = new Walker();
    background(0);
}

function draw(){
  walk.show();
  walk.move();

}



// CLASS Walker -------------------------------------
class Walker {
// constructor with parameters
  constructor(){
    this.x =width/2;
    this.y =height/2;
    this.stepy;
    this.stepX;

  }//end construcotor

  move(){
    //random walker with probability
     var stepsize = random(0,10);
     var probability = this.stepsize;
     var stepD = random(0,10);

     this.stepX = pow(random(-stepsize,stepsize));
     this.stepY = pow(random(-stepsize,stepsize));

     if(stepD < probability){

       this.x += this.stepX;
       this.y += this.stepX;

     }else{
       this.x += random (-1,1);
       this.y += random (-1,1);
     }

  }

  show() {
    noFill();
    stroke(255,255,255);
    //strokeWeight(random(1,6));
    point(this.x, this.y);
  }


}//end CLASS Walker
