
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(270,510,32.5);
	bob2 = new Bob(335,510,32.5);
	bob3 = new Bob(400,510,32.5);
	bob4 = new Bob(465,510,32.5);
	bob5 = new Bob(530,510,32.5);

	roof = new Roof(400,260,325,20);

	rope1 = new Rope(bob1.body,roof.body,-130,0);
	rope2 = new Rope(bob2.body,roof.body,-65,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,65,0);
	rope5 = new Rope(bob5.body,roof.body,130,0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lightBlue");

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	drawSprites();
 
}

function keyPressed(){
	if(keyCode == 38){
		Body.applyForce(bob1.body,bob5.body.position,{x:-250,y:-45})
	}
}

