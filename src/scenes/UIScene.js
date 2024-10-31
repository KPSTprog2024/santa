// src/scenes/UIScene.js

import { getRandomMessage } from '../utils/messageHelper.js';

export default class UIScene extends Phaser.Scene {
    constructor() {
        super({ key: 'UIScene', active: false });
    }

    create() {
        // メッセージテキストの初期化
        this.messageText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, '', {
            fontSize: '32px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 20, y: 20 },
            wordWrap: { width: this.cameras.main.width - 100 }
        }).setOrigin(0.5).setDepth(1).setVisible(false);

        // ボタンの初期化
        this.retryButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, 'もういちど', {
            fontSize: '28px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setDepth(1).setInteractive().setVisible(false);

        this.nextStageButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 160, 'つぎのすてーじへ', {
            fontSize: '28px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setDepth(1).setInteractive().setVisible(false);

        this.retryButton.on('pointerdown', () => {
            this.hideMessages();
            this.scene.stop('MainScene');
            this.scene.start('MainScene', { stageNumber: this.registry.get('currentStage') });
        });

        this.nextStageButton.on('pointerdown', () => {
            this.hideMessages();
            const nextStage = this.registry.get('currentStage') + 1;
            if (nextStage > 15) {
                // 全ステージクリア
                this.showFinalMessage();
            } else {
                this.scene.stop('MainScene');
                this.scene.start('MainScene', { stageNumber: nextStage });
            }
        });

        // フラグの初期化
        this.displayedIntermediate = new Set();
    }

    showSuccessMessage() {
        const message = getRandomMessage('clear');
        this.messageText.setText(message).setVisible(true);
        this.nextStageButton.setVisible(true);
        this.registry.set('currentStage', this.registry.get('currentStage') + 1);
    }

    showFailureMessage() {
        const message = getRandomMessage('fail');
        this.messageText.setText(message).setVisible(true);
        this.retryButton.setVisible(true);
    }

    showIntermediateMessage(stageNumber) {
        if (!this.displayedIntermediate.has(stageNumber)) {
            const message = getRandomMessage('intermediate');
            this.messageText.setText(message).setVisible(true);
            this.displayedIntermediate.add(stageNumber);
        }
    }

    hideMessages() {
        this.messageText.setVisible(false);
        this.retryButton.setVisible(false);
        this.nextStageButton.setVisible(false);
    }

    showFinalMessage() {
        const message = "すべてのステージをクリアしました！めりーくりすます！";
        this.messageText.setText(message).setVisible(true);
        this.nextStageButton.setText('ゲーム終了').setVisible(true);
        this.nextStageButton.off('pointerdown'); // 既存のイベントを削除
        this.nextStageButton.on('pointerdown', () => {
            this.hideMessages();
            this.scene.start('MenuScene');
        });
    }
}
