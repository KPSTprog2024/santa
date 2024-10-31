// main.js

import BootScene from './src/scenes/BootScene.js';
import MenuScene from './src/scenes/MenuScene.js';
import StageSelectScene from './src/scenes/StageSelectScene.js';
import MainScene from './src/scenes/MainScene.js';
import UIScene from './src/scenes/UIScene.js';

const config = {
    type: Phaser.AUTO,
    width: 480, // 縦画面を想定
    height: 800,
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scene: [BootScene, MenuScene, StageSelectScene, MainScene, UIScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
