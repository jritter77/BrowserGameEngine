
// Field Module - Holds information regarding the gamefield and instances within it

class Field {
    constructor() {
        this.instances = {      // type.name[inst]
            ships: {}
        };    
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