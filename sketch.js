
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var log1;


function preload()
{
	backgroundImg = loadImage("bg.jpg");	
}

function setup() {
	createCanvas(800, 700);
	
	log1 = new Log(810,260,300,PI/2);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log(810,260,300,PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  drawSprites();
 
}



