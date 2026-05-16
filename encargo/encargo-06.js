// # encargo 06 pelota rebota 
// exploracion de variables y tiempo 
let posx =400;
let posy = 150;
let sentidox = 1;
let sentidoy = 1;
let diametro = 100;
let colorEllipse = 0;
let maxDiametro = 280;
let velocidad = 10;




function setup() {
  createCanvas(800, 600);
  
  
  colorMode(HSB, 360, 100, 100);
  frameRate(40);
}

function draw() {
  background(20);
  
  posx = posx + velocidad * sentidox;
  posy = posy + velocidad * sentidoy;
  
  if (posx > width - diametro /2) {
    sentidox =-1;
  
    //random y (numero de entre la velocidad que quiero)
    if (diametro < maxDiametro)
   { diametro = diametro +2;}
    colorEllipse = colorEllipse +30;
  }
  if(posx < 0 + diametro /2) {
    sentidox = 1;
    if (diametro<maxDiametro)
   // {diametro = diametro+ 5;}
    colorEllipse = colorEllipse + 30;
  }
  if (posy > height - diametro /2){
      sentidoy = -1;
      velocidad = random (5, 20);
    //velocidad = random (10, 10);
  
    if(diametro< maxDiametro)
    //{diametro = diametro +5;}
      colorEllipse = colorEllipse +30;
}
  if (posy < 0 + diametro /2){
    sentidoy = 1;
    
    if (diametro< maxDiametro)
   
// {diametro = diametro +5;}
    colorEllipse =colorEllipse +30;
    
  }
   if (colorEllipse>360){
     colorEllipse= 0;
   }
diametro = 100+ 20 * sin(frameCount*0.1);
  //100 es el diametro, 20 la amplitud que   quiero dar, ultimo velocidad 
//sin le da la funcion de seno con un angulo de radianes que devuelve en -1 y 1
  //diametro = frameCount 
  push();
  translate(posx, posy);
  fill(colorEllipse, 100, 100);
  ellipse(0, 0, diametro, diametro);
  pop();
  
}
