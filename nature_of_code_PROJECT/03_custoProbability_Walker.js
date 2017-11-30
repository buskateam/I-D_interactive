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
    this.stepy = 0.5;
    this.stepX =1;

  }//end construcotor

  move(){
    //random walker with probability
     var stepsize = random(0,10);
     var probability = this.stepsize;
     var stepD = random(0,10);
    

     if(stepD < probability){
        this.x++;

     }else{
       this.x += stepsize;
       this.y += -stepsize;
     }

  }

  show() {
    noFill();
    stroke(255,255,255);
    //strokeWeight(random(1,6));
    point(this.x, this.y);
  }


}//end CLASS Walker
