var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;
var mape;
var player;
var fit = 0;
var lfit = 0;

var btt;
var pause = false;
var ai = true;
var manager;

function setup() {
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;
    player = new Player( 60,0);
    mape = new Mape();
    btt = createButton('Pause');
    btt.position(0, 480);
    btt.mousePressed(function() {pause = !pause});
    manager = new AI();
}

function draw() {
    if (ai) {
        manager.tick();
    }
    if (pause) {
        return;
    }
    if(fit != lfit) {
        lfit = fit;
        console.log(fit);
        if (fit == 0) {
            pause = true;
        }

        if (ai) {
            manager.tick();
        }

        return;
    }
    background(51);
    Engine.update(engine);
    player.show();
    mape.tick();
    world.gravity.y = 1 + fit;
}

function keyPressed() {
    if (keyCode == 32) {
        keyboard();
    }
}

function keyboard() {
    if(floor(player.body.position.y) == 270) {
        player.body.force.y -= 0.03 + fit / 100;
        //console.log(player.body.force.y);
    }
}
