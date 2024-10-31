// src/scenes/MenuScene.js

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        // 背景の表示
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');

        // タイトルテキスト
        this.add.text(this.cameras.main.centerX, 200, 'おとどけサンタ', {
            fontSize: '48px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // スタートボタン
        const startButton = this.add.text(this.cameras.main.centerX, 400, 'スタート', {
            fontSize: '32px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerdown', () => {
            // 最初のステージにリセット
            this.registry.set('currentStage', 1);
            this.scene.start('StageSelectScene');
        });

        // 設定ボタン（将来的な機能追加用）
        const settingsButton = this.add.text(this.cameras.main.centerX, 500, 'せってい', {
            fontSize: '32px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();

        settingsButton.on('pointerdown', () => {
            if (!this.settingsMessage) {
                this.settingsMessage = this.add.text(this.cameras.main.centerX, 600, '設定画面はまだです！', {
                    fontSize: '24px',
                    fill: '#ff0000'
                }).setOrigin(0.5);
            }
        });
    }
}
