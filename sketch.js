var music;
var box;
var surface1,surface2,surface3,surface4;
var edge1,edge2,edge3,edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(110,570,180,30);
    surface1.shapeColor="red";
    surface2=createSprite(310,570,180,30);
    surface2.shapeColor="yellow";
    surface3=createSprite(510,570,180,30);
    surface3.shapeColor="green";
    surface4=createSprite(700,570,170,30);
    surface4.shapeColor="blue";
    
    
    //create box sprite and give velocity
    
    box=createSprite(random(20,750),30,30,30);
    box.shapeColor="white";
    box.velocityX=10;
    box.velocityY=10;
    
}

function draw() {
    background("black");
    
    
    edge1=createSprite(5,300,10,600);
    edge1.shapeColor="black";
    edge2=createSprite(795,300,10,600);
    edge2.shapeColor="black";
    edge3=createSprite(400,5,800,10);
    edge3.shapeColor="black";
    edge4=createSprite(400,595,800,10);
    edge4.shapeColor="black";

    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);

    

    if(surface1.isTouching(box)){
        box.shapeColor="red";
        box.bounceOff(surface1);
        
     }
     if(surface2.isTouching(box)){
      music.play();
      box.shapeColor="yellow";
      box.bounceOff(surface2);
      box.velocityX=0;
      box.velocityY=0;
      
   }
   if(surface3.isTouching(box)){
      box.shapeColor="green";
      box.bounceOff(surface3);
   }
   if(surface4.isTouching(box)){
      box.shapeColor="blue";
      box.bounceOff(surface4);
      
   }
        
      
      drawSprites();
    }
    

 
  
    
        
    
