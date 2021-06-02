var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(300,250,50,50);
  movingRect.shapeColor = "red";

  
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x)
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2&&
    fixedRect.y-movingRect.y<= movingRect.height/2+fixedRect.height/2&&
    movingRect.y-fixedRect.y<= fixedRect.height/2+movingRect.height/2
  ){
     movingRect.shapeColor = "yellow";
     fixedRect.shapeColor = "yellow"
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  drawSprites();
}