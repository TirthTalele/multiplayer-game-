class Player{

    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
        this.rank = null;
    }

getCount(){

    var countref  = database.ref('playercount');
    countref.on("value",function(data){
  
        playerCount = data.val();

   
    }) 
    
}
getRank(){

    var countref  = database.ref('rank');
    countref.on("value",(data) =>{
  
        this.rank = data.val();

   
    }) 
    
}
updatecount(count){
 database.ref('/').update({

    'playercount': count
    
 })

}
updateRank(rank){
    database.ref('/').update({
   
       'rank': rank
       
    })
   
   }
update(){

   var playerindex = "Player/player"+ this.index;
    database.ref(playerindex).set({
        'Name': this.name,
        'Distance': this.distance
    })
}

static getallplayerinfo(){
    var getinforef = database.ref('Player');
    getinforef.on("value", (data) => {
        allPlayers = data.val();
    } )

}


}