let anguloBD = 0;
let anguloBE = 0;

function draw() {
  createCanvas(400, 400);
	background(200)
  fill(0);
	
	//cabeça
	push()
	translate(width/2,80)
  rect(-30,-60, 60, 60);
	pop()
		
  //tronco
  push();
  translate(width/2,20)
  rect(-60,80, 120, 120)
  pop();

  //PD
  push();
  translate(160,225)
  rect(-20,0, 40, 120)
  pop();

  //PE
  push();
  translate(240,225)
  rect(-20,0, 40, 120)
  pop();
			
	//BD rotate
  push();
  translate(130,120)
  rotate(radians(anguloBD))
  rect(-100,-20, 100, 40)
  pop();

  //BE rotate
	push();
  translate(270,120)
  rotate(radians(anguloBE))
  rect(0,-20, 100, 40)
  pop();

  //Texto
  push()
  translate(0,350)
  textSize(10)
	fill(0)
  textAlign(CENTER, BOTTOM);
	text("Pressione: e para levantar o braço esquerdo; d para levantar o braço direito", 200, 40)
  pop()
}



function keyPressed() {

	//Balança BD
  if (keyCode === 68 & anguloBD == 0) {
    anguloBD = 30;
  } else if (keyCode === 68 & anguloBD == 30) {
    anguloBD = 0;
  }
  //Balnça BE 
  if (keyCode === 69 & anguloBE == 0) {
    anguloBE = -30;
  } else if (keyCode === 69 & anguloBE == -30) {
    anguloBE = 0;
  }

}

function display_hud() {
	var t = 'Pressione: E para levantar o braço esquero; l para linha; r para retĂ¢ngulo; e para elipse';
	text(s, width/2, height-40);	
	s = 'Pressione i para mostrar/ocultar info na tela';
	text(s, width/2, height-20);
}