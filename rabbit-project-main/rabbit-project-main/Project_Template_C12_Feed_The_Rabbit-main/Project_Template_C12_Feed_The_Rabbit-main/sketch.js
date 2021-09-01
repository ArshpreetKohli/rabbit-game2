var garden,rabbit;
var gardenImg,rabbitImg,apple_img,apple,select_sprites,leaves,leaves_img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png");
leaves_img = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityY=-4
garden.scale=2

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var select_sprites=Math.round(random(1,2));
if (framecount % 60 === 0) {
  if(select_sprites==1){
    create_apples()
  }
  else {
    create_leaves()
  }
}

}
function create_leaves(){
  leaf=createSprite(random(50,300),40,10,10);
   leaf.addImage(leaves_img);
   leaf.velocityY=4
   leaf.scale=0.05
 }
 
function create_apples(){
  apple=createSprite(random(50,300),40,10,10);
  apple.addImage(apple_img);
  apple.scale=0.04
  apple.velocity===4
  apple.lifetime=400/2
}

function draw() {
  background(0);
  create_apples()
  create_leaves()
  edges= createEdgeSprites();
  rabbit.collide(edges);
if(garden.y<0){
  garden.y=200

}
  drawSprites();
}