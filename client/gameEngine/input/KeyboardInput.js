
class KeyboardInput {
    
    
    constructor() {
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.spacePressed = false;
        this.setKeyboardListeners();
    }



    setKeyboardListeners() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    }



    keyDownHandler(e){
        e.preventDefault();
        console.log(e.key);
        if(e.key === "right" || e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
            this.rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
            this.leftPressed = true;
        }
        else if(e.key === "Up" || e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
            this.upPressed = true;
        }
        else if(e.key === "Down" || e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
            this.downPressed = true;
        }
        else if(e.key === "Space" || e.key === ' ') {
            this.spacePressed = true;
        }
    }



    keyUpHandler(e) {
        e.preventDefault();
        if(e.key === "Right" || e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
            this.rightPressed = false;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
            this.leftPressed = false;
        }
        else if(e.key === "Up" || e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
            this.upPressed = false;
        }
        else if(e.key === "Down" || e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
            this.downPressed = false;
        }
        else if(e.key === "Space" || e.key === ' ') {
            this.spacePressed = false;
        }
    }
}

export {KeyboardInput}