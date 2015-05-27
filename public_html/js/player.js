Player = function () {

    this.speed = 0;
    this.rateOfFire = 1;
    this.lastFire = 0;
    this.acceleration = 0.01;
    this.rotation = 0;
    this.rotationSpeed = 2;
    this.position = {
        x: 0,
        y: 0
    };

    this.update = function () {
        if (this.speed > 0) {
            this.position.x += Math.sin(this.rotation.toRad()) * this.speed;
            this.position.y += -Math.cos(this.rotation.toRad()) * this.speed;
            $('#player').css({top: this.position.y});
            $('#player').css({left: this.position.x});
        }
        if (input.isDown('LEFT') || input.isDown('RIGHT'))
            $('#player').css({'-webkit-transform': 'rotate(' + this.rotation + 'deg)',
                '-moz-transform': 'rotate(' + this.rotation + 'deg)',
                '-ms-transform': 'rotate(' + this.rotation + 'deg)',
                'transform': 'rotate(' + this.rotation + 'deg)'});
    };

    this.rotate = function (deg) {
        this.speed *= 0.99;
        speedFactor = this.speed / 2.5 + 1;
        this.rotation += this.rotationSpeed * deg / speedFactor;
        this.rotation %= 360;
    };

    this.speedUp = function () {
        if (this.speed < 1000 * this.acceleration)
            this.speed += this.acceleration;
    };

    this.shot = function () {
        now = new Date().getTime() / 1000;
        if (now - this.lastFire > this.rateOfFire) {
            bullets.push(new Bullet(this, parseInt(now)));
            this.lastFire = now;
        }
    };
};
