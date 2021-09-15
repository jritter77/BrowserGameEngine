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
    }
    

    drawRect(x, y, width, height, color="red") {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

	drawCircle(x, y, size, color="red"){
        const ctx = this.ctx;
		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI*2);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}

	drawText(x, y, str, style="30px Arial"){
        const ctx = this.ctx;
		ctx.font = style;
		ctx.fillStyle = "red";
		ctx.fillText(str, x, y);
	}

    

}

export {Screen}