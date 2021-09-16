import { MouseInput } from './MouseInput.js';
import { KeyboardInput } from './KeyboardInput.js';

// Input Module - Monitors all input from physical hardware

class Input {
    
    constructor() {
        this.mouseInput = new MouseInput();
        this.keyboardInput = new KeyboardInput();
    }
    
    step() {
        // step event for input
    }
    
}

export {Input}