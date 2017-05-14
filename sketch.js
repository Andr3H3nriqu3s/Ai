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
var ftime;
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
    manager = new eng();
    ftime = true;
}

function draw() {
    if (!ftime) {
        //console.log("teste1");
        if (ai) {
            //console.log("teste");
            manager.tick();
        }
    }

    if (pause) {
        return;
    }
    if(fit != lfit) {
        lfit = fit;
        //console.log(fit);
        return;
    }
    background(51);
    Engine.update(engine);
    player.show();
    mape.tick();
    world.gravity.y = 1 + fit;

    textSize(15);
    fill(255, 0, 0);
    text("N:" + manager.toTest, 60,450, 40, 40);
    text ("G:" + manager.generation, 60 + 40 + 10, 450, 40, 40);
    text("d:" + (mape.objs.x - (player.body.position.x + 30)), 60 + 40 + 10 + 40 +10, 450, 40, 40);
    text("fit" + fit, 60 + 40 + 10 + 40 + 10 + 40 + 10, 450, 40 ,40);
}

function keyPressed() {
    if (ai) {
        return;
    }
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
