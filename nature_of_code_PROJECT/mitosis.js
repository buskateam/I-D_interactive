var cells = [];
function setup(){
  createCanvas(windowHeight,windowHeight);
  background(0);
  cells.push(new Cell());
  for(var i = 0; i < 0; i++){
    cells.push(new Cell());
  }



}


function draw(){

  //blendMode(LIGHTEST);
  for(var i = 0; i<cells.length; i++){
    cells[i].move();
    cells[i].show();
  }
}


function mousePressed(){
  for(var i = cells.length-1; i>= 0; i--){
    if(cells[i].clicked(mouseX,mouseY)){
      //console.log("pressed");
        cells.push(cells[i].mitosis());
        cells.push(cells[i].mitosis());
        cells.splice(i,1);
    }
  }
}
