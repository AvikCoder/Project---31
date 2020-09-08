const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight = 250

function setup() {
  createCanvas(1000,700);
  

engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,690,480,20);
  corner1 = new Corner(-20,350,10,700);
  corner2 = new Corner(500,350,10,700);
  blocker = new Corner(750,20,500,10)

  for (var k = 0 ; k <= 480 ; k = k + 80) {
    divisions.push(new Division(k,height- divisionHeight/2,10 ,divisionHeight));
  }

  for(var i = 40 ;i <= 480; i = i+50){
    plinkos.push(new Plinko(i,75)) 
  }

  for (var k = 15 ; k <= 480 ; k = k+ 50){
    plinkos.push( new Plinko(k,115))
  }

  for (var a = 40 ; a <= 480 ; a=a+ 50){
   plinkos.push( new Plinko(a,155))
 }

 for (var t = 15 ; t <= 480 ; t = t+ 50){
   plinkos.push(new Plinko(t,195));
 }

 for (var i = 40 ; i<= 480 ; i = i+ 50){
   plinkos.push(new Plinko(i,235))
 }

 for (var i = 15 ; i<= 480 ; i = i+ 50){
  plinkos.push(new Plinko(i,275))
}

for (var i = 40 ; i<= 480 ; i = i+ 50){
  plinkos.push(new Plinko(i,315))
}

for (var i = 15 ; i<= 480 ; i = i+ 50){
  plinkos.push(new Plinko(i,355))
}

for (var i = 40 ; i<= 480 ; i = i+ 50){
  plinkos.push(new Plinko(i,395))
}



 Engine.run(engine);
}

function draw() {

background(0)
corner1.show();
corner2.show();



for (var t = 0 ; t< plinkos.length ; t++){
  plinkos[t].display();
}

for (var k = 0 ; k< divisions.length ; k++){
  divisions[k].display();
}


for (var a = 0 ; a < particles.length ; a = a+1){
  particles[a].display();
}

ground.display();
fill(0)
rect(750,10,490,30);
fill("white")
textSize(20)
textFont("mono")
text("click on the place where you want to spawn the ball",520,200)
}

function mouseClicked(){
  particles.push(new Particle(mouseX, 10,10))
}

