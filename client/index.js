import {Game} from './gameEngine/game.js';

import {Player} from './gameEngine/fieldObjects/ships/player.js';
import {Enemy1} from './gameEngine/fieldObjects/ships/enemy1.js';

$('#app').html(`
    <div class='row'>
        <div class='col'></div>
        <div class='col' id='gameContainer' style='margin-top:5%'></div>
        <div class='col'></div>
    </div>
`)

Game.launch();

Game.field.createShip(Player, 128, 128);
Game.field.createShip(Enemy1, 256, 256);