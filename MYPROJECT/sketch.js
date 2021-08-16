var track ,trackImage
 function preload(){
     trackImage=loadImage("IMAGES/track1.jpeg")
 }
 function setup(){
     createCanvas (1000,600)
  track=createSprite(100,100,900,100)
  track.addImage(trackImage)
  track.scale=2
 }
 function draw(){
     drawSprites()
 }