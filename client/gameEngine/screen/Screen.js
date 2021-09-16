import {Draw} from './Draw.js';

// Screen Module - Holds information about canvas and methods for drawing to the screen
class Screen {

    constructor() {
        this.canvas = document.createElement('CANVAS');
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.id = 'gameCanvas';
        this.canvas.width = 800;
        this.canvas.height = 480;
        this.canvas.style.backgroundColor = 'black';

        $('#gameContainer').append(this.canvas);

        this.draw = new Draw(this.ctx);
    }
    

    

}

export {Screen}