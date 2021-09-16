class Ship {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.spacing = 12;
        this.size = 8;
        
        this.parts = [];

    }

    step() {
        
        // execute step event on all parts
        for (let part of this.parts) {
            part.step();

        }
    }

    draw() {

        for (let part of this.parts) {
            part.draw();
        }
    }


    
}


export {Ship}