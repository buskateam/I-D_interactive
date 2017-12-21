var ball; 
function setup(){
    createCanvas(600,600); 
     ball = new Ball(); 
    
}

function draw(){
    background(0); 
    
    ball.display();
    ball.update(); 
    
    
}