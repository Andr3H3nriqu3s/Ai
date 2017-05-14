function Player(x, y) {
    this.body = Bodies.rectangle(x, y, 30, 30);
    World.add(world, this.body);
}

Player.prototype.tick = function() {
    this.body.motion = 1;
    show();
}

Player.prototype.show = function() {
    fill(0, 0, 255);
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rect(0,0, 30,30);
    pop();
}
