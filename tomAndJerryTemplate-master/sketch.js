var cat , catimage1,catimage2,catimage4
var mouse , mouseimg1,mouseimg2,mouseimg4
var garden 

function preload() {
    //load the images here
    garden = loadImage ("images/garden.png")
    catimage1 = loadImage ("images/cat1.png")
    catimage2 = loadAnimation ("images/cat2.png","images/cat3.png")
   
    catimage4 = loadImage ("images/cat4.png")
mouseimg1 = loadImage ("images/mouse1.png")
mouseimg2 = loadAnimation ("images/mouse2.png","images/mouse3.png")

mouseimg4 = loadImage ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite (870,600,20,20)
cat.addImage (catimage1)
cat.scale = 0.1
mouse = createSprite (200,600,10,10)
mouse.addImage (mouseimg1)
mouse.scale = 0.1
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
 if (cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX = 0
     cat.addImage (catimage4)
     cat.x = 300
     cat.scale = 0.2
     mouse.addImage (mouseimg4)
     mouse.scale = 0.15
 }
    drawSprites();
}


function keyPressed(){
 if (keyCode === LEFT_ARROW){
     mouse.addAnimation ("mouse_running",mouseimg2)
     cat.velocityX = -6;
     cat.addAnimation ("cat_running", catimage2)
 }
  //For moving and changing animation write code here


}
