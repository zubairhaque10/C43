var backgroundImage,  catImage
var cat, bg

function setup() {
  createCanvas(900, 500);
  bg = createSprite(0, 250, 450, 500)
  bg.addAnimation(backgroundImage)
bg.scale = 1.3
//bg.velocityX = -2
bg.x = bg.width/2
  cat = createSprite(100, 450, 50, 50)
  cat.addImage(catImage)
  cat.scale = 0.3
}
function preload(){
backgroundImage = loadAnimation("images/background5.gif")
catImage = loadImage("images/cat.png")

}


function draw() {
  background(backgroundImage);









  drawSprites();
}