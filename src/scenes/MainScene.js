// src/scenes/MainScene.js

import Santa from '../objects/Santa.js';
import IceBlock from '../objects/IceBlock.js';
import { handleCollision } from '../utils/collisionHelper.js';
import stagesConfig from '../../config/stages.json' assert { type: 'json' };

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    init(data) {
        this.stageNumber = data.stageNumber || 1;
    }

    create() {
        // 背景の表示
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');

        // ステージ設定の取得
        this.stageConfig = stagesConfig.stages.find(stage => stage.stageNumber === this.stageNumber);

        // サンタの初期位置
        this.startX = this.cameras.main.centerX;
        this.startY = this.cameras.main.height - 50;

        // サンタの作成
        this.santa = new Santa(this, this.startX, this.startY);

        // 氷ブロックの作成
        this.iceBlocks = this.stageConfig.iceBlocks.map(blockConfig => {
            // X位置を画面幅に応じて設定
            let x;
            if (blockConfig.direction === 'left' || blockConfig.direction === 'right') {
                x = Phaser.Math.Between(50, this.cameras.main.width - 50);
            } else {
                x = Phaser.Math.Between(100, this.cameras.main.width - 100);
            }

            // Y位置をランダムに設定
            const y = Phaser.Math.Between(100, this.cameras.main.height - 200);

            return new IceBlock(this, x, y, blockConfig.direction, blockConfig.speed);
        });

        // 衝突判定の設定
        this.physics.add.overlap(this.santa, this.iceBlocks, (santa, iceBlock) => {
            handleCollision(santa, iceBlock, this);
        }, null, this);

        // タップ操作の設定
        this.input.on('pointerdown', () => {
            this.santa.moveUp();
            // サンタを定速で上に移動させるため、時間経過で停止
            this.time.delayedCall(300, () => {
                this.santa.stop();
            }, [], this);
        });

        // ゴール地点の設定（クリスマスツリー）
        this.goal = this.add.image(this.cameras.main.centerX, 50, 'collision'); // クリスマスツリーの画像を`collision`として仮定
        this.physics.add.existing(this.goal);
        this.goal.body.setImmovable(true);
        this.goal.body.setAllowGravity(false);

        // サンタとゴールの衝突判定
        this.physics.add.overlap(this.santa, this.goal, () => {
            this.scene.get('UIScene').showSuccessMessage();
        }, null, this);
    }

    update(time, delta) {
        // 3ステージごとに中間メッセージを表示
        if (this.stageNumber % 3 === 0 && !this.scene.get('UIScene').displayedIntermediate.has(this.stageNumber)) {
            this.scene.get('UIScene').showIntermediateMessage(this.stageNumber);
        }
    }
}

