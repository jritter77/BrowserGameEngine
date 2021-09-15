import { Game } from '../Game.js';

class MouseInput {
    
    constructor() {
        this.mouse_pos = {x: 0, y: 0};			//initialize mouse mouse_position
        this.setMouseListeners();
    }
    
    mouseMoveHandler(e) {				
        //triggers whenever mouse is moved
        Game.input.mouseInput.mouse_pos = Game.input.mouseInput.mousePosHandler(e);
    }
    
    
    mouseDownHandler(e){				
        //triggers anytime mouse is clicked
        console.log('clicked!');
    }
    
    
    mouseUpHandler(e){				
        //triggers anytime mouse is released
    }
    
    wheelHandler(e){
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
        canvas.addEventListener("mousedown", this.mouseDownHandler, false);
        canvas.addEventListener("mouseup", this.mouseUpHandler, false);
        canvas.addEventListener("wheel", this.wheelHandler, false);
    }

    dispMouseCoord(){					//used for debugging, put in main function
        Game.screen.ctx.font = "30px Arial";
        Game.screen.ctx.fillStyle = "white";
        Game.screen.ctx.fillText(`x: ${Math.round(this.mouse_pos.x)}, y: ${Math.round(this.mouse_pos.y)}`, 32, 64);
    }
}

export {MouseInput}