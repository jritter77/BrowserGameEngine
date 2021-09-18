// Field Module - Holds information regarding the gamefield and instances within it

import { TreeTools } from "../../../myModules/TreeTools";

class Field {
    constructor() {
        this.instances = {      // type.name[inst]
            ships: {},
            projectiles: {}
        };    
    }


    step() {
        TreeTools.executeEach(this.instances, 'step'); 
    }



    draw() {
        TreeTools.executeEach(this.instances, 'draw');  
    }


    collisions() {
        // field collisions event - detect collisions and take proper action
    }


    createShip(obj, x, y) {
        const inst = new obj(x, y);
        try {
            this.instances.ships[inst.name].push(inst);
        }
        catch {
            this.instances.ships[inst.name] = [inst];
        }
    }

    createProjectile(obj, x, y, dir) {
        const inst = new obj(x, y, dir);
        try {
            this.instances.projectiles[inst.name].push(inst);
        }
        catch {
            this.instances.projectiles[inst.name] = [inst];
        }
    }

    


}

export {Field}