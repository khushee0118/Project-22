var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy
var fairyImg
var fairyVoice

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(1000, 750);

	fairy = createSprite(200,400,20,20);
	fairy.addImage(fairyImg);
	fairy.scale = 0.3;


	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30,20,20);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

 

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(keyDown(LEFT_ARROW)){
	  fairy.velocityX=-3
  }

  if(keyWentUp(LEFT_ARROW)){
	  fairy.velocityX=0;
  }

  if(keyDown(RIGHT_ARROW)){
	  fairy.velocityX=3;
  }

  if(keyWentUp(RIGHT_ARROW)){
	  fairy.velocityX=0;
  }

  if(star.y > 370 && starBody.position.y > 370){

	fairyVoice.play();
	  Matter.Body.setStatic(starBody,true);
  }

  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//if(keyCode === LEFT_ARROW){
		//fairy.velocityX=-1;
	
	//else if(keyCodeWentUp === LEFT_ARROW){
		//fairy.velocityX=0;
	

	//writw code to move fairy left and right
	
}
