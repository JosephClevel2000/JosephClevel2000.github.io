const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1380;
const CANVAS_HEIGHT = canvas.height = 712;

//Variables for game
const playerImage = new Image();
playerImage.src ='Chickens.png';
const spriteWidth = 48;
const spriteHeight = 48;
let frameX = 0;
let frameY = 2;
let gameFrame = 0;
const staggerFrame = 15;
let frameBottom = 550;
let posX = 0;
let posY = frameBottom;


//Setting up player's initial start point
function initializePlayer(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  requestAnimationFrame(initializePlayer);
};
initializePlayer();

//Setting up enemy's start point

//Player Animation for movement
function animatePlayer(keyInput){
  
  if(keyInput == "rightTrue"{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  posX++;
  if (gameFrame % staggerFrame == 0){
  if(frameY < 3) frameY++;
  else frameY = 2;
  }
  gameFrame++;
  requestAnimationFrame(animatePlayer);
  }
  
  else if(keyInput == "leftTrue"){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  posX--;
  if (gameFrame % staggerFrame == 0){
  if(frameY < 1) frameY++;
  else frameY = 0;
  }
  gameFrame++;
  requestAnimationFrame(animatePlayer);
  }
  else if(keyInput == "rightFalse" || keyInput == "leftFalse" || keyInput == "upFalse"){
    return;
  }
};

//Getting key input from user, i.e. is key on
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowUp":
      // code for "up arrow" key press.
      break;
    case "ArrowLeft":
      animatePlayer("leftTrue");
      break;
    case "ArrowRight":
      animatePlayer("rightTrue");
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

//Getting key input from user, i.e. is key false
window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowUp":
      animePlayer('upFalse");
      break;
    case "ArrowLeft":
      animatePlayer("leftFalse");
      break;
    case "ArrowRight":
      animatePlayer("rightFalse");
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
