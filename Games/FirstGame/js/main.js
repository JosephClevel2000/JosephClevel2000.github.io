const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1380;
const CANVAS_HEIGHT = canvas.height = 712;


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


function animate(keyInput){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  if(keyInput == 1){
  if (gameFrame % staggerFrame == 0){
  if(frameY < 3) frameY++;
  else frameY = 2;
  }
  gameFrame++;
  requestAnimationFrame(animate);
  }
  else if(keyInput == 2){
  if (gameFrame % staggerFrame == 0){
  if(frameY < 1) frameY++;
  else frameY = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
  }
};

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowDown":
      // code for "down arrow" key press.
      break;
    case "ArrowUp":
      // code for "up arrow" key press.
      break;
    case "ArrowLeft":
      animate(2);
      break;
    case "ArrowRight":
      animate(1);
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
