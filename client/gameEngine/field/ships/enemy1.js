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

    }

    step() {
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


}



export {Enemy1}