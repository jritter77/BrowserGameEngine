import {Game} from '../../Game.js';
import { Bullet } from "../projectiles/Bullet.js";
import { Part } from './Part.js';


class Cannon extends Part {

    constructor(ship, x, y) {
        super(ship, x, y);

        this.name = "cannon";
        this.color = 'white';

        this.condition = 100;
        this.projectile = Bullet;
        this.power = 1;
        this.recoil = 10;
        this.recTimer = 0;
        

    }

    step() {
        super.step();

        if (this.recTimer < 1) {
            if (Game.input.keyboard.spacePressed) {
                this.shoot();
                this.recTimer = 10;
            }
        }
        else {
            this.recTimer--;
        }
    }

    shoot() {
        Game.field.createProjectile(this.projectile, this.x, this.y, this.ship.angle);   
    }
}

export {Cannon}