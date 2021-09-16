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

        this.step();
        this.checkCollisions();
        this.draw();
        
        requestAnimationFrame(this.gameLoop.bind(this));
        
    }


 


    static step() {
        // Step Event - executes the step event for all instances
        Game.input.step();
        Game.gameGUI.step();
        Game.world.step();
        Game.field.step();
    }
    


    static checkCollisions() {
        // Collision Event - check Field instances for collision events, then executes them if so
        Game.field.collisions();
    }


    static draw() {
        Game.field.draw();
        Game.gameGUI.draw();
    }


    
}

export {Game}