import { Projectile } from "./Projectile.js";

class Bullet extends Projectile {
    constructor(x, y, dir) {
        super(x, y, dir);
        this.name = "bullet";
    }

    
}

export {Bullet}