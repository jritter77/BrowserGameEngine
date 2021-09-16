import { MouseInput } from './MouseInput.js';
import { KeyboardInput } from './KeyboardInput.js';

// Input Module - Monitors all input from physical hardware

class Input {
    
    constructor() {
        this.mouse = new MouseInput();
        this.keyboard = new KeyboardInput();
    }
    
    step() {
        // step event for input
    }
    
}

export {Input}