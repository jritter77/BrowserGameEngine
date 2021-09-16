class Body extends Part {

    constructor(ship, x, y) {
        super(ship, x, y);

        this.type = "BODY";
        this.condition = 100;
    }
}