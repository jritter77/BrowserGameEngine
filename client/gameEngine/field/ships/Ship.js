import { MyTools } from "../../../../myModules/MyTools";

class Ship {

    constructor(x, y) {
        this.name = "ship";
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.turnSpeed = 3;
        this.spacing = 12;
        this.size = 8;
        this.angle = 0;
        this.move = false;
        this.condition = 20;
        
        this.ability = {
            up: false,
            down: false,
            left: false,
            right: false
        }
        
        this.parts = [];

    }


    

    setPart(part, x, y) {
        this.parts.push(new part(this, this.spacing*x, this.spacing*y));
    }


    rotateTowards(x, y) {
        let dir = MyTools.getDir(x, y, this.x, this.y);
        
        if (this.angle > Math.PI*2) {
            this.angle -= Math.PI*2;
        }

        if (this.angle < 0) {
            this.angle += Math.PI*2;
        }

        let diff = this.angle - dir;

        if (Math.abs(Math.PI - Math.abs(diff)) > Math.PI/180*2) {
            if (Math.sin(diff) < 0) {
                this.angle -= this.turnSpeed*Math.PI/180;
            }
            else {
                this.angle += this.turnSpeed*Math.PI/180;
            }
        }
        
    }


    basicMovement(target) {
        
        // rotate towards mouse
        this.rotateTowards(target.x, target.y);

        // move ship in current direction according to speed if mouseDown true
        if (this.move) {
            this.x += this.speed * Math.cos(this.angle);
            this.y += this.speed * Math.sin(this.angle);
        }
    }

    


    stepParts() {
        
        // execute step event on all parts
        for (let part of this.parts) {
            part.step();
        }
    }

    drawParts() {

        for (let part of this.parts) {
            part.draw();
        }
    }

    
}


export {Ship}