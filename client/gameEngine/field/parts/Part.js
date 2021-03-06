import {Game} from '../../Game.js';
import {MyTools} from '../../../../myModules/MyTools.js';


class Part {

    constructor(ship, x, y) {
        this.name = 'part';
        this.ship = ship;
        this.offset = MyTools.getDist(ship.x, ship.y, ship.x+x, ship.y+y);
        this.dir = MyTools.getDir(ship.x, ship.y, ship.x+x, ship.y+y);
        this.size = 8;
        this.color = 'red';
        this.condition = 100;
    }

    step() {
        if (this.condition < 1) {
            this.destroy();
        }
        
        this.x = this.ship.x + this.offset * Math.cos(this.ship.angle + this.dir - Math.PI/2);
        this.y = this.ship.y + this.offset * Math.sin(this.ship.angle + this.dir - Math.PI/2);
    }

    collision() {
        // collision event
    }

    draw() {

        Game.screen.draw.poly(this.x, this.y, this.size, 4, this.ship.angle, this.color);

    }


    destroy() {
        let arr = this.ship.parts;
        for (let i=0; i < arr.length; i++) {
            if (this === arr[i]) {
                this.ship.parts.splice(i, 1);
            }
        }
    }
}

export{Part}