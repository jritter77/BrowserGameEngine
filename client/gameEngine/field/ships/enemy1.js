import { Game } from "../../Game.js";
import {Ship} from './Ship.js';
import {Body} from '../parts/Body.js';
import {Cannon} from '../parts/Cannon.js';

class Enemy1 extends Ship {


    constructor(x, y) {
        super(x, y);
        this.name = 'Enemy1';

        this.parts.push(new Body(this, 0, this.spacing));
        this.parts.push(new Cannon(this, this.spacing, 0));
        this.parts.push(new Cannon(this, -this.spacing, 0));
        this.parts.push(new Cannon(this, 0, this.spacing*2));
        this.parts.push(new Body(this, 0, -this.spacing));

    }

    step() {
        this.basicMovement();
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



    basicMovement() {
        this.angle += 2*Math.PI/180;
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }

}



export {Enemy1}