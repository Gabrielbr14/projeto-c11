var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprrite (200,200);
path.addImage(pathImg);
path=velocityY = 4;
path.scale=1.2;




//Criando menino que corre 



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX;

edges= createEdgeSprite();
boy.collide(adges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);



 //Reiniciar o fundo
 



 drawSprites();

 }




