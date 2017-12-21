//AVANCE -> https://www.youtube.com/watch?v=Gi9PuLHlzzI // minuto 1:20:14
var angle = 0.001; 
var ball; 
function setup() {
	createCanvas(600, 600,WEBGL);
    ball = new Ball(); 
}

function draw() {
    background(51);
    ball.update(); 
    ball.display(); 
    
     
    //translate(angle*20,angle*5,0); 
    rotateX(angle); 
    
    
}

// CLASS ball-------------------------------------------------
function Ball() {
    this.position = new createVector(1, 100);
    this.velocity = new createVector(2.5, 2.9);

    this.update = function () {
        // add the value of vector velocity in postion vector 
        this.position.add(this.velocity);
        translate(this.position,0,this.position); 

        if ((this.position.x > width) || (this.position.x < 0)) {
            this.velocity.x = this.velocity.x * -1;
        }

        if ((this.position.y > height) || (this.position.y < 0)) {
            this.velocity.y = this.velocity.y * -1;
        }

    }

    this.display = function () {
        stroke(0);
        fill(175);
        //ellipse(this.position.x, this.position.y, 48, 48);
        pointLight(255,150,10);
        
        ambientMaterial(150,144,36,); 
        noStroke(); 
   
        //angle +=0.007; 
        sphere(10); 
    }


}
