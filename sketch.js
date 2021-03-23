const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;  
var pig1;
var log1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,300,50,50);
    box2 = new Box(880,300,50,50);

    box3 = new Box(750,50,50,50);
    box4 = new Box(880,50,50,50);
    box5 = new Box(820 , 40 , 50 , 50)

    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(820 , 200);
    pig2 = new Pig(820 , 50);

    log1 = new Log(100 , 300 , 100 , PI/2)
    log2 = new Log(820 , 100 , 183 , PI/2)
    log3 = new Log(820 , 40 , 183 , PI/2);
    log4 = new Log(820 , 30 , 110 , -PI/7)
    log5 = new Log(820 , 30 , 110 , PI/7)

    bird1 = new Bird(100 , 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    bird1.display();
}