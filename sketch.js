const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground1,SlingShot1,ball0,ground2,score=0;



function setup() {
  createCanvas(2000,400);
  engine = Engine.create();
  world = engine.world;
  // createSprite(400, 200, 50, 50);

  box1=new Box(470,315,50,40);
  box2=new Box(415,315,50,40);
  box3=new Box(525,315,50,40);
  box4=new Box(580,315,50,40);
  box5=new Box(635,315,50,40);
  box6=new Box(360,315,50,40);
  box7=new Box(305,315,50,40);
  box8=new Box(360,260,50,40);
  box9=new Box(415,260,50,40);
  box10=new Box(470,260,50,40);
  box11=new Box(525,260,50,40);
  box12=new Box(580,260,50,40);
  box13=new Box(525,205,50,40);
  box14=new Box(415,205,50,40);
  box15=new Box(470,205,50,40);
  box16=new Box(450,150,50,40);
  box17=new Box(505,150,50,40);
  box18=new Box(475,95,50,40);
 
  ground1=new Ground(500,320,450,20);
  ground2=new Ground(50,400,4000,10);
  ball0=new ball(100,200,30,30);
  SlingShot1=new SlingShot(ball0.body,{x:100,y:200});

  
 
}

function draw() {
  background(244, 208, 63);  

  Engine.update(engine);
  
  fill(255, 87, 34);
  textSize(40);
  text("Score :"+score,600,50);
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ball0.display();
  ground2.display();
  SlingShot1.display();
  // box19.display();
  // box20.display();
  ground1.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

}


function mouseDragged(){
  Matter.Body.setPosition(ball0.body,{x:mouseX,y:mouseY});


}

function mouseReleased(){
  SlingShot1.fly();
  //gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    SlingShot1.attach(ball0.body);   

  }

}