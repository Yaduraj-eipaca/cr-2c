const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1;

/*function preload()
{
  
}*/

function setup() 
{
  createCanvas(windowWidth, windowHeight);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paper1 = new paper(50,650,30);
  ground1 = new ground(400,690,windowWidth*2,20);
  dustbin1 = new dustbin(windowWidth - 150 ,680);

  Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(67.8, 84.7, 90.2);

  paper1.display();
  dustbin1.display();
  ground1.display();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:windowWidth /500,y:-40})
  }
}