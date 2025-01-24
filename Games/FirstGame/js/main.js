const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1380;
const CANVAS_HEIGHT = canvas.height = 712;

//Variables for player
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

//Variables for enemy
const enemyImage = new Image();
enemyImage.src = 'Ferrets.png';
const enemyWidth = 48;
const enemyHeight = 48;
let frameEX = 0;
let frameEY = 2;
let posEX = 0;

//Other variables
const diesIrae = new Audio();
diesIrae.src = 'WeaselChasing.mp3';

//Is soundtrack loaded
diesIrae.addEventListener('canplaythrough', function() {
  soundTrack();
});

// Play the soundtrack
function soundTrack() {
  diesIrae.play().catch(error => {
    console.error("Error playing audio:", error);
  });
}


//Initializing player
function initializePlayer(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  if (gameFrame % staggerFrame == 0){
  if(frameY < 3) frameY++;
  else frameY = 2;
  }
  gameFrame++;
  requestAnimationFrame(initializePlayer);
};
initializePlayer();

//Initializing enemy

//Initializing background


//Player Animation for movement
function animatePlayer(keyInput){
  
  if(keyInput == "upTrue"){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  posY++;
  if (gameFrame % staggerFrame == 0){
  if(frameY < 1) frameY++;
  else frameY = 0;
  }
  
  gameFrame++;
  requestAnimationFrame(animatePlayer);
  }
};

//Getting key input from user, i.e. is key on
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "ArrowUp":
      animatePlayer("upTrue");
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
      animatePlayer("upFalse");
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
