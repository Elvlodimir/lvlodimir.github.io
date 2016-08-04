//2016 08 04 jueves
//colegio oratorio don bosco
//santiago de chile
//latinoamerica
//clase de programacion
//funciona con p5.js
//Pablo cambi
//jajaja salu2


var diametro;
diametro = 100;

//setup() corre una vez
//al principio







function setup() {	
//creo un lienzo
//createCanvas(dimHor , dimVer);   
//pinta el fondo verde    
     
	createCanvas(800, 600

);
	background(0,255,0);

}

//draw() se ejecuta despues
//de setup
//se hace 60 veces por segundo




function draw() {

//definir estilo de la elipse
//definir ancho del borde
//strokeWeight(px);
strokeWeight(10);


//definir color del borde

//stroke(color);

//explicacion de color
//1 : grayscale, 0 es negro 255 es blanco
//2 : grayscale + alpha
//3 : RGB, red,green blue
//4 : RGB + alpha
//alpha: 0 es transparente ,255 es solido
stroke (0,0,255,255/2);



//definir color de relleno
//fill(color)
//morado semitransparente

fill(255*mouseX/width, 0, 0);






//dibujar elipse 
//que sigue al mouse
//ellipse(posX, posY, width, height);
ellipse(mouseX, mouseY, diametro, diametro);

diametro = diametro = 500;



}