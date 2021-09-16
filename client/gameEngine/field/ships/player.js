import { Game } from "../../Game.js";
import { MyTools } from '../../MyTools.js';
import {Ship} from './Ship.js';
import {Part} from '../parts/Part.js';

class Player extends Ship {


    constructor(x, y) {
        super(x, y);
        this.name = 'Player';

        this.parts.push(new Part(this, 0, this.spacing));
        this.parts.push(new Part(this, this.spacing, 0));
        this.parts.push(new Part(this, -this.spacing, 0));
        this.parts.push(new Part(this, 0, this.spacing*2));
        this.parts.push(new Part(this, 0, -this.spacing));
    }

    step() {
        this.basicMovement();

        super.step();
    }

    collision() {
        // collision event
    }

    draw() {

        // draws main body of ship
        Game.screen.draw.poly(this.x, this.y, this.size, 4, this.angle, 'green');

        super.draw();

    }



    basicMovement() {

        // get mouse position and direction
        this.mousePos = Game.input.mouse.getMousePos();
        this.mouseDir = MyTools.getDir(this.x, this.y, this.mousePos.x, this.mousePos.y);
        this.angle = this.mouseDir;

        // have ship follow mouse according to speed if mouseDown true
        if (Game.input.mouse.mouseDown) {
            this.x += this.speed * Math.cos(this.mouseDir);
            this.y += this.speed * Math.sin(this.mouseDir);
        }
    }

}



export {Player}