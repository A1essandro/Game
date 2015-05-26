setInterval(function () {
    main();
}, 10);

Number.prototype.toRad = function () {
    return this * Math.PI / 180;
};

Player = function () {
    this.speed = 0;
    this.acceleration = 0.01;
    this.rotation = 0;
    this.rotationSpeed = 2;
    this.position = {
        x: 0,
        y: 0
    };
    this.update = function () {
        this.position.x += Math.sin(this.rotation.toRad()) * this.speed;
        this.position.y += -Math.cos(this.rotation.toRad()) * this.speed;
        $('#player').css({top: this.position.y});
        $('#player').css({left: this.position.x});
        $('#player').css({'-webkit-transform': 'rotate(' + this.rotation + 'deg)',
            '-moz-transform': 'rotate(' + this.rotation + 'deg)',
            '-ms-transform': 'rotate(' + this.rotation + 'deg)',
            'transform': 'rotate(' + this.rotation + 'deg)'});
    };
    this.rotate = function (deg) {
        this.speed *= 0.99;
        speedFactor = this.speed / 2.5 + 1
        console.log(speedFactor);
        this.rotation += this.rotationSpeed * deg / speedFactor;
    };
    this.speedUp = function () {
        if(this.speed < 1000 * this.acceleration)
            player.speed += player.acceleration;
    };
};


var player = new Player();
function main() {
    if (input.isDown('UP'))
        player.speedUp();
    else if(player.speed < 0.075)
        player.speed = 0;
    else
        player.speed *= 0.995;

    if (input.isDown('DOWN'))
        player.speed *= 0.98;

    if (input.isDown('LEFT'))
        player.rotate(-1);
    if (input.isDown('RIGHT'))
        player.rotate(1);

    player.update();
}