import {Game} from '../../Game.js';


class Projectile {
    constructor(x, y, dir) {
        this.name = "projectile";
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.speed = 10;
        this.size = 2;

    }

    step() {
        this.x += this.speed * Math.cos(this.dir);
        this.y += this.speed * Math.sin(this.dir);
    }

    draw() {
        Game.screen.draw.circle(this.x, this.y, this.size, 'yellow');
    }


    
}

export {Projectile}