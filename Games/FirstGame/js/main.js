//Initial construction
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 960;
const CANVAS_HEIGHT = canvas.height = 540;

//Variables for player
const playerImage = new Image();
playerImage.src ='Chickens.png';
const spriteWidth = 48;
const spriteHeight = 48;
let frameX = 0;
let frameY = 2;
let gameFrame = 0;
const staggerFrame = 15;
let frameBottom = 220;
let posX = 400;
let posY = canvas.height - spriteHeight;
let isJumping = false;
let velocityY = 0;
const gravity = 0.1; // Strength of gravity

//Variables for enemy from  behind
const enemyImage = new Image();
enemyImage.src = 'Ferrets.png';
const enemyWidth = 32;
const enemyHeight = 32;
let frameEX = 0;
let frameEY = 2;
let posEX = 10;
let posEY = canvas.height - enemyHeight;
let gameFrameEnemy = 0;
const staggerFrameEnemy = 15;


//Variables for enemy from in front
const enemyLeftImage = new Image();
enemyLeftImage.src = 'FerretsLeft.png';
const enemyLeftWidth = 32;
const enemyLeftHeight = 32;
let frameELX = 7;
let frameELY = 2;
let posELX = 900;
let posELY = canvas.height - enemyLeftHeight;
let gameFrameEnemyLeft = 0;
let staggerFrameEnemyLeft = 10;
let multiplyDistance = 1;


//Sound variables
const diesIrae = new Audio();
diesIrae.src = 'DiesIrae.mp3';

//Background variables
const backgroundImage = new Image();
backgroundImage.src = 'Forest.png';
let back1 = 0;
let back2 = 960;
let gameSpeed = 2;
let backFrameX = 0;
let backFrameY = 0;
let backWidth = 640;
let backHeight = 342;
let backGameFrame = 0;

//Other variables
let score = 0;
const gameOverImage = new Image();
gameOverImage.src = 'GameOver.jpg';
let isOver = 0;
let counter = 1;

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

//Start gameloop once background has been loaded.
backgroundImage.onload = function() {
  gameLoop(); // Start the animation loop
};

//Putting animations together under one umbrella.
function gameLoop(){
  if(isOver == 1){
    ctx.drawImage(gameOverImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    return;
  }
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  background();
  initializePlayer();
  initializeEnemy();
  initializeEnemyLeft();
  detectCollision();
  totalScore();
  gameOver();
  playerMovement();
  requestAnimationFrame(gameLoop);
};

//Initializing background
function background(){
  if (!backgroundImage.complete) {
    console.error("Background image not loaded yet!");
    return; // Exit if image is not ready
  }
  ctx.drawImage(backgroundImage, back1, 0);
  ctx.drawImage(backgroundImage, back2, 0);
  if(back1 < -960) back1 = 960 + back2 - gameSpeed;
  else back1 -= gameSpeed;
  if(back2 < -960) back2 = 960 + back1 - gameSpeed;
  else back2 -= gameSpeed;
};

//Initializing player
function initializePlayer(){
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, posX, posY, spriteWidth, spriteHeight);
  if (gameFrame % staggerFrame == 0){
  if(frameY < 3) frameY++;
  else frameY = 2;
  }
  gameFrame++;
};

//Initializing enemy
function initializeEnemy(){
  ctx.drawImage(enemyImage, frameEX * enemyWidth, frameEY * enemyHeight, enemyWidth, enemyHeight, posEX, posEY, enemyWidth, enemyHeight);
  if (gameFrameEnemy % staggerFrameEnemy == 0){
   if(frameEX < 2) frameEX++;
    else frameEX = 0;
  }
  gameFrameEnemy++;
};

//Initializing enemy in front
function initializeEnemyLeft(){
  ctx.drawImage(enemyLeftImage, frameELX * enemyLeftWidth, frameELY * enemyLeftHeight, enemyLeftWidth, enemyLeftHeight, posELX, posELY, enemyLeftWidth, enemyLeftHeight);
  if (gameFrameEnemyLeft % staggerFrameEnemyLeft == 0){
    if(frameELX > 5) frameELX--;
    else frameELX = 7;
  }
  gameFrameEnemyLeft++;
  posELX-= multiplyDistance;
  if (posELX == 0) {
    posELX = 900;
    score = score + 10;
    counter++;
    if (multiplyDistance < 5 && counter % 5 == 0){
    multiplyDistance++;
    }
  }
};

//Detect collision

function detectCollision(){
if (posX < posELX + enemyLeftWidth &&
      posX + spriteWidth > posELX &&
      posY < posELY + enemyLeftHeight &&
      posY + spriteHeight > posELY) {
    posEX++;
}
};

//Gameover
function gameOver(){
if (posX < posEX + enemyWidth &&
   posX + spriteWidth > posEX &&
   posY < posEY + enemyHeight &&
   posY + spriteHeight > enemyHeight) {
    isOver = 1;
}
};

function totalScore(){
  ctx.font = "48px serif";
  ctx.strokeStyle = "white";
  ctx.fillText("SCORE: " + score, 20, 50);
};

//Player Animation for movement
function playerMovement() {
  if (isJumping) {
    posY += velocityY;
    velocityY += gravity;

    // Check for ground collision
    if (posY + spriteHeight > CANVAS_HEIGHT) {
      posY = CANVAS_HEIGHT - spriteHeight;
      velocityY = 0;
      isJumping = false;
    }
  }
};

document.addEventListener("keydown", (event) => {
  if ((event.key === ' ' || event.type === "click") && !isJumping) {
    isJumping = true;
    velocityY = -6; // Initial jump velocity
  }
});
