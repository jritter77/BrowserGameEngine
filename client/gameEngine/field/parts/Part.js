import {Game} from '../../Game.js';
import {MyTools} from '../../MyTools.js';


class Part {

    constructor(ship, x, y) {
        this.ship = ship;
        this.offset = MyTools.getDist(ship.x, ship.y, ship.x+x, ship.y+y);
        this.dir = MyTools.getDir(ship.x, ship.y, ship.x+x, ship.y+y);
        this.size = 8;
    }

    step() {
        this.x = this.ship.x + this.offset * Math.cos(this.ship.angle + this.dir - Math.PI/2);
        this.y = this.ship.y + this.offset * Math.sin(this.ship.angle + this.dir - Math.PI/2);
    }

    collision() {
        // collision event
    }

    draw() {

        Game.screen.draw.poly(this.x, this.y, this.size, 4, this.ship.angle, 'red');

    }

}

export{Part}