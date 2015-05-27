setInterval(function () {
    main();
}, 10);

Number.prototype.toRad = function () {
    return this * Math.PI / 180;
};

var player = new Player();
function main() {
    if (input.isDown('UP'))
        player.speedUp();
    else if (player.speed < 0.075)
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