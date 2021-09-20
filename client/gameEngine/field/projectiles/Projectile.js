import { MyTools } from '../../../../myModules/MyTools.js';
import { TreeTools } from '../../../../myModules/TreeTools.js';
import {Game} from '../../Game.js';


class Projectile {
    constructor(ship, x, y, dir) {
        this.name = "projectile";
        this.ship = ship;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.speed = 10;
        this.size = 2;
        this.power = 50;
    }

    step() {
        this.x += this.speed * Math.cos(this.dir);
        this.y += this.speed * Math.sin(this.dir);
    }

    draw() {
        Game.screen.draw.circle(this.x, this.y, this.size, 'yellow');
    }

    collision() {
        TreeTools.forAll(Game.field.instances.ships, this.shipCollision.bind(this));
    }

    shipCollision(ship) {
        if (this.ship !== ship) {
            if (MyTools.collisionCircleObj(this, ship)) {
                ship.condition -= this.power;
                this.destroy();
                return;
            }
            for (let part of ship.parts) {
                if (MyTools.collisionCircleObj(this, part)) {
                    part.condition -= this.power;
                    this.destroy();
                }
            }
        }
    }


    destroy() {
        let arr = Game.field.instances.projectiles[this.name];
        for (let i=0; i < arr.length; i++) {
            if (this === arr[i]) {
                Game.field.instances.projectiles[this.name].splice(i, 1);
            }
        }
    }


    
}

export {Projectile}