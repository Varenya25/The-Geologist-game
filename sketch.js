const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1, rubber1, iron1, stone1, plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer1 = new Hammer(10,100);
    stone1 = new stone(100,200);
    iron1 = new iron(300,300);
    rubber1= new rubber(600,100,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer1.display();
    iron1.display();
    stone1.display();
    rubber1.display();
}