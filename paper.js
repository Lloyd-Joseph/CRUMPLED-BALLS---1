class Paper{

   constructor(x,y) {

          var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.circle(x,y,50 , options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    
     display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("white");
      ellipse(pos.x,pos.y, 55, 55);
    }
      

}