class Cannon extends Part {

    constructor(ship, x, y) {
        super(ship, x, y);

        this.type = "CANNON";
        this.condition = 100;
        this.projectile = "BULLET";
        this.power = 1;
        
    }
}