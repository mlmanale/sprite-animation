let player1;
let player2;
let player3;
let spriteSheet;
let otherSprite;
let ss;
let sx = 0;
let sy = 0;
let sw = 80;
let sh= 80;
let u =0, v =0;
let animationLength = 9;
let currentFrame = 0;
let dir =1;



function setup() {
  createCanvas(400, 400);
  player1 = new Character(40,40,80,80,spriteSheet,dir);
  player2 = new Character(100,100,80,80,otherSprite,dir);
  player3 = new Character (200,200, 80,80,thirdSprite,dir);
}

function preload() {
  spriteSheet = loadImage("assets/SpelunkyGuy.png");
  otherSprite = loadImage("assets/Green.png")
  thirdSprite = loadImage("assets/snake.png")
}
function draw() {
  background(220);
  imageMode(CENTER);
  player1.update();
  player2.update();
  player3.update();
  player1.xVelocity = 0;
  player2.xVelocity = 0;
  player3.xVelocity = 0;
  
  if(keyIsDown(LEFT_ARROW)) {
    player1.xVelocity = -5;
    player2.xVelocity = -5;
    player3.xVelocity = -5;
    player1.dir = -1;
    player2.dir = -1;
    player3.dir = -1;
    u = currentFrame % animationLength;
    currentFrame++;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    player1.xVelocity = 5;
    player2.xVelocity = 5;
    player3.xVelocity = 5;
    player1.dir = 1;
    player2.dir = 1;
    player3.dir = 1;
   u = currentFrame % animationLength;
   currentFrame++;
  }
  
}

class Character {
  constructor(x,y,height,width,ss,dir) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.xVelocity = 0;
    this.ss = ss;
    this.dir = dir;
  }
    draw() {
    push();
      scale(this.dir,1);
      image(this.ss, this.dir*this.x,this.y,sh,sw,u*sh,v*sw,sh,sw);
    pop();
    }
  update(){
    this.draw()
    this.x += this.xVelocity;
  }
  }