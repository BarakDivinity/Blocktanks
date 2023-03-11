var sprite1,sprite2,sprite3,sprite4,sprite5,sprite6,sprite7,sprite8,sprite9,sprite10,sprite11,sprite12,sprite13;
var sprite14,sprite15,sprite16,sprite17,sprite18,sprite19,sprite20,sprite21,sprite22,sprite23,sprite24,sprite25;
var sprite26,sprite27,sprite28,sprite29;
var tank,cursor,shooter,bombImg;
var cursorImg,angle;
var angle,gun;

function preload(){
  shooterImg=loadImage("Images/Shooter.png");
  bombImg=loadImage("Images/ShooterCircle.png");
}

function setup(){
    createCanvas(1300,650);

    tank=createSprite(500,300,55,55);
    tank.shapeColor="#E72B2B";

    shooter=createSprite(tank.x,tank.y-10,10,60);
    shooter.addImage(shooterImg);
    shooter.scale=0.35;
    shooter.debug=true;
    shooter.setCollider("rectangle",50,-50,80,80);
   
    //bomb=createSprite(tank.x,tank.y,23,12);
    //bomb.addImage(bombImg);
    //bomb.scale=0.6;

    sprite1=createSprite(0,325,30,1000);
    sprite2=createSprite(1300,325,30,1000);
    sprite3=createSprite(650,-160,1300,30);
    sprite4=createSprite(650,810,1300,30);
    sprite5=createSprite(95,-120,40,70);
    sprite6=createSprite(95,15,40,70);
    sprite7=createSprite(55,70,120,40);
    sprite8=createSprite(55,700,100,40);
    sprite9=createSprite(1200,-120,40,70);
    sprite10=createSprite(1200,15,40,70);
    sprite11=createSprite(1240,70,120,40);

    sprite12=createSprite(45,-115,60,60);
    sprite12.shapeColor="black";
    sprite13=createSprite(45,20,60,80);
    sprite13.shapeColor="black";
    sprite14=createSprite(60,755,90,75);
    sprite14.shapeColor="black";
    sprite15=createSprite(1252,-115,68,60);
    sprite15.shapeColor="black"
    sprite16=createSprite(1252,15,66,70);
    sprite16.shapeColor="black"
    sprite29=createSprite(1125,535,100,90);
    sprite29.shapeColor="black";
    
    sprite17=createSprite(940,750,30,130);
    sprite18=createSprite(650,325,200,30);
    sprite19=createSprite(650,75,400,30);
    sprite20=createSprite(650,125,30,125);
    sprite21=createSprite(250,170,250,30);
    sprite22=createSprite(1050,170,250,30);
    sprite23=createSprite(210,380,30,400);
    sprite24=createSprite(160,480,80,30);
    sprite25=createSprite(1090,320,30,290);
    sprite26=createSprite(1050,480,250,30);
    sprite27=createSprite(1160,535,30,90);
    sprite28=createSprite(1125,595,100,30);

}

function draw(){
  background("white");

  //bomb.x=tank.x;
  //bomb.y=tank.y;

  shooter.x=tank.x;
  shooter.y=tank.y-10;

  push();
  translate(tank.width/2, tank.height/2);
  angle = atan2(mouseY - height / 2, mouseX - width / 2);
  rotate(angle);
  shooter.rotation = angle;
  pop();

  keyPressed();

  cursor(CROSS,mouseX,mouseY);

  tank.collide(sprite1);
  tank.collide(sprite2);
  tank.collide(sprite3);
  tank.collide(sprite4);
  tank.collide(sprite5);
  tank.collide(sprite6);
  tank.collide(sprite7);
  tank.collide(sprite8);
  tank.collide(sprite9);
  tank.collide(sprite10);
  tank.collide(sprite11);
  tank.collide(sprite17);
  tank.collide(sprite18);
  tank.collide(sprite19);
  tank.collide(sprite20);
  tank.collide(sprite21);
  tank.collide(sprite22);
  tank.collide(sprite23);
  tank.collide(sprite24);
  tank.collide(sprite25);
  tank.collide(sprite26);
  tank.collide(sprite27);
  tank.collide(sprite28);

  /*bomb.collide(sprite1);
  bomb.collide(sprite2);
  bomb.collide(sprite3);
  bomb.collide(sprite4);
  bomb.collide(sprite5);
  bomb.collide(sprite6);
  bomb.collide(sprite7);
  bomb.collide(sprite8);
  bomb.collide(sprite9);
  bomb.collide(sprite10);
  bomb.collide(sprite11);
  bomb.collide(sprite17);
  bomb.collide(sprite18);
  bomb.collide(sprite19);
  bomb.collide(sprite20);
  bomb.collide(sprite21);
  bomb.collide(sprite22);
  bomb.collide(sprite23);
  bomb.collide(sprite24);
  bomb.collide(sprite25);
  bomb.collide(sprite26);
  bomb.collide(sprite27);
  bomb.collide(sprite28);*/

  camera.position.x=tank.x;
  camera.position.y=tank.y;

  drawSprites();
}

function keyPressed(){
  
  if(keyDown(83)){
    tank.position.y=tank.position.y+5;
    shooter.position.y=shooter.position.y+5;
  }

  if(keyDown(87)){
    tank.position.y=tank.position.y-5;
    shooter.position.y=shooter.position.y-5;
  }

  if(keyDown(68)){
    tank.position.x=tank.position.x+5;
    shooter.position.x=shooter.position.x+5;
  }

  if(keyDown(65)){
    tank.position.x=tank.position.x-5;
    shooter.position.x=shooter.position.x-5;
  }
}
