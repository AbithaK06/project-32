const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var ball_img;
var bowlingPin_img;

function preload(){
  ball_img=loadImage("metalBall.png");
  bowlingPin_img = loadImage("bowlingPin_img.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(800,250,195,5);
  stand2 = new Stand(800,150,200,5);
 

  pin1 = Bodies.circle(700,300,20,40);
  World.add(world,pin1)
  pin2 = Bodies.circle(750,150,20,40);
  World.add(world,pin2)
  pin3 = Bodies.circle(800,150,20,40);
  World.add(world,pin3)
  pin4 = Bodies.circle(700,300,20,40);
  World.add(world,pin4)
  pin5 = Bodies.circle(750,300,20,40);
  World.add(world,pin5)

  polygon = Bodies.circle(50,200,50,50);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background("lightblue"); 
  textSize(20);
  fill("red");
  text("Drag the polygon to destroy the blocks",50,50);
  textSize(20);
  text("50",800 ,200);
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  
  //fill("gold");
  imageMode(CENTER)
  image(ball_img ,polygon.position.x,polygon.position.y,50,50);
  slingShot.display();

  //fill("red");
  //foreground(0, 200, 200);
  image(bowlingPin_img,pin1.position.x,pin1.position.y,20,40);
  image(bowlingPin_img,pin2.position.x,pin2.position.y,20,40);
  image(bowlingPin_img,pin3.position.x,pin3.position.y,20,40);
  image(bowlingPin_img,pin4.position.x,pin4.position.y,20,40);
  image(bowlingPin_img,pin5.position.x,pin5.position.y,20,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}