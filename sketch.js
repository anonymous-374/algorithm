var fixedbox, movingbox;



function setup() {
  createCanvas(800,400);
  fixedbox = createSprite(100, 200, 80, 30);
  movingbox = createSprite (600,200,30,80);

   fixedbox.shapeColor = "green";
   movingbox.shapeColor = "green";

}

function draw() {
  background(0);
  
  movingbox.x = mouseX;
  movingbox.y = mouseY;

  if (fixedbox.width/2 + movingbox.width/2 > movingbox.x - fixedbox.x 
     && fixedbox.width/2 + movingbox.width/2 > fixedbox.x - movingbox.x 
     && fixedbox.width/2 + movingbox.width/2 > movingbox.y - fixedbox.y 
     && fixedbox.width/2 + movingbox.width/2 > fixedbox.y - movingbox.y){
    fixedbox.shapeColor = "red";
   movingbox.shapeColor = "red";
  }
 else {
  fixedbox.shapeColor = "green";
  movingbox.shapeColor = "green";

 }
 

  drawSprites();
}