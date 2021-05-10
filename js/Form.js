class Form {
  constructor() {
    this.input=  createInput("Name");
    this.button  = createButton('Play');
    this.greeting = createElement('h3');
    //console.log(this)
  }

  hide(){
    this.input.hide();
      this.button.hide();
      this.greeting.hide();
  }
  display(){
    // DOCUMENT OBJECT MODEL
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
   
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    //arrow function makes sure that 'this' remains same
    this.button.mousePressed(()=>{
      console.log(this);
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount=playerCount+1;
      player.updateCount(playerCount);



      var name = this.input.value();
      
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
