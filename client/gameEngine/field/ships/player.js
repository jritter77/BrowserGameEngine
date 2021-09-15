import { Game } from "../../Game.js";



class Player {

    constructor(x, y) {
        this.name = 'Player';
        this.x = x;
        this.y = y;
        this.width = 128;
        this.height = 128;
        this.speed = 5;
    }

    step() {
        // step event
        if (this.x < Game.screen.canvas.width - this.width) {
            this.x += this.speed;
        }
    }

    collision() {
        // collision event
    }

    draw() {
        Game.screen.drawRect(this.x, this.y, this.width, this.height, 'green');
    }

}



export {Player}