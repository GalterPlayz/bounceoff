const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(200,390,390,50);
    box1=new Box(200,100,50,50);
    box2=new Box(230,300,50,50);

    
}

function draw(){
    background("purple");
    Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  

}