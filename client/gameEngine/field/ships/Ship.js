import {Game} from '../../Game.js';
import {Part} from './Part.js';

import {MyTools} from '../../MyTools.js';


class Ship {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.spacing = 12;
        
        this.parts = [];

        this.parts.push(new Part(this, 0, this.spacing));
        this.parts.push(new Part(this, this.spacing, 0));
        this.parts.push(new Part(this, -this.spacing, 0));
        this.parts.push(new Part(this, 0, this.spacing*2));
        this.parts.push(new Part(this, 0, -this.spacing));

    }

    step() {
        // step event
        this.mousePos = Game.input.mouse.getMousePos();
        this.mouseDir = MyTools.getDir(this.x, this.y, this.mousePos.x, this.mousePos.y);


        if (Game.input.mouse.mouseDown) {
            this.x += this.speed * Math.cos(this.mouseDir);
            this.y += this.speed * Math.sin(this.mouseDir);
        }

        for (let part of this.parts) {
            part.step();
        }
    }

    draw() {

        Game.screen.draw.poly(this.x, this.y, 8, 4, this.mouseDir+Math.PI/4, 'green');

        for (let part of this.parts) {
            part.draw();
        }
    }

}

export {Ship}