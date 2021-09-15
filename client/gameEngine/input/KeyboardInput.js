
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
        console.log(e.key);
        if(e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
        else if(e.key === "Up" || e.key === "ArrowUp") {
            this.upPressed = true;
        }
        else if(e.key === "Down" || e.key === "ArrowDown") {
            this.downPressed = true;
        }
        else if(e.key === "Space" || e.key === ' ') {
            this.spacePressed = true;
        }
    }



    keyUpHandler(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
        else if(e.key === "Up" || e.key === "ArrowUp") {
            this.upPressed = false;
        }
        else if(e.key === "Down" || e.key === "ArrowDown") {
            this.downPressed = false;
        }
        else if(e.key === "Space" || e.key === ' ') {
            this.spacePressed = false;
        }
    }
}

export {KeyboardInput}