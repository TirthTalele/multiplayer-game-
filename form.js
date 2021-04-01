class Form{

    constructor(){
         this.input = createInput("Name");
         this.button = createButton("Play");
         this.greet = createElement('h3');
         this.reset = createButton("Reset");
        }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }
    display(){

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-20, 20);

        this.input.position(displayWidth/2-20,displayHeight/2);
        
        this.button.position(displayWidth/2+30,displayHeight/2+40);
        this.reset.position(displayWidth-100,20)
        this.button.mousePressed(
            () => {

                   this.input.hide();
                   this.button.hide();
                   
                   player.name = this.input.value();

                   playerCount++;
                   player.updatecount(playerCount);
                   player.index = playerCount;
                   player.update();

                   
                    this.greet.html("Welcome " + player.name);
                    this.greet.position(displayWidth/2-20,displayHeight/2);

            } )
            this.reset.mousePressed(
                () => {
  game.updategamestate(0);
    player.updatecount(0);
    player.updateRank(0);
    location.reload();

    
    })
                }
}