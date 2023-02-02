
var n = 0; //Numero de elemento
var c; //Espacio entre los circulos
var tam; //Tamaño de los circulos

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
  tamFilo();
}

function draw() {
  
  //Formula para la filotaxis
  var a = n * 137.6; //Angulo (137.3, 137.5, 137,6)
  var r = c *sqrt(n);

  //Transforma los angulos a coordenadas X y Y
  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;

  //Dibujar circulos
  fill((a - r) % 120, 120, 120);
  noStroke();
  ellipse(x, y, (a - r) % tam, (a - r) % tam);
  n++;

  //Detiene el loop al llegar a la distancia determinada
  if (x >= width - 50) {
    noLoop();
  }

}

//Reinicia los valores al hacer click
function mouseClicked(){

  background(0);
  n = 0;
  tamFilo();
  loop();
  
}


//Determina el tamaño de los circulos y el espacio entre ellos
function tamFilo(){

  tam = round(random(8, 20));
  c = tam;

}

