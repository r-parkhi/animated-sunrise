//this program animates a sunrise

//variables
var y = 450;
var r = 40;
var cloudL = 150;
var cloudR = 350;

//setup canvas
function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  
//sky
background('#152c82'); //dark
if (y < 200)
  {
    background(126, 151, 242); //light
  }
  else if (y < 350)
  {
    background(82, 107, 196); //medium
  }
  
  //objects
  fill('#ebce2a');
  ellipse(250, y, r); //sun
  fill('#067a2b');
  rect(0, 400, 500, 500); //ground
  fill('#dde0ed');
  ellipse(cloudL, 50, 150, 50); //clouds
  ellipse(cloudR, 75, 120, 50);
 
//sun animation
 if (r < 110)
 {
  r += 0.5;
 }

 if (y > 130) 
 {
  y -= 1.5;
 }

//cloud animation
 if (cloudL <= 150)
 {
  cloudL -= 1;
 } 

 if (cloudR >= 350)
 {
  cloudR += 1;
 } 
  
}