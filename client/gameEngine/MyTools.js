class MyTools {
    
    //DISTANCE FUNCTION
    static getDist(ax, ay, bx, by) {
        var dx = ax - bx;
        var dy = ay - by;
        var d = Math.sqrt(dx*dx + dy*dy);
        return d;
    }

    //DIRECTION FUNCTION
    static getDir(ax, ay, bx, by) {
        var dx = bx - ax;
        var dy = by - ay;
        var dir = Math.atan(dy/dx);

        if (dx<0){
            dir+= Math.PI;
        }
        else if (dy<0){
            dir += Math.PI*2;
        }
        
        
        return (dir);
    }
}

export {MyTools}
    