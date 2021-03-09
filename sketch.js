
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;

var hammer1;

var stone1;

var  rubber1;

var iron1;

var  sand1,sand2,sand3,sand4,sand5,sand6;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(500,height,1000,20);

   
	hammer1 = new Hammer(500,250,150,30);

    
	stone1 = new Stone(300,350,50,50);

	rubber1 = new Rubber(200,350);


	sand1 = new Rubber(250,350);
	sand2= new Rubber(300,350);
	sand3 = new Rubber(250,350);
	sand4= new Rubber(350,350);
	sand5 = new Rubber(40,350);
    sand6 = new Rubber(450,350);

	iron1 = new Iron(500,350);

	
	  
   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
  ground1.display();

  hammer1.display();

  stone1.display();

  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  iron1.display();
 
}



