
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


function preload()
{
	
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
															
	ground=new Ground(200,560,800,20)
	
	tree=new Tree(300,200,400,500)
	
	boy=new Boy(100,250,150,300)
	stone=new Stone(200,500,40)

	mango1=new Mango(550,100,40)
	rope=new Rope(stone.body,{x:150,y:450})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  ground.display()
  tree.display()
  stone.display()
  boy.display()
mango1.display()

rope.display()
  drawSprites();
 
}



