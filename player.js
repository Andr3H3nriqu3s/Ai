function Player(x, y) {
    this.body = Bodies.rectangle(x, y, 30, 20);
    World.add(world, this.body);
}

Player.prototype.show = function() {
    fill(0, 0, 255);
    let pos = this.body.position;
    translate(pos.x, pos.y);
    p5.rectangle(0,0,30,30);
}
