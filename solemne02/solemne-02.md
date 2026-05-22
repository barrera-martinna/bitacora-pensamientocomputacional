


# Plantilla para solemne-02
- [Link a sketch de P5.js]
https://editor.p5js.org/martinna/sketches/XJrix9dnz

## Integrantes del grupo

- Martinna Barrera [barrera_martina] (https://github.com/barrera-martinna)
## Descripción del disco


<img width="640" height="640" alt="naif" src="https://github.com/user-attachments/assets/482ca53a-589b-4d59-ab62-eb008c799295" />

- Naif
- Año del álbum: 2024
- Artista: Mercedesz
- Tracklist

```txt
Rotunda
Música
Pienso en violeta
Ven a verla
Hazme eterna
Y si no me queda más
Dime algo que no sepa (feat. Rioma)
Naïf
Recuerdo cuando
Tres medios
Nunca olvides tu canción
Lo que es amarle
Vida, Pasión y Muerte
```

- Aspecto del álbum a desarrollar (premisa)

>Temngo la idea de crear elipses de manera organica ya que de manera narrativa en las letras el album explora la introspeccion humana y la autonciencia. mi idea es que estas ellipses cambien de forma y de opacidad segun los frames, con una atmosfera espacial y minimalista que es la atmosfera  que se genera a traves de la composicion musical del album. 

## Conclusión del proceso

- Distancia entre premisa y resultado

>Logre representar el tema de la introspeccion y la autoconsciencia a traves de generar estos circulos que crecen desde un nterior hacia afuera, puse franjas de texto que contengan el nombre del album y del artiste para mayor representacion del album.


- Cosas no conseguidas

> Tenia la idea de hacer elipses que variaran su forma de manera organica y fuera variando su opacidad pero no lo logre. 

- Descubrimientos al trabajar

> logre entender el como crear funciones ayuda a organizar de mauyor manera el codigo en general y logre entender como se deben organuizar las funciones como en un sistema de capas. 

## Explicación del código (3 aspectos)

### Bloque de código 1

```js
// Tu pedazo de código acá
function dText(){
  //texto superior 
  fill(270, 100, 20); //color de texto
  textAlign(LEFT, TOP); //desde que punto se posiciona el texto 
  text ("NAIF NAIF NAIF NAIF NAIF NAIF NAIF ", x1, 1/6);
        //txt-posicion horizontal- pos,vertical 
  
  //txt inferior 
  fill(270, 100, 20);
  textAlign(LEFT, BOTTOM)
  text ("MERCEDESZ MERCEDEZ MERCEDEZ MERCEDEZ", x2, height - height /6)
  //en negativo para que este antes del borde inferior 
  
  //movimiento del texto 
  x1-= velocidad; //x1 disminuye ( mueve hacia izquierda)
  x2 += velocidad; //x2 suma (mueve hacia derecha)
  
  //creamos un loop el texto
  if (x1 <-800) x1 = width; 
  //si sale del borde izquierdo empieza rl loop desde x1
  if (x2 > width) x2 = -1000; 
 
```

### Bloque de código 2

```js
// Tu pedazo de código acá
function dEfectoCirculos(){
  noFill();
  for (let i =0; i< tamaños.length;i++){
    //la opacidad disminuye a medida que el circulo crece
    //map( valor, entra_min, entra_max, salida_min, entrada_max)
    let opacidad = map (tamaños[i], 0, 600, 0.8, 0);
    
    stroke(270, 100, 20, opacidad);
    
    //dibujar el circulo en el centro
    ellipse(width /2, height /2, tamaños[i]);
        
    //aumentar tamaño 
    tamaños[i] += 2;
    
    //loop: si el circulo es muy grande, vuelve a cero
    if(tamaños[i]> 600){
      tamaños [i] = 0;
    }
  } 
}


```

### Bloque de código 3

```js
// Tu pedazo de código acá
```

### Declaración sobre el uso de IA

- IA utilizada(s) y tipo de licencia (pago, gratuita)

>GEmini, versión gratuita

- Problema a resolver a través de la IA

>queria que mis frangas de texto fueran un texto infinito en movimiento y que no quedara nunca su espacio sin texto.

- Prompts utilizados

> le hice envio de mi codigo y luego le dije. Quiero que los textos que tengo de naif y mercedesz sean eternos como que nunca quede en blanco se espacio, como puedo hacer eso? explicame los codigos y todo bien detallado, no te saltes ningun paso, explicame cada linea.



- Secciones de código entregadas por la IA

```js
//código entregado por IA acá ( me hizo envio de toodo el codigo con la nueva funcion)

let x1 = 0; // Empezamos en 0 para que sea más fácil calcular el pegado
let x2 = 0;
let velocidad = 3;
let tamaños = [0, 100, 200, 300, 400, 500];

function setup() {
  createCanvas(600, 400);
  textFont('impact');
  textSize(50);
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(270, 20, 80);
  dEfectoCirculos();
  dText();
}

function dText() {
  // Definimos las frases en variables para poder medir su ancho
  let tSuperior = "NAIF NAIF NAIF NAIF NAIF NAIF NAIF ";
  let tInferior = "MERCEDESZ MERCEDEZ MERCEDEZ MERCEDEZ ";

  // MEDIMOS EL ANCHO: Esto nos dice cuántos píxeles mide cada frase
  let ancho1 = textWidth(tSuperior);
  let ancho2 = textWidth(tInferior);

  fill(270, 100, 20);

  // --- TEXTO SUPERIOR (Hacia la izquierda) ---
  textAlign(LEFT, TOP);
  // Dibujamos el texto original
  text(tSuperior, x1, height / 6);
  // DIBUJAMOS LA COPIA: justo donde termina el primero (x1 + ancho)
  text(tSuperior, x1 + ancho1, height / 6);

  // Movimiento
  x1 -= velocidad;

  // REINICIO INVISIBLE: 
  // Cuando el primer bloque sale por la izquierda, saltamos a 0.
  // Como el segundo bloque es idéntico, el ojo no nota el salto.
  if (x1 <= -ancho1) {
    x1 = 0;
  }

  // --- TEXTO INFERIOR (Hacia la derecha) ---
  textAlign(LEFT, BOTTOM);
  // Dibujamos el original
  text(tInferior, x2, height - height / 6);
  // DIBUJAMOS LA COPIA: a la izquierda del original (x2 - ancho)
  text(tInferior, x2 - ancho2, height - height / 6);

  // Movimiento
  x2 += velocidad;

  // REINICIO INVISIBLE:
  // Cuando el original se desplaza a la derecha, reseteamos al llegar al ancho.
  if (x2 >= ancho2) {
    x2 = 0;
  }
}

function dEfectoCirculos() {
  noFill();
  for (let i = 0; i < tamaños.length; i++) {
    let opacidad = map(tamaños[i], 0, 600, 0.8, 0);
    stroke(270, 100, 20, opacidad);
    ellipse(width / 2, height / 2, tamaños[i]);
    tamaños[i] += 2;
    if (tamaños[i] > 600) {
      tamaños[i] = 0;
    }
  }
}
```
