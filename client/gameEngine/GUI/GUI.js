import { TreeTools } from '../../../myModules/TreeTools.js';
import {Game} from '../Game.js';

// GUI Module - Monitors and handles all GUI input

class GUI {
    constructor() {
        this.instances = {
            text: {},
            buttons: {},
            meters: {}
        }
    }



    step() {
        TreeTools.executeEach(this.instances, 'step'); 
    }



    
    draw() {
        // DrawGUI Event - executes draw function of GUI instances
        Game.input.mouse.dispMouseCoord();
        TreeTools.executeEach(this.instances, 'draw'); 
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