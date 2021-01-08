const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon1
var ground1
var ball1
var box1
var box2
var box3
var box4


function preload(){
	
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;

   

    ground1 = new Ground(600,600,1200,20)

    ball1 = new ball(300,500,40,40);
    box1 = new box(550,300,70,70);


    World.add(world, ground1);


    Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  //strokeWeight(4);

  ground1.display();
  ball1.display();
  box1.display();


  drawSprites();
 
}
