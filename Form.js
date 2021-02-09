class Form{
   constructor(){

   }
  
   display(){
       var title = createElement('h2')
       title.html("CAR RACING GAME")
       title.position(130,0);

       var input = createInput("Name")
       var button = createButton("Play")

       input.position(130,170)
       button.position(130,210)

       button.mousePressed(function(){
        input.hide();
        button.hide();

       var name = input.value();
       
       playerCount+=1;
       player.update(name)
       player.updateCount(playerCount);
       var greeting = createElement('h3');
       greeting.html("HELLO"+ name)
       greeting.position(130,160)

       })
   }
}