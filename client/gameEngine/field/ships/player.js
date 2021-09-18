import { Game } from "../../Game.js";
import { MyTools } from '../../../../myModules/MyTools.js';
import {Ship} from './Ship.js';
import {Body} from '../parts/Body.js';
import {Cannon} from '../parts/Cannon.js';

class Player extends Ship {


    constructor(x, y) {
        super(x, y);
        this.name = 'Player';

        this.parts.push(new Body(this, 0, this.spacing));
        this.parts.push(new Cannon(this, this.spacing, 0));
        this.parts.push(new Cannon(this, -this.spacing, 0));
        this.parts.push(new Cannon(this, 0, this.spacing*2));
        this.parts.push(new Body(this, 0, -this.spacing));

    }

    step() {
        this.basicMovement();
        
        this.ability.up = Game.input.keyboard.upPressed;
        this.ability.down = Game.input.keyboard.downPressed;
        this.ability.left = Game.input.keyboard.leftPressed;
        this.ability.right = Game.input.keyboard.rightPressed;
        
        this.stepParts();
    }

    collision() {
        // collision event
    }

    draw() {
        // draws main body of ship
        Game.screen.draw.poly(this.x, this.y, this.size, 4, this.angle, 'green');
        this.drawParts();
    }


    


    basicMovement() {

        // get mouse position
        let mousePos = Game.input.mouse.getMousePos();
        
        // rotate towards mouse
        this.rotateTowards(mousePos.x, mousePos.y);

        // move ship in current direction according to speed if mouseDown true
        if (Game.input.mouse.mouseDown) {
            this.x += this.speed * Math.cos(this.angle);
            this.y += this.speed * Math.sin(this.angle);
        }
    }

}



export {Player}