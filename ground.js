class Ground {
    constructor(x,y,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,850,10,options);
      this.width = 1000;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };