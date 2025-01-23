const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src ='Chickens.png';
const spriteWidth = 48;
const spriteHeight = 48;
let frameX = 0;
let frameY = 2;

const background = new Image();
const onload = startGame;
background.src = 'Farm.jpg';
context.drawImage(background, 0, 0, canvas.width, canvas.height);

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  //ctx.fillRect(50,50,100,100);
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  if(frameX < 10) framex++;
  else frameX = 0;
  requestAnimationFrame(animate);
};
animate();
