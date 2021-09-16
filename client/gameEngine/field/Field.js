
// Field Module - Holds information regarding the gamefield and instances within it

class Field {
    constructor() {
        this.instances = {      // type.name[inst]
            ships: {}
        };    
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
        // Draw Event - executes draw function of all instances
        for (let type in this.instances) {
            for (let name in this.instances[type]) {
                for (let inst of this.instances[type][name]) {
                    inst.draw();
                }
            }
        } 
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

    


}

export {Field}