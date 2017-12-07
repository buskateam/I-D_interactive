
var inc  = 0.01;

function setup(){
createCanvas(500,500);
pixelDensity(1);


 }


function draw(){

  var xoff = 0;
  var yoff = 0;

  loadPixels();
  for(var x = 0; x < width; x++){
    var yoff = 0;
    for(var y = 0; y < height; y++){
      var index = (x+y*width)*4;
      var r = noise(xoff)*255;
      pixels[index + 0 ] = r;
      pixels[index + 1 ] = r;
      pixels[index + 2 ] = r;
      pixels[index + 3 ] = 255;

      xoff +=0.01;
    }
  }
    updatePixels();
  }
