Bullet = function (player, id) {

    this.caliber = player.weapon.caliber;
    this.speed = player.weapon.speed + player.speed / 2;
    $('#map').append('<div class="bullet" id="bullet' + id +
            '" style="width:' + this.caliber / 5 + 'vh; height: ' +
            this.speed + 'vh;"></div>');
    this.div = $('#bullet' + id);

    this.getDeviation = function () {
        r = 10 * Math.random() - 5;
        speedDeviation = 1 + (Math.abs(player.speed) * 15);
        return  r * this.caliber / this.speed * speedDeviation;
    };
    this.rotation = player.rotation + this.getDeviation();

    this.out = false;
    this.div.css({'-webkit-transform': 'rotate(' + this.rotation + 'deg)',
        '-moz-transform': 'rotate(' + this.rotation + 'deg)',
        '-ms-transform': 'rotate(' + this.rotation + 'deg)',
        'transform': 'rotate(' + this.rotation + 'deg)'});

    this.position = {
        x: player.position.x,
        y: player.position.y
    };

    this.move = function () {
        if (this.speed < 4 || this.outWindow()) {
            if (!this.outWindow()) {
                boomBorderRotation = '-moz-transform: rotate(' + this.rotation + 'deg);-ms-transform: rotate(' + this.rotation + 'deg);-webkit-transform: rotate(' + this.rotation + 'deg);-o-transform: rotate(' + this.rotation + 'deg);transform: rotate(' + this.rotation + 'deg);';
                boomSize = 'width:' + this.caliber / 5 + 'vh; height:' + player.weapon.speed + 'vh;';
                boomPosition = 'top:' + this.position.y + 'vh;left:' + this.position.x + 'vh;';
                $('#map').append('<div class="boom" style="' + boomBorderRotation + boomPosition + boomSize + '"></div>');
            }
            this.div.remove();
            this.out = true;
        }

        this.position.x += Math.sin(this.rotation.toRad()) * this.speed;
        this.position.y += -Math.cos(this.rotation.toRad()) * this.speed;
        this.speed *= 0.9925;
    };

    this.outWindow = function () {
        return this.position.x > 100 ||
                this.position.x < 0 ||
                this.position.y > 100 ||
                this.position.y < 0;
    };

    this.update = function () {
        this.move();
        this.div.css({top: this.position.y + 'vh'});
        this.div.css({left: this.position.x + 'vh'});
    };

};

window.bullets = [];
