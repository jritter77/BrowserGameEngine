import { Projectile } from "./Projectile.js";

class Bullet extends Projectile {
    constructor(ship, x, y, dir) {
        super(ship, x, y, dir);
        this.name = "bullet";
    }


    
    
}

export {Bullet}