import { Game } from "../../Game.js";



class Enemy1 {

    constructor(x, y) {
        this.name = 'Enemy1';
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
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
        Game.screen.drawRect(this.x, this.y, this.width, this.height, 'red');
    }

}



export {Enemy1}