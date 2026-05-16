//# encargo 08 

//editar codigo akrilla ahora puka

let puca;
let posX = 150;
let posY = 0;
let dirY = 1;
let nvelY= 3;
let fondoColor = 220;
let dirX= 1;
let nvelX = 2;







function setup() {
  createCanvas(400, 400);
  
  puca = loadImage("./puca.jpg");
  colorMode (HSB, 360, 100, 100);
}




function draw() {
  background(fondoColor, 100, 100);
  
  
 
  image(puca, posX, posY, 100, 100);
  
   
  line(0, height*1/5, width, height*1/5);
 line(0, height*4/5, width, height*4/5);
  

  
  posY= posY +nvelY * dirY;
  posX = posX + nvelX *dirX 
  
  if (posY < height*1/5){
    dirY= 1;
    fondoColor = random (0, 360);
  }
  if (posY > height * 4/5-100){
    dirY=-1;
    fondoColor = random (0, 360);
    nvelY= random (5,20);
 }
  
  if (posX< 0){
    dirX = 1;
    fondoColor= random (0, 360);
    //nvelX = random (5, 20);
  }
  
  if ( posX > width -100){
    dirX = -1;
    fondoColor= random (0,360);
  }
  
  
}


 
  

