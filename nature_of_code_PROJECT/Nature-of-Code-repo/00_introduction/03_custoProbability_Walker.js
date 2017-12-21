let walk;

function setup() {
    createCanvas(800, 400);
    walk = new Walker();
    background(0);
}

function draw() {
    walk.show();
    walk.move();

}



// CLASS Walker -------------------------------------
class Walker {
    // constructor with parameters
    constructor() {
        this.position = new createVector(width / 2, height / 2);
        this.velocity = new createVector(3, 7);
        //this.x =width/2;
        //this.y =height/2;
        //this.stepy;
        //this.stepX;

    } //end construcotor

    move() {
        this.position.add(this.velocity);
        //random walker with probability
        var stepsize = random(0, 10);
        var probability = this.stepsize;
        var stepD = random(0, 10);

        this.velocity.x = pow(random(-stepsize, stepsize));
        this.velocity.y = pow(random(-stepsize, stepsize));

        if (stepD < probability) {

            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

        } else {
            this.position.x += random(-1, 1);
            this.position.y += random(-1, 1);
        }

    }

    show() {
        noFill();
        stroke(255, 255, 255);
        //strokeWeight(random(1,6));
        point(this.position.x, this.position.y);
    }


} //end CLASS Walker
