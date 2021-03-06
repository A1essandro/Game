setInterval(function () {
    main();
}, 10);

Number.prototype.toRad = function () {
    return this * Math.PI / 180;
};

var player = new Player(1);
function main() {
    if (input.isDown('UP'))
        player.speedUp(1);
    else if (input.isDown('DOWN'))
        player.speedUp(-1);
    else if (Math.abs(player.speed) < 0.01)
        player.speed = 0;
    else
        player.speed *= 0.995;

    if (input.isDown('LEFT'))
        player.rotate(-1);
    if (input.isDown('RIGHT'))
        player.rotate(1);
    if (input.isDown('SLEFT'))
        player.rotate(-0.2);
    if (input.isDown('SRIGHT'))
        player.rotate(0.2);

    if (input.isDown('SPACE'))
        player.shot();

    player.update();

    for (b = 0; b < bullets.length; b++) {
        if (bullets[b].out) {
            delete bullets[b];
            bullets.splice(b, 1);
        } else
            bullets[b].update();
    }
}