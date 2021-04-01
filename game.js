class Game {
  constructor(){}

  getgamestate(){

    var gamestateref = database.ref('gamestate');
    gamestateref.on("value", function(data){

        gameState = data.val();

    })
  }
updategamestate(state){
  

    database.ref('/').update({

        'gamestate' : state
    })
  }

  start(){
      if (gameState === 0){

        form = new Form();
        form.display();

        player = new Player();
        player.getCount();
       car1 = createSprite(200,200,50,50); 
       car2 = createSprite(400,200,50,50);
       car3 = createSprite(600,200,50,50);
       car4 = createSprite(800,200,50,50);
       car1.addImage("car1",car1Image)
       car2.addImage("car2",car2Image)
       car3.addImage("car3",car3Image)
       car4.addImage("car4",car4Image)
      cars = [car1,car2,car3,car4];

      }
    
  }
  play(){
   
   form.hide();
   player.getRank()
   Player.getallplayerinfo();
//display of all players
   if (allPlayers !== undefined){
     background("orange");
     image(track,0,-displayHeight*4,displayWidth,displayHeight*4);
    // var yposition = 150;
    var x = 400; 
    var y;
    var arrayindex = 0;
    for(var plyr in allPlayers){

      y = displayHeight/2 - allPlayers[plyr].Distance;
      cars[arrayindex].x = x;
      cars[arrayindex].y = y;

      if((arrayindex+1) === player.index){
        cars[arrayindex].shapeColor = "blue";
        //adding camera
        camera.position.x = displayWidth/2;
        camera.position.y = cars[arrayindex].y;
        fill("green");
        ellipse(x,y,70,70)
      }
      x = x+200;
      arrayindex++;
    //  textSize(25);
    //   text(allPlayers[plyr].Name + ":" + allPlayers[plyr].Distance, 120, yposition  );
     //  yposition = yposition +50;
   // {player1:{name,distance},player2:{name,distance}}
    }
    
   }
// increase the distance
   if(keyDown("up")  && player.index !== null ){
    player.distance = player.distance + 50; 
     player.update();
     //console.log(player.distance);
     if(player.distance>4000){
     gameState = 2;
        player.rank++
        player.updateRank(player.rank)
     }
  }

  }
  
}               