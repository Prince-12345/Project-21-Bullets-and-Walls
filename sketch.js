var bullet, wall;
var speed,weight,damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);
  bullet=createSprite(50, 200, 40, 5);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  
}

function draw() {
  background(255,100,255); 


 if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  console.log(damage);
  drawSprites();
  }

 
