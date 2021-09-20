import { Game } from "../../Game.js";
import { MyTools } from '../../../../myModules/MyTools.js';
import {Ship} from './Ship.js';
import {Body} from '../parts/Body.js';
import {Cannon} from '../parts/Cannon.js';

class Player extends Ship {


    constructor(x, y) {
        super(x, y);
        this.name = 'Player';

        this.setPart(Body, 1, 0);
        this.setPart(Body, -1, 0);
        this.setPart(Cannon, 0, 2);
        this.setPart(Body, 0, 1);
        this.setPart(Body, 0, -1);


    }

    step() {

        if (this.condition < 1) {
            this.destroy();
        }

        let mousePos = Game.input.mouse.getMousePos();
        this.move = Game.input.mouse.mouseDown;
        this.basicMovement(mousePos);
        
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

    destroy() {
        let arr = Game.field.instances.ships[this.name];
        for (let i=0; i < arr.length; i++) {
            if (this === arr[i]) {
                Game.field.instances.ships[this.name].splice(i, 1);
            }
        }
    }

    

}



export {Player}