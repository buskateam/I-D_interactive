
var inc  = 0.01;
var nq = 2;
var scl = 20;
var cols, rows;

function setup(){
createCanvas(500,500);
//pixelDensity(1);
cols = floor(width/scl);
rows = floor(height/scl);


 }

function draw(){


  var yoff = 0;

  //loadPixels();
  for(var y = 0; y <height; y++){
    var xoff = 0;
    for(var x = 0; x < width; x++){
      var index = (x+y*width)*4;
      var r = noise(xoff,yoff)*255;
      /*pixels[index + 0 ] = 25;
      pixels[index + 1 ] = r;
      pixels[index + 2 ] = r;
      pixels[index + 3 ] = 255;*/

      xoff +=inc;

    }
      yoff += inc;

  }

    //inc+=0.001;

    noiseDetail(nq,inc);
    //updatePixels();
  }
