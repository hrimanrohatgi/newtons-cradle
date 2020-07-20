const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3,b4,b5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(600, 600);
  
	engine = Engine.create();
  world = engine.world;
  roof = new Ground(240,410,110,20)
  
    b1 = new Bob(200,490,60,60);
    b2 = new Bob(220,490,60,60);
    b3 = new Bob(240,490,60,60);
    b4 = new Bob(260,490,60,60);
    b5 = new Bob(280,490,60,60);

   rope1 = new Chain (b1.body,{x:200,y:410});
   rope2 = new Chain (b2.body,{x:220,y:410});
   rope3 = new Chain (b3.body,{x:240,y:410});
   rope4 = new Chain (b4.body,{x:260,y:410});
   rope5 = new Chain (b5.body,{x:280,y:410});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(04,50,220);
  roof.display();
  
 rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  drawSprites();
 
}
