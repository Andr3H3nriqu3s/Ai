var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;
var mape;
var player;

function setup() {
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;
    player = new Player(0,0);
}

function draw() {
    background(51);
    player.show();
}
