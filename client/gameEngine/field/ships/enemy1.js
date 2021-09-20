import { Game } from "../../Game.js";
import {Ship} from './Ship.js';
import {Body} from '../parts/Body.js';
import {Cannon} from '../parts/Cannon.js';

class Enemy1 extends Ship {


    constructor(x, y) {
        super(x, y);
        this.name = 'Enemy1';

        this.setPart(Cannon, 1, 0);
        this.setPart(Cannon, -1, 0);
        this.setPart(Cannon, 0, 2);
        this.setPart(Body, 0, 1);
        this.setPart(Body, 0, -1);

        this.target = {x: this.x, y: this.y}
        this.move = true;

        this.cannonTimer = 0;

    }

    step() {

        if (this.cannonTimer === 100) {
            this.cannonTimer = 0;
            this.ability.up = true;
        }
        else {
            this.cannonTimer++;
            this.ability.up = false;
        }
        
        if (this.condition < 1) {
            this.destroy();
        }

        this.basicMovement(this.target);
        this.stepParts();
    }

    collision() {
        // collision event
    }

    draw() {
        // draws main body of ship
        Game.screen.draw.poly(this.x, this.y, this.size, 4, this.angle, 'red');
        this.drawParts();
    }


    destroy() {
        let arr = Game.field.instances.ships[this.name];
        for (let i=0; i < arr.length; i++) {
            if (this === arr[i]) {
                Game.field.instances.ships[this.name].splice(i, 1);
            }
        }
    }

}



export {Enemy1}