import { Game } from '../Game.js';

class MouseInput {
    
    constructor() {
        this.mouseDown = false;
        this.mouse_pos = {x: 0, y: 0};			//initialize mouse mouse_position
        this.setMouseListeners();
    }
    
    mouseMoveHandler(e) {				
        //triggers whenever mouse is moved
        Game.input.mouse.mouse_pos = Game.input.mouse.mousePosHandler(e);
    }
    
    
    mouseDownHandler(e){				
        //triggers anytime mouse is clicked
        this.mouseDown = true;
    }
    
    
    mouseUpHandler(e){				
        //triggers anytime mouse is released
        this.mouseDown = false;
    }
    
    wheelHandler(e){
        e.preventDefault();
        if (e.deltaY < 0){
            //scroll up code here
            console.log("up");
        }
        else{
            //scroll down code here
            console.log("down");
        }
    }
    
    
    
    
    mousePosHandler(e) {
        const canvas = document.getElementById('gameCanvas');
        var rect = canvas.getBoundingClientRect();
        return{
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    
    getMousePos() {
        return this.mouse_pos;
    }
    
    setMouseListeners() {
        const canvas = document.getElementById('gameCanvas');
        canvas.addEventListener("mousemove", this.mouseMoveHandler, false);
        canvas.addEventListener("mousedown", this.mouseDownHandler.bind(this), false);
        canvas.addEventListener("mouseup", this.mouseUpHandler.bind(this), false);
        canvas.addEventListener("wheel", this.wheelHandler, false);
    }

    dispMouseCoord(){					//used for debugging, put in main function
        Game.screen.ctx.font = "30px Arial";
        Game.screen.ctx.fillStyle = "white";
        Game.screen.ctx.fillText(`x: ${Math.round(this.mouse_pos.x)}, y: ${Math.round(this.mouse_pos.y)}`, 32, 64);
    }
}

export {MouseInput}