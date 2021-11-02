var trex ,trex_running;
var ground , invisible_Ground;
var cloud, cloudImage;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");

  obstacle2 = loadImage("obstacle2.png");

  obstacle3 = loadImage("obstacle3.png");

  obstacle4 = loadImage("obstacle4.png");

  obstacle5 = loadImage("obstacle5.png");

  obstacle6 = loadImage("obstacle6.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
 trex = createSprite(50, 160,20, 50);
 trex.addAnimation("running", trex_running);
 //crear sprite del suelo
 ground = createSprite(200, 180, 400, 20);
 ground.addImage("ground", groundImage);
 //Sprite del suelo invisible.
 invisible_Ground = createSprite(200, 190, 400, 10);
 invisible_Ground.visible=false;
 //Tamaño del Jugador.
 trex.scale=0.5;
 trex.x = 50;
 ground.velocityX = -4;
 ground.x = ground.width/2;

 //console.log(trex.y); 160
}

function draw(){
  background(180);
  //console.log(trex.y);
  //Hacemos que el Jugador salte al presionar el espacio. 
  if(keyDown("space") && trex.y >= 145){
    trex.velocityY=-10;
   }

   //Agregamos gravedad.
   trex.velocityY=trex.velocityY+0.5;

   //Restablece el Juego.
   if(ground.x<0){
     ground.x=ground.width/2;
   }

   //Evitar que el Jugador caiga.
   trex.collide(invisible_Ground);
   
   SpawnClouds();
   SpawnObstacles();
  drawSprites();  
  
}
function SpawnObstacles(){
  if(frameCount%60===0){
   var obstacle = createSprite(400, 165, 10, 40);
   obstacle.velocityX = -6;
   }
    //Generar obstaculos aleatorios.
    var rand = Math.round(random(1,6)); 
    switch(rand) { 
      case 1: obstacle.addImage(obstacle1); 
      break; 
 
      case 2: obstacle.addImage(obstacle2); 
      break;
    } 
    obstacle.scale = 0.5;
    obstacle.lifetime=350;
 }
function SpawnClouds(){
 if(frameCount%60===0){
 cloud = createSprite(600, 100, 40, 10);
 cloud.addImage(cloudImage);
 cloud.y = Math.round(random (10, 100));
 cloud.scale=0.5;
 cloud.velocityX = -3;

 //Asignar tiempo de vida a nuestras nubes 
 cloud.lifetime = 200;

 //Ajustar la velocidad
 cloud.depth=trex.depth;
 trex.depth=trex.depth+1;
 } 
}

 /*function SpawnObstacles(){
 if(frameCount%60===0){
  var obstacle = createSprite(400, 165, 10, 40);
  obstacle.velocityX = -6;
  }
   //Generar obstaculos aleatorios.
   var rand = Math.round(random(1,6)); 
   switch(rand) { 
     case 1: obstacle.addImage(obstacle1); 
     break; 

     case 2: obstacle.addImage(obstacle2); 
     break;
   } 
   obstacle.scale = 0.5;
   obstacle.lifetime=350;
*/