Player = function (id) {

    $('#map').append('<div id="bolid' + id +
            '" style="position: absolute; width: 2vh; height: 3vh; background: red; border-top-left-radius: 50%;border-top-right-radius: 50%;">' +
            '</div><span id="sign' + id + '" style="position:absolute; color: silver">asdad</span>');
    this.div = $('#bolid' + id);
    this.sign = $('#sign' + id);
    this.speed = 0;
    this.rateOfFire = 1;
    this.lastFire = 0;
    this.horsepower = 500;
    this.weight = 50;
    this.acceleration = this.horsepower / this.weight / 1000;
    this.rotation = 0;
    this.rotationSpeed = this.horsepower / this.weight / 10;
    this.position = {
        x: 0,
        y: 0
    };
    this.weapon = {
        caliber: 2,
        speed: 4.4
    };

    this.update = function () {
        this.sign.html(this.speed);
        // this.sign.css({top: (this.position.y + 20)+'vh', left: (this.position.x)+'vh'});

        if (this.speed !== 0) {
            this.position.x += Math.sin(this.rotation.toRad()) * this.speed;
            this.position.y += -Math.cos(this.rotation.toRad()) * this.speed;
            this.div.css({top: this.position.y+'vh', left: this.position.x+'vh'});
        }

        if (input.isDown('LEFT') || input.isDown('RIGHT') || input.isDown('SLEFT') || input.isDown('SRIGHT'))
            this.div.css({'-webkit-transform': 'rotate(' + this.rotation + 'deg)',
                '-moz-transform': 'rotate(' + this.rotation + 'deg)',
                '-ms-transform': 'rotate(' + this.rotation + 'deg)',
                'transform': 'rotate(' + this.rotation + 'deg)'});
    };

    this.rotate = function (deg) {
        this.speed *= 0.99;
        speedFactor = this.weight / 30 * Math.abs(this.speed) + 1;
        this.rotation += this.rotationSpeed * deg / speedFactor;
        this.rotation %= 360;
    };

    this.speedUp = function () {
        if (this.speed < this.horsepower / this.weight)
            this.speed += this.acceleration;
    };

    this.shot = function () {
        now = new Date().getTime() / 1000;
        if (now - this.lastFire > this.rateOfFire) {
            bullets.push(new Bullet(this, parseInt(now)));
            this.lastFire = now;
            this.speed -= this.weapon.caliber * this.weapon.speed / this.weight;
        }
    }
    ;
};
