// Screen Module - Holds information about canvas and methods for drawing to the screen

class Screen {

    constructor() {
        this.canvas = document.createElement('CANVAS');
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.id = 'myCanvas';
        this.canvas.width = 800;
        this.canvas.height = 480;
        this.canvas.style.backgroundColor = 'black';

        $('#gameContainer').append(this.canvas);
    }
    

    drawRect(x, y, width, height, color="black") {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

}

export {Screen}