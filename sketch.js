//variables of all sprites
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2,side3;

//adding objects to physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading images
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {

	//creating the canvas
	createCanvas(800, 700);
	rectMode(CENTER);
	
    //creating the package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//creating helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating engine
	engine = Engine.create();
	world = engine.world;
	side1= new Ground(500,670,200,20);
	side2= new Ground(400,620,20,100);
	side3= new Ground(600,620,20,100);

	//create package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    //running the engine
	Engine.run(engine);
  
}

//draw funtion
function draw() {
  
  //making the package to come in the center
  rectMode(CENTER);

  //background
  background(0);

  //giving the position of package body to package
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y;

  //calling key pressed function
  keyPressed(); 

  //drawing all sprites
  drawSprites();
  side1.display();
  side2.display();
  side3.display();
 
}

//function key pressed to make the package fall when we press down arrow key
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
  }
}



