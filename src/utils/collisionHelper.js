// src/utils/collisionHelper.js

export function handleCollision(santa, iceBlock, scene) {
    // サンタと氷ブロックの衝突時の処理
    santa.handleCollision();
    iceBlock.handleCollision();

    // 衝突エフェクトの表示
    const collisionEffect = scene.add.image(santa.x, santa.y, 'collision');
    scene.tweens.add({
        targets: collisionEffect,
        alpha: 0,
        duration: 500,
        onComplete: () => {
            collisionEffect.destroy();
        }
    });

    // 衝突音の再生
    scene.sound.play('collision');

    // UISceneにゲームオーバーを通知
    scene.scene.get('UIScene').showFailureMessage();
}
