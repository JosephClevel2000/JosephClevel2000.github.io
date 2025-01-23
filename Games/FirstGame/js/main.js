const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1380;
const CANVAS_HEIGHT = canvas.height = 712;

const playerImage = new Image();
playerImage.src ='Chickens.png';
const spriteWidth = 48;
const spriteHeight = 48;
let frameX = 0;
let frameY = 0;
let gameframe = 0;
const staggerFrame = 5;

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 10, 0, spriteWidth, spriteHeight);

  if (gameFrame % staggerFrame == 0){
  if(frameY < 4) frameY++;
  else frameY = 2;
  }

  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
