// src/scenes/StageSelectScene.js

import stagesConfig from '../../config/stages.json' assert { type: 'json' };

export default class StageSelectScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StageSelectScene' });
    }

    create() {
        // 背景の表示
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');

        // ステージ選択タイトル
        this.add.text(this.cameras.main.centerX, 100, 'ステージをせんたく', {
            fontSize: '36px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        const stages = stagesConfig.stages;
        const stagesPerRow = 3;
        const buttonSize = 80;
        const padding = 20;
        const startX = this.cameras.main.centerX - ((stagesPerRow * (buttonSize + padding)) - padding) / 2 + buttonSize / 2;
        const startY = 200;

        stages.forEach((stage, index) => {
            const row = Math.floor(index / stagesPerRow);
            const col = index % stagesPerRow;

            const x = startX + col * (buttonSize + padding);
            const y = startY + row * (buttonSize + padding);

            const stageButton = this.add.text(x, y, `Stage ${stage.stageNumber}`, {
                fontSize: '24px',
                fill: '#00ff00',
                backgroundColor: '#000000',
                padding: { x: 10, y: 10 }
            }).setOrigin(0.5).setInteractive();

            stageButton.on('pointerdown', () => {
                this.registry.set('currentStage', stage.stageNumber);
                this.scene.start('MainScene', { stageNumber: stage.stageNumber });
            });
        });

        // メニューボタン
        const menuButton = this.add.text(this.cameras.main.centerX, 700, 'メニューにかえる', {
            fontSize: '28px',
            fill: '#ffffff',
            backgroundColor: '#ff0000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();

        menuButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}
