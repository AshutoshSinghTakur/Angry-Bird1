const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,450,70,70);
    box2 = new Box(920,450,70,70);
    box3 = new Box(700,380,70,70);
    box4 = new Box(920,380,70,70);
    box5 = new Box(810,270,70,70);
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(810,450);
    pig2 = new Pig(810,370);

    log1 = new Log(810,380,300,PI/2)
    log2 = new Log(810,300,300,PI/2)
    log3 = new Log(760,240,150,PI/7)
    log4 = new Log(870,240,150,-PI/7)

    bird = new Bird(100,100,)

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
    bird.display();
}