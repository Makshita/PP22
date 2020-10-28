var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1
var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	ground1Sprite=createSprite(width/2, height-35, width,10);

	
	wall1=createSprite(width/2, height-51, 200,20);
	wall2=createSprite(width/2.6, height-100, 20,100);
	wall3=createSprite(width-310, height-100, 20,100);

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 ground1 = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, ground1);
  ground1.visibility="false";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);	
    
  }

  if (keyCode === LEFT_ARROW) {
    packageBody.velocityx=-4;
  }






}



