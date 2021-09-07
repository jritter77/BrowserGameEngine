class Game {
    // These hold objects that hold information and methods for their
    // respective parts.
    input;
    screen;
    gameGUI;
    instances;      // instances.category.type.name = [inst0, inst1, inst2, etc...]
    world;
    field;

    constructor() {
        this.input = {};
        this.screen = {};
        this.gameGUI = {};
        this.instances = {
            field: {
                enemies: {
                    enemy: []
                }
            }
        };
        this.world = {};
        this.field = {};
    }

    initGame() {
        //Create Canvas and set initial variables.

    }

    gameLoop() {
        // main engine of game responsible for calling 
        // event of all instances

        getInput();
        checkGUI();
        step();
        checkCollisions();
        draw();

        requestAnimationFrame(this.gameLoop);
        
    }

    getInput() {
        // GetInput Event - sets control input to false and then checks for input
        // to be used in rest of gameLoop
    }

    checkGUI() {
        // CheckGUI Event - sets gui input to false and checks for gui input to 
        // be used in rest of gameLoop
    }

    step() {
        // Step Event - executes the step event for all instances
        for (let category in this.instances) {
            for (let type in this.instances[category]) {
                for (let inst of this.instances[category][type]) {
                    inst.step();
                }
            } 
        }
    }

    checkCollisions() {
        // Collision Event - check Field instances for collision events, then executes them if so
        for (let type in this.instances.field) {
            for (let inst of instances.field[type]) {
                inst.collision();
            }
        }
    }

    draw() {
        // Draw Event - executes draw function of all instances
        for (let category in this.instances) {
            for (let type in this.instances[category]) {
                for (let inst of this.instances[category][type]) {
                    inst.draw();
                }
            } 
        }
    }
}

export {Game}