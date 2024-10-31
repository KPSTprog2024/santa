// src/objects/IceBlock.js

export default class IceBlock extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, direction, speed) {
        super(scene, x, y, 'ice');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setImmovable(true);

        this.direction = direction;
        this.speed = speed;

        // 初期の速度設定
        this.setVelocity(this.getVelocityBasedOnDirection());

        // 衝突エフェクトの設定
        this.scene.physics.world.enable(this);
        this.body.setAllowGravity(false);
    }

    getVelocityBasedOnDirection() {
        if (this.direction === 'left') {
            return { x: -this.speed, y: 0 };
        } else if (this.direction === 'right') {
            return { x: this.speed, y: 0 };
        } else if (this.direction === 'up') {
            return { x: 0, y: -this.speed };
        } else if (this.direction === 'down') {
            return { x: 0, y: this.speed };
        }
    }

    move() {
        // 規則的な動きを維持
        // Phaserの物理エンジンが自動で動くため、特別な処理は不要
    }

    resetPosition(startX, startY) {
        this.setPosition(startX, startY);
        this.setVelocity(this.getVelocityBasedOnDirection());
    }

    handleCollision() {
        // 氷ブロックが衝突した際の処理
        // ここに衝突時の追加処理があれば実装
    }
}
