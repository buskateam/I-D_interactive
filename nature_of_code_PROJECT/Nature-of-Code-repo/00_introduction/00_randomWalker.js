//actualizar en git
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
    this.x =5;
    this.y =height/2;

  }//end construcotor

  move(){
    //random walker with probability
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
    stroke(255,255,255,random(2,10));
    strokeWeight(random(1,6));
    line(this.x, this.y,this.x,this.y);

    stroke(55,25,155,random(5,20));
    line(this.x*1.2, this.y*1.2,this.x*1.2,this.y*1.2);

    stroke(219, 0, 0,random(2,3));
    line(this.x*0.8, this.y*0.8,this.x*0.8,this.y*0.8);
  }


}//end CLASS Walker
