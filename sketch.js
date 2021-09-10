var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var box1,box2,box3,box4
var track;

function preload(){
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  box1=createSprite(60,600,20,20)
  box1.shapeColor="Red"
  box2=createSprite(120,600,20,20)
  box3=createSprite(180,600,20,20)
  box4=createSprite(240,600,20,20)
}


function draw(){
  background(rgb(198,135,103));
 image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
drawSprites();
}
