// GUI Module - Monitors and handles all GUI input

class GUI {
    constructor() {
        this.instances = {
            text: {}
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