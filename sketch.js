
var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var counter = 0;
function preload(){

 car1Image = loadImage("car1.png");   
 car2Image = loadImage("car2.png");   
 car3Image = loadImage("car3.png");   
 car4Image = loadImage("car4.png");   
track = loadImage("track.jpg");



}



function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();
   
}

function draw(){

   if (playerCount === 4) {

    game.updategamestate(1);

   }
   if (gameState === 1){
       clear();
       game.play();
       drawSprites();
   }
   if (gameState === 2){
    textSize(30);
    fill("blue");
  if(counter===0) {text("GAME OVER",displayWidth/2,-displayHeight*4-200);
  text(player.name+" your rank is  "+player.rank,displayWidth/2,-displayHeight*4-150)
   counter = 1;
} 
   
}
}


