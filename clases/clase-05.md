**clase 05 /24-abril**

# repaso clase pasada 

**crear variables de colores** 

fuera del setup debo declarar mi variable. Ej: let verdeClaro;

dentro del setup ebes asignar el color a la variable. Ej: verdeClaro = (250, 20, 20);

**random()** generar rangos "aleatorio"

# clase hoy 

craer grillas con lineas 

hay como que partir el liezo y.

line(width/3, 0, width/3, height);

line(width/3)*2, 0, (width/3)*2, height);

**guardar la posicion del mouse**

para permitir interactividad en el lienzo posMouseX= mouseX;

**ocultar cursor**
noCursor;

# operadores

con los operadores podemos usar mas de una condicion a la vez 

**operador AND**

integrar varias condiciones en una, ocurrira siempre que se gatillen todas. Ej:metro y micro = llego a casa 

**operador OR**

integrar varias condiciones, ocurrira todo cuando se gatille una 

**aplicacion en codigo**
se usan operadores para combinar condiciones 

(ll) significa "o"

if(posX>200 || posX<300){
direccion= direccion*-1;
}

# poner imagenes 

fijarse en el nombre del archivo y en la extension de este ( jpg, png, mp3, etc)

nombre sin espacio, tilde o simbolos

- ir a sketch file +
  
- dentro del sketch declarar una variable a la que le asignaremos la imagen
  
  **en setup**

  nombreImagen = loadImage("./imagenDescargada.png");
  
 el simbolo de "./" se usa para buscar archivos dentro del mismo lugar donde está tu código.

 -luegfo en el draw ponemos nuestra imagen 

 function draw(){
    image(nombreImagen, width/2, height/2, 100,100);
}


  **sintaxis de loadImage()** image(variableDeImagen, posicionX, posicionY, ancho, alto);

  # subir imagenes a gitHub
  dentro de carpeta clase 05, crear una carpeta de imagenes y dentro de esa carpetra subir el png 

  # encargo 06

  agregar codigo a solemne que exporte el sketch en png 

  function mousePressed(){

    saveCanvas('solemne1-apellido-nombre', 'png');
}

 # encargo 07 / akrilla

 -rebote en eje vertical
 - cambie de velocidad aleatoriamnente
 - cambiar color de fondo
 - cambiar imagen
   

 
  

  
  








