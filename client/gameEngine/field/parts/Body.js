import { Part } from "./Part.js";

class Body extends Part {

    constructor(ship, x, y) {
        super(ship, x, y);

        this.name = "body";
        this.type = "BODY";
        this.condition = 100;
        this.color = 'grey';
    }
}

export {Body}