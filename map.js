function Mape() {
    let options = {
        isStatic:true,
        friction : 1
    }
    this.body = Bodies.rectangle(0, 335, width, 100, options);
    this.bodyTop = Bodies.rectangle(0, -50, width, 100,options);
    World.add(world, this.body);
    World.add(world, this.bodyTop);
    this.objs = [];
    //this.blocksize;
    //this.blockheigh;

    this.floor = function() {
        fill(255);
        push();
        translate(0, 300);
        rect(0,0,width, 100);
        pop();
        push();
        translate(this.bodyTop.position.x, this.bodyTop.position.y);
        rect(0,0 ,width, 100);
        pop();
    }

    let b = true;

    this.tick = function() {
        this.floor();
        if (b) {
            b = false;
            let obj = new Obj(width);
            this.objs.push(obj);
        }

        for (let a in this.objs) {
            let c = this.objs[a];
            c.tick();
        }
    }

}

function Obj(x) {

    this.tick = function() {
        if ( x < 0) {
            x = width;
            fit++;
        }
        x -= 2 + fit;

        if (collideRectRect(player.body.position.x, player.body.position.y, 30, 30, /*2nd  rect*/ x , 270, 30, 30)) {
            //console.log("collide");
            fit = 0;
            player.body.force.y = -0.04;
            x = width;
        }

        fill(255, 0, 0);
        push();
        //let pos = this.body.position;
        translate(x, 270);
        rect(0,0,30,30);
        pop();
    }
}
