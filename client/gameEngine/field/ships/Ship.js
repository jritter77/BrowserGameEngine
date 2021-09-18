import { MyTools } from "../../../../myModules/MyTools";
import { Game } from "../../Game";

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
        
        this.ability = {
            up: false,
            down: false,
            left: false,
            right: false
        }
        
        this.parts = [];

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

        if (Math.abs(Math.PI - Math.abs(diff)) > Math.PI/180) {
            if (Math.sin(diff) < 0) {
                this.angle -= this.turnSpeed*Math.PI/180;
            }
            else {
                this.angle += this.turnSpeed*Math.PI/180;
            }
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