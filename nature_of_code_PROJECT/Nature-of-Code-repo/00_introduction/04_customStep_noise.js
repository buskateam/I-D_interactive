<<<<<<< HEAD
let walk;

function setup(){
    createCanvas(500,500);
    background(0);
    walk = new Walker();

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
    this.tx = 0;
    this.ty = 10000;
  }//end construcotor

  move(){
    //random walker with probability
     var stepsize = random(0,width);
     var probability = this.stepsize;
     var stepD = random(0,width);



      if (stepD < probability){

        this.x = map(noise(this.tx+this.tepX),0,1,0,width);
        this.y = map(noise(this.ty+this.stepY),0,1,0,height);
      }else {
        this.x = map(noise(this.tx),0,1,0,width);
        this.y = map(noise(this.ty),0,1,0,height);
      }

      this.tx +=0.01;
      this.ty += 0.01;

  }

  show() {
    strokeWeight(random(0.5,0.8));
    stroke(2, 206, 172,75);
    fill(this.x,this.y,100,random(10,75));
    rect(this.x, this.y, this.x/20,this.x/20);
  }


}//end CLASS Walker
=======
let walk;

function setup(){
    createCanvas(500,500);
    background(0);
    walk = new Walker();

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
    this.tx = 0;
    this.ty = 10000;
  }//end construcotor

  move(){
    //random walker with probability
     var stepsize = random(0,width);
     var probability = this.stepsize;
     var stepD = random(0,width);



      if (stepD < probability){

        this.x = map(noise(this.tx+this.tepX),0,1,0,width);
        this.y = map(noise(this.ty+this.stepY),0,1,0,height);
      }else {
        this.x = map(noise(this.tx),0,1,0,width);
        this.y = map(noise(this.ty),0,1,0,height);
      }

      this.tx +=0.01;
      this.ty += 0.01;

  }

  show() {
    strokeWeight(random(0.5,0.8));
    stroke(2, 206, 172,75);
    fill(this.x,this.y,100,random(10,75));
    rect(this.x, this.y, this.x/20,this.x/20);
  }


}//end CLASS Walker
>>>>>>> 70e6dd07b0bf524152c0c63e9aad13890a166748
