var bob1,bob2,bob3,bob4,bob5

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var gameState = "onSling";

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,10,1200,25);

	bob1=new Bob(100,50,50);
	chain1 = new Chain(bob1.body,ground.body,50,10);

	bob2=new Bob(200,50,50);
	chain2 = new Chain(bob2.body,ground.body,150,10);

	bob3=new Bob(300,50,50);
	chain3 = new Chain(bob3.body,ground.body,250,10);

	bob4=new Bob(400,50,50);
	chain4 = new Chain(bob4.body,ground.body,350,10);

	bob5=new Bob(500,50,50);
	chain5 = new Chain(bob5.body,ground.body,450,10);
	
	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    }
}

/* extra code */
/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});
    }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
    }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
    }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
    }
}*/

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

