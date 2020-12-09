class Dust {
    constructor(x,y,width,height) {
        var options = {
          isStatic : true
          // 'restitution':0.3,
          // 'friction':100.0,
          // 'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

}
 display(){
    var pos =this.body.position;
  //  translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
  }
}