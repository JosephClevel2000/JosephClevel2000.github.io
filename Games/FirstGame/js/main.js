const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1380;
const CANVAS_HEIGHT = canvas.height = 712;
const node = document.getElementById('canvas1');


const playerImage = new Image();
playerImage.src ='Chickens.png';
const spriteWidth = 48;
const spriteHeight = 48;
let frameX = 0;
let frameY = 2;
let gameFrame = 0;
const staggerFrame = 15;
let posX = 0;
let posY = 0;


function animateRight(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);

  if (gameFrame % staggerFrame == 0){
  if(frameY < 3) frameY++;
  else frameY = 2;
  posX++;
  }

  gameFrame++;
  requestAnimationFrame(animateRight);
};

function handleKeydown(event) {
  const key = event.key;
  switch (event.key) {
    case "ArrowLeft":
        // Left pressed
        break;
    case "ArrowRight":
        animateRight();
        break;
    case "ArrowUp":
        // Up pressed
        break;
    case "ArrowDown":
        // Down pressed
        break;
}};

node.addEventListener('keydown', handleKeydown);
