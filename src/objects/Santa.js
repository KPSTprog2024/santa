// src/objects/Santa.js

export default class Santa extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'santa');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setImmovable(true);
    }

    moveUp() {
        // 上方向に定速で移動
        this.setVelocityY(-200);
    }

    stop() {
        // 移動を停止
        this.setVelocityY(0);
    }

    resetPosition(startX, startY) {
        this.setPosition(startX, startY);
        this.stop();
    }

    handleCollision() {
        // 当たり判定時の処理
        this.setTint(0xff0000);
        this.scene.time.delayedCall(200, () => {
            this.clearTint();
        }, [], this);
    }
}

