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
    this.x =1;
    this.y =1;
    this.sd = 10;
    this.xMean = width/2;
    this.yMean = height/2;
  }//end construcotor

  move(){
    this.x =randomGaussian();
    this.y =randomGaussian();

    this.x = (this.x * this.sd)+ this.xMean;
    this.y = (this.y * this.sd)+ this.yMean;

     let r = random(0,1);
     if(r < 0.4){
       this.x++;
     }else if (r < 0.6){
       this.x--;
     }else if (r < 0.8){
       this.y++;
     }else{
       this.y--;
     }

     if(this.x >= width){
       this.x--;
     }
  }

  show() {
    noFill();
    //strokeWeight(random(1,4));
    stroke(this.x,this.y,255,random(20,80));
    point(this.x, this.y);

    /*stroke(55,25,155,random(5,20));
    line(this.x*1.2, this.y*1.2,this.x*1.2,this.y*1.2);

    stroke(219, 0, 0,random(2,3));
    line(this.x*0.8, this.y*0.8,this.x*0.8,this.y*0.8);*/
  }


}//end CLASS Walker
