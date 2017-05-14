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
var printSquare;

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
    printSquare = false;
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
    //world.gravity.y = 1 + fit;

    textSize(15);
    fill(255, 0, 0);
    text("N:" + manager.toTest, 60,450, 40, 40);
    text ("G:" + manager.generation, 60 + 40 + 10, 450, 40, 40);
    text("d:" + (mape.objs.x - (player.body.position.x + 30)), 60 + 40 + 10 + 40 +10, 450, 40, 40);
    text("fit" + fit, 60 + 40 + 10 + 40 + 10 + 40 + 10, 450, 40 ,40);

    if (ai && !ftime && printSquare) {
        push();
        translate(player.body.position.x + 30,player.body.position.y - 5);
        fill(0,255, 0);
<<<<<<< HEAD
        let dna = manager.playersai[manager.toTest].dna;
        let min = 0;
        let max = 0;
        if (dna.fitm == fit) {
            console.log("active");
            if (dna.nmfitmch) {
                //case mut mingit
=======
        let actplayer = manager.playersai[manager.toTest].dna;
        let min = 0;
        let max = 0;
        if (dna.fitm == fit) {
            if (dna.nmfitmch) {
                //case mut min
>>>>>>> parent of 920258c... Revert "to reset"
                    max = dna.max;
                    min = dna.min + dna.fitmch;
            } else {
                //case mut max
                    min = dna.min;
                    max = dna.max + dna.fitmch;
            }
        } else {
            min = manager.playersai[manager.toTest].dna.min;
            max = manager.playersai[manager.toTest].dna.max;
        }
        rect(0 + min ,0, 0 + max, 10);
        pop();
    }
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
        player.body.force.y -= 0.03 /*+ (fit % 39) / 100;*/
        //console.log(player.body.force.y);
    }
}

function randomBoll() {
    return (floor(random(0, 100)) > 50) ? true : false;
}
