const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;

function preload()
{
	
}

function setup() {
	createCanvas(850, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680);
	bin1 = new Dust(700,665,150,20);
	bin2 = new Dust(630,600,20,150);
	bin3 = new Dust(770,600,20,150);
	paper = new Paper(30 , 500);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("hotpink");
  Engine.update(engine);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:490,y:-295});	

	}

}



