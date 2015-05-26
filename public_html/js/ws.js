setInterval(function () {
    main();
}, 10);

Number.prototype.toRad = function () {
    return this * Math.PI / 180;
};

Player = function () {
    this.speed = 0;
    this.acceleration = 0.1;
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
        this.speed *= 0.985;
        this.rotation += this.rotationSpeed * deg;
    };
    this.speedUp = function () {
        player.speed += player.acceleration;
        player.speed *= 0.97;
    };
};


var player = new Player();
function main() {
    if (input.isDown('UP'))
        player.speedUp();

    if (input.isDown('DOWN'))
        player.speed *= 0.93;

    if (player.speed < 0.075)
        player.speed = 0;

    if (input.isDown('LEFT'))
        player.rotate(-1);
    if (input.isDown('RIGHT'))
        player.rotate(1);

    player.update();
}