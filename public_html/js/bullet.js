Bullet = function (player, id) {

    $('body').append('<div id="bullet' + id + '" style="position:absolute; width:2px; height:2px; background:black;"></div>');
    this.div = $('#bullet' + id);
    this.speed = player.weapon.speed + player.speed / 2;
    this.rotation = player.rotation;
    this.out = false;
    this.caliber = player.weapon.caliber;

    this.position = {
        x: player.position.x,
        y: player.position.y
    };

    this.move = function () {
        if (this.speed < 4 ||
                this.position.x > $(window).width() ||
                this.position.x < 0 ||
                this.position.y > $(window).height() ||
                this.position.y < 0)
        {
            this.div.remove();
            this.out = true;
        }

        this.position.x += Math.sin(this.rotation.toRad()) * this.speed;
        this.position.y += -Math.cos(this.rotation.toRad()) * this.speed;
        this.speed *= 0.9925;
    };

    this.update = function () {
        this.move();
        this.div.css({top: this.position.y});
        this.div.css({left: this.position.x});
    };
};

window.bullets = [];
