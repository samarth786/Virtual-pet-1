//Create variables here
var DOG, dog, happyDog, database, foodS, foodStock;
function preload()
{
  
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  DOG = createSprite(250, 250, 20, 20);
  DOG.addImage(dog);
  DOG.scale =0.1;
 foodStock =database.ref('Food');
 foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  DOG.addImage(happyDog);
  }


  drawSprites();
  
  textSize(30);
  fill(255, 0,0 );
text(foodS + " bottles remaining", 100, 200);
fill("khaki");
text("Note - Press the up arrow key ", 50, 350);
text(" to feed the dog", 150, 400);
  //add styles here

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x =x-1;
  }
database.ref('/').update({
  Food :x
})
}
