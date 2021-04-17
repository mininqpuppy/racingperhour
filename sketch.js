var Car1, car1Image;
var Car2, car2Image;
var Car3, car3Image;
var Car4, car4Image;
var Track, trackImage;
var Flag = 0;

function preload(){
  car1Image=loadImage("car1.png")
  car2Image=loadImage("car2.png")
  car3Image=loadImage("car3.png")
  car4Image=loadImage("car4.png")
  trackImage=loadImage("track.jpg")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  Car1=createSprite(440,800,10,10)
  Car1.addImage(car1Image);
  Car2=createSprite(650,800,10,10)
  Car2.addImage(car2Image);
  Car3=createSprite(950,800,10,10)
  Car3.addImage(car3Image);
  Car4=createSprite(1200,800,10,10)
  Car4.addImage(car4Image)

}

function draw() {
  background("black");  
  image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
  if(keyDown("w")){
    Car1.velocityY=-10
    Car2.velocityY=-8
    Car3.velocityY=-9
    Car4.velocityY=-8
    }
     camera.position.y=Car1.y
     if(keyDown("t")){
       Car1.velocityY=0
       Car2.velocityY=0
       Car3.velocityY=0
       Car4.velocityY=0
       Flag=1
      
     }
     if(Flag===1){
       textSize(30);
       text("Game Has Ended! Good job!",camera.position.x,camera.position.y);
     }
  drawSprites();
}