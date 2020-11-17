var dog,dogImg, happyDogimg,database,foods,foodStock;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happyDogimg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
database.ref("Food").on("value", readStock);
}
 
function readStock(data){
  foods=data.val()
}

function draw() {  

  background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(happyDogimg)
}
  drawSprites();
  stroke("black");
  text("foodRemaining"+ foods,170,200);
  textSize(13);
  text("Note: Press up arrowkey to feed drago milk",130,10,300,20);


}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


