//ES6 classes

let ball = [];
let aux = 10;

function setup() {
  createCanvas(800,400);
  for(let i = 0; i<aux; i++){
    let y = random (0,width);
    ball[i] = new Ball(1,y,30,random(1,10),150);
    //ball.push()
  }
}

function draw(){
  background(0);
  for (let k = 0; k<ball.length; k++){
    ball[k].move();
    ball[k].show();
    ball[k].col();
  }

}


//CLASS BALL ************
class Ball {

  constructor(_x, _y, _diam , _speed, _paint){ // the arguments are initializated when the object is created
    this.x = _x;
    this.y = _y;
    this.diam = _diam;
    this.speed = _speed;
    this.paint = _paint;
  }

  // function move
  move(){
    this.x = this.x + this.speed/2;
    this.speed+= 0.2;

    if (this.x > width){
      this.speed+= -2;

    }
  }

 // fucntion show
 show(){
    noStroke();
    ellipse(this.x,this.y,this.diam+(this.x/50),this.diam);

  }
  // function color ball
 col(){
    fill(this.paint,this.paint*2,this.paint%50,(this.paint/2 + this.x/2));
 }

}//END CLASS BALL ***************
