import {Game} from '../Game.js';

// GUI Module - Monitors and handles all GUI input

class GUI {
    constructor() {
        this.instances = {
            text: {}
        }
    }



    step() {
        for (let type in this.instances) {
            for (let name in this.instances[type]) {
                for (let inst of this.instances[type][name]) {
                    inst.step();
                }
            }
        }
    }



    
    draw() {
        // DrawGUI Event - executes draw function of GUI instances
        Game.input.mouse.dispMouseCoord();


        for (let type in this.instances) {
            for (let name in this.instances[type]) {
                for (let inst of this.instances[type][name]) {
                    inst.draw();
                }
            }
        }
    }

    createTextObj(obj, x, y) {
        const inst = new obj(x, y);
        try {
            this.instances.text[inst.name].push(inst);
        }
        catch {
            this.instances.text[inst.name] = [inst];
        }
    }


}

export {GUI}