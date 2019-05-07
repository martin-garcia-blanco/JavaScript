window.addEventListener('load', function(){

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var GAME_WIDTH=640;
var GAME_HEIGHT = 360;
var sprites = {};
var gameLive = true;

var enemies = [
  {
    x: 100, //x coordinate
    y: 100, //y coordinate
    speedY: 8, //speed in Y
    w: 40, //width
    h: 40 //heght
  },
  {
    x: 200,
    y: 0,
    speedY: 5,
    w: 40,
    h: 40
  },
  {
    x: 330,
    y: 100,
    speedY: 4,
    w: 40,
    h: 40
  },
  {
    x: 450,
    y: 100,
    speedY: -5,
    w: 40,
    h: 40
  }
];


//the player object
var player = {
  x: 10,
  y: 160,
  speedX: 10,
  isMoving: false,  //keep track whether the player is moving or not
  w: 40,
  h: 40
};

//the goal object
var goal = {
  x: 580,
  y: 160,
  w: 50,
  h: 36
};

var movePlayer = function(){
  player.isMoving = true;
};

var moveStop = function(){
  player.isMoving = false;
};

canvas.addEventListener('mousedown', movePlayer);
canvas.addEventListener('mouseup', moveStop);
canvas.addEventListener('touchstart', movePlayer);
canvas.addEventListener('touchend', moveStop);

var load = function(){
  sprites.player = new Image();
  sprites.player.src = 'images/hero.png';

  sprites.backGround = new Image();
  sprites.backGround.src = 'images/floor.png';

  sprites.goal = new Image();
  sprites.goal.src = 'images/chest.png';

  sprites.enemy = new Image();
  sprites.enemy.src = 'images/enemy.png';


};

var update = function(){
  if(checkCollision(player,goal)){
    alert('You win!')
    player.x = 10;
    player.isMoving = false;
  }

  if(player.isMoving){
    player.x += player.speedX;
  }

  //update enemies

  enemies.forEach(function(element,index){
    if(checkCollision(player,element)){
      gameLive = false;
      alert('Game Over!\n Try it again!');
      window.location = "";
    }

    element.y += element.speedY;

    if(element.y <= 10){
      element.y = 10;
      element.speedY *= -1;
    } else if(element.y >= GAME_HEIGHT-50){
      element.y = GAME_HEIGHT - 50;
      element.speedY *= -1;
    }
  });
};


var draw = function(){
  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  ctx.drawImage(sprites.backGround, 0, 0);
  ctx.drawImage(sprites.player, player.x, player.y);
  ctx.drawImage(sprites.goal, goal.x, goal.y);
  enemies.forEach(function(element,index){
    ctx.drawImage(sprites.enemy, element.x, element.y);
  });
};

var step = function(){
  update();
  draw();
  if(gameLive){
    window.requestAnimationFrame(step);
  }
};

var checkCollision = function(rect1, rect2){

  var closeWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
  var closeHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);

  return closeWidth && closeHeight
};

//Inicio
load();
step();


});
