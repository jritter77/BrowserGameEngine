import { Game } from "../../Game.js";
import { MyTools } from '../../MyTools.js';


class Player {


    constructor(x, y) {
        this.name = 'Player';
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.speed = 3;
    }

    step() {
        // step event
        this.mousePos = Game.input.mouse.getMousePos();
        this.mouseDir = MyTools.getDir(this.x, this.y, this.mousePos.x, this.mousePos.y);

        if (Game.input.mouse.mouseDown) {
            this.x += this.speed * Math.cos(this.mouseDir);
            this.y += this.speed * Math.sin(this.mouseDir);
        }
        
    }

    collision() {
        // collision event
    }

    draw() {

        Game.screen.draw.poly(this.x, this.y, 32, 4, this.mouseDir+Math.PI/4, 'green');

    }

}



export {Player}