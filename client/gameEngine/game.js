import {Input} from './input/Input.js';
import {Screen} from './screen/Screen.js';
import {GUI} from './GUI/GUI.js';
import {World} from './world/World.js';
import {Field} from './field/Field.js';


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
        Game.screen = new Screen();
        Game.gameGUI = new GUI();
        Game.input = new Input();
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
        this.drawGUI();
        
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


    static drawGUI() {
        // DrawGUI Event - executes draw function of GUI instances
        Game.input.mouseInput.dispMouseCoord();

        Game.screen.drawText(0, 128, Game.input.keyboardInput.spacePressed);


        for (let type in Game.gameGUI.instances) {
            for (let name in Game.gameGUI.instances[type]) {
                for (let inst of Game.gameGUI.instances[type][name]) {
                    inst.draw(Game.screen.ctx);
                }
            }
        } 
    }

}

export {Game}