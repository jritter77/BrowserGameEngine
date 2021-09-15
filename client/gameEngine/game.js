import {Input} from './input.js';
import {Screen} from './screen.js';
import {GUI} from './GUI.js';
import {World} from './world.js';
import {Field} from './field.js';


class Game {
    // These hold objects that hold information and methods for their
    // respective parts.
    static input;
    static screen;
    static gameGUI;
    static instances;      // instances.category.type.name = [inst0, inst1, inst2, etc...]
    static world;
    static field;

    static launch() {
        Game.input = new Input();
        Game.screen = new Screen();
        Game.gameGUI = new GUI();
        Game.world = new World();
        Game.field = new Field();

        this.gameLoop();
    }

    

    static gameLoop() {
        // main engine of game responsible for calling 
        // event of all instances

        Game.screen.ctx.clearRect(0, 0, Game.screen.canvas.width, Game.screen.canvas.height);

        this.getInput();
        this.checkGUI();
        this.step();
        this.checkCollisions();
        this.draw();
        
        requestAnimationFrame(this.gameLoop.bind(this));
        
    }


    static getInput() {
        // GetInput Event - sets control input to false and then checks for input
        // to be used in rest of gameLoop
    }


    static checkGUI() {
        // CheckGUI Event - sets gui input to false and checks for gui input to 
        // be used in rest of gameLoop
    }


    static step() {
        // Step Event - executes the step event for all instances
        
        for (let type in Game.field.instances) {
            for (let name in Game.field.instances[type]) {
                for (let inst of Game.field.instances[type][name]) {
                    inst.step();
                }
            }
        } 
    }
    


    static checkCollisions() {
        // Collision Event - check Field instances for collision events, then executes them if so
        for (let type in Game.field.instances) {
            for (let name in Game.field.instances[type]) {
                for (let inst of Game.field.instances[type][name]) {
                    inst.collision();
                }
            }
        }
    }


    static draw() {
        // Draw Event - executes draw function of all instances
        for (let type in Game.field.instances) {
            for (let name in Game.field.instances[type]) {
                for (let inst of Game.field.instances[type][name]) {
                    inst.draw(Game.screen.ctx);
                }
            }
        } 
    }
}

export {Game}