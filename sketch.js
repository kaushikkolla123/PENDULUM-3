const Engine =Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint =Matter.Constraint;
var ground;
var engine,world;
var holder;
var ball;
var line1;
var line2;
var line3;


function setup(){
    createCanvas(600,600);
engine =Engine.create;
world = engine.world;

var ground_options = {
    isStatic:true,
}
var holder_options = {
    isStatic :true,
}
var line1_options = {}

var line2_options = {}

var line3_options = {}

ground = Bodies.rectangle(400,350,30,20,ground_options);
World.add(world,ground);

holder = Bodies.rectangle(130,50,30,10,holder_options);
World.add(world,holder);

line1 = Bodies.rectangle(10,330,50,10,line1_optons);
World.add(world,line1);

 line2 =Bodies.rectangle(550,500,30,10,line2_options);
 World.add(world,line2);

 line3 = Bodies.rectangle(550,10,30,10,line3_options);
 World.add(world,line3);

 var ball_options ={
restitution : 0.0085,
density:2.0,
 }

ball =bodies.circle(330,220,40,ball_options);
World.add(world,ball);

var options ={

bodyA : ball,
bodyB : holder,
stiffness:0.5,
length : 50,
}
var string = constraint.create(options);
World.add(world,string);

fill("white")


}
function draw(){
background("red");
engine.update(engine);

text("Oscillatory Motion of pendulum",130,30);
text("Press Enter to stop the Pendulum from oscillating",100,50);

fill("green");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,420,50);

fill("pink")
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,80);

fill("red");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);

if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;
}
}
