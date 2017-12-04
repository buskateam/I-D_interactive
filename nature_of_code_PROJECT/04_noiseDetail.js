var bright;

function setup(){
createCanvas(500,500);
pixelDensity(1);

 }


function draw(){
  background(51);

  var xoff = 0.0;
  var yoff = 0.0;


loadPixels();
  for(var y= 0; y<height; y++){
    for(var x = 0; x<width; x++){
       var index = (x + y * width)*4;
       brigth = random(index,255);
       pixels[index+0] = bright;
       pixels[index+1] =bright;
       pixels[index+2] = bright;
       pixels[index+3] =bright;
    }
  }
  updatePixels();
  }
