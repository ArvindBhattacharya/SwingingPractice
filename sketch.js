const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, field;
var ball, plr, string;
var obj1, high, swing, val;

engine: engine;

function preload(){
    swing = loadSound("BatSwing.mp3");
    field = loadImage("field.png");
}

function setup(){
  createCanvas(800,800);
    engine = Engine.create();
    world = engine.world
    ball = new Ball(400,200, 25)
    plr = new Ball(400,600,30)
    obj1 = new Ball(400,-100,20)
    plr.body.isStatic = true
    string = new Slingshot(ball.body,plr.body)
    high = 0
    textSize(30);
    textFont("Verdana");
    val = 30
}

function draw(){
    background("SkyBlue");
    image(field,50,100,700,700)
    Engine.update(engine);
    ball.display();
    plr.display();
    obj1.display();
    if (mouseX < 500 || mouseX > 300)
    {
        console.log(mouseX)
        Matter.Body.setPosition(plr.body,{x:mouseX,y:600});
    }
    
    var1 = Math.round(obj1.body.speed)
    text("ball's speed: " + Math.round(obj1.body.speed) + " pixels per frame", 0, 25);
    text("highest speed: " + high + " pixels per frame",0,50);
    if (val > 30){
    text("swing speed: " + Math.round(val) + " pixels per frame",0,75)
    }
    if (Math.round(obj1.body.speed) > high){
        high = Math.round(obj1.body.speed);
    }
    if((obj1.body.speed) > val){
     swing.play();
     val = (obj1.body.speed)
    }
    if(obj1.body.position.y > 700){
        obj1.body.isStatic = true   
    }
}

function keyPressed(){
    if(keyCode == 82){
      obj1 = new Ball(400,-100,20)
      val = 30
    }
}