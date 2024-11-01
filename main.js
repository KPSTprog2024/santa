// main.js

// ステージ設定を直接定義（ステージ1から15まで）
const stagesConfig = {
  "stages": [
    {
      "stageNumber": 1,
      "iceBlocks": [
        { "direction": "left", "speed": 150 },
        { "direction": "right", "speed": 150 },
        { "direction": "left", "speed": 150 }
      ]
    },
    {
      "stageNumber": 2,
      "iceBlocks": [
        { "direction": "left", "speed": 153 },
        { "direction": "right", "speed": 153 },
        { "direction": "left", "speed": 153 },
        { "direction": "right", "speed": 153 }
      ]
    },
    {
      "stageNumber": 3,
      "iceBlocks": [
        { "direction": "left", "speed": 156 },
        { "direction": "right", "speed": 156 },
        { "direction": "left", "speed": 156 },
        { "direction": "right", "speed": 156 },
        { "direction": "left", "speed": 156 }
      ]
    },
    {
      "stageNumber": 4,
      "iceBlocks": [
        { "direction": "left", "speed": 159 },
        { "direction": "right", "speed": 159 },
        { "direction": "left", "speed": 159 },
        { "direction": "right", "speed": 159 },
        { "direction": "left", "speed": 159 },
        { "direction": "right", "speed": 159 }
      ]
    },
    {
      "stageNumber": 5,
      "iceBlocks": [
        { "direction": "left", "speed": 162 },
        { "direction": "right", "speed": 162 },
        { "direction": "left", "speed": 162 },
        { "direction": "right", "speed": 162 },
        { "direction": "left", "speed": 162 },
        { "direction": "right", "speed": 162 },
        { "direction": "left", "speed": 162 }
      ]
    },
    {
      "stageNumber": 6,
      "iceBlocks": [
        { "direction": "left", "speed": 165 },
        { "direction": "right", "speed": 165 },
        { "direction": "left", "speed": 165 },
        { "direction": "right", "speed": 165 },
        { "direction": "left", "speed": 165 },
        { "direction": "right", "speed": 165 },
        { "direction": "left", "speed": 165 },
        { "direction": "right", "speed": 165 }
      ]
    },
    {
      "stageNumber": 7,
      "iceBlocks": [
        { "direction": "left", "speed": 168 },
        { "direction": "right", "speed": 168 },
        { "direction": "left", "speed": 168 },
        { "direction": "right", "speed": 168 },
        { "direction": "left", "speed": 168 },
        { "direction": "right", "speed": 168 },
        { "direction": "left", "speed": 168 },
        { "direction": "right", "speed": 168 },
        { "direction": "left", "speed": 168 }
      ]
    },
    {
      "stageNumber": 8,
      "iceBlocks": [
        { "direction": "left", "speed": 171 },
        { "direction": "right", "speed": 171 },
        { "direction": "left", "speed": 171 },
        { "direction": "right", "speed": 171 },
        { "direction": "left", "speed": 171 },
        { "direction": "right", "speed": 171 },
        { "direction": "left", "speed": 171 },
        { "direction": "right", "speed": 171 },
        { "direction": "left", "speed": 171 },
        { "direction": "right", "speed": 171 }
      ]
    },
    {
      "stageNumber": 9,
      "iceBlocks": [
        { "direction": "left", "speed": 174 },
        { "direction": "right", "speed": 174 },
        { "direction": "left", "speed": 174 },
        { "direction": "right", "speed": 174 },
        { "direction": "left", "speed": 174 },
        { "direction": "right", "speed": 174 },
        { "direction": "left", "speed": 174 },
        { "direction": "right", "speed": 174 },
        { "direction": "left", "speed": 174 },
        { "direction": "right", "speed": 174 },
        { "direction": "left", "speed": 174 }
      ]
    },
    {
      "stageNumber": 10,
      "iceBlocks": [
        { "direction": "left", "speed": 177 },
        { "direction": "right", "speed": 177 },
        { "direction": "left", "speed": 177 },
        { "direction": "right", "speed": 177 },
        { "direction": "left", "speed": 177 },
        { "direction": "right", "speed": 177 },
        { "direction": "left", "speed": 177 },
        { "direction": "right", "speed": 177 },
        { "direction": "left", "speed": 177 },
        { "direction": "right", "speed": 177 },
        { "direction": "left", "speed": 177 },
        { "direction": "right", "speed": 177 }
      ]
    },
    {
      "stageNumber": 11,
      "iceBlocks": [
        { "direction": "left", "speed": 180 },
        { "direction": "right", "speed": 180 },
        { "direction": "left", "speed": 180 },
        { "direction": "right", "speed": 180 },
        { "direction": "left", "speed": 180 },
        { "direction": "right", "speed": 180 },
        { "direction": "left", "speed": 180 },
        { "direction": "right", "speed": 180 },
        { "direction": "left", "speed": 180 },
        { "direction": "right", "speed": 180 },
        { "direction": "left", "speed": 180 },
        { "direction": "right", "speed": 180 },
        { "direction": "left", "speed": 180 }
      ]
    },
    {
      "stageNumber": 12,
      "iceBlocks": [
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 },
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 },
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 },
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 },
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 },
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 },
        { "direction": "left", "speed": 183 },
        { "direction": "right", "speed": 183 }
      ]
    },
    {
      "stageNumber": 13,
      "iceBlocks": [
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 },
        { "direction": "right", "speed": 186 },
        { "direction": "left", "speed": 186 }
      ]
    },
    {
      "stageNumber": 14,
      "iceBlocks": [
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 },
        { "direction": "left", "speed": 189 },
        { "direction": "right", "speed": 189 }
      ]
    },
    {
      "stageNumber": 15,
      "iceBlocks": [
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 },
        { "direction": "right", "speed": 192 },
        { "direction": "left", "speed": 192 }
      ]
    }
  ]
};

// メッセージヘルパー関数
function getRandomMessage(type) {
    const clearMessages = [
        "めりーくりすます！ つぎはあのこのいえだ！",
        "やったね！ つぎのぷれぜんとをとどけにいこう！",
        "めりーくりすます！ まだまだとどけるよ！",
        "くりすますのよるはながいぞ！つぎにいくぞ！",
        "おめでとう！さんたさん、つぎもがんばろう！",
        "よくやった！ あのみちにもぷれぜんとをとどけにいくよ！",
        "めりーくりすます！つぎはおそらをこえていくよ！",
        "つぎのぷれぜんともとどけにいくぞ！",
        "やったね！まだまだぷれぜんとをとどけるよ！",
        "めりーくりすます！さあ、つぎのいえまでいそごう！",
        "すばらしい！つぎのぷれぜんともまちがいなし！",
        "さんたさん、もういっかいちょうせんしてみよう！",
        "くりすますのまほうをかんじて！つぎへすすもう！",
        "すごい！つぎのすてーじもたのしもう！",
        "めりーくりすます！さいごのすてーじだよ！"
    ];

    const failMessages = [
        "おっと、あわてんぼうのさんたさんになっちゃった！",
        "こおりはすべるから、きをつけないと！",
        "よし、もういちどためしてみよう！",
        "あれれ？さんた、ゆきのなかでころんじゃった！",
        "どんまい！さんたさん、こんどはうまくいくよ！",
        "つぎはきをつけてすすもう！",
        "さんたさん、こおりにはきをつけてね！",
        "あわてずに、もういちどいこう！",
        "さんたさんもちゃれんじがだいすきなんだ！",
        "こんどはうまくいくさ！ふかふかのゆきもまってるよ！"
    ];

    const intermediateMessages = [
        "さんたさんのぷれぜんとは、どこにいくかな？",
        "ゆきのじかんが、ゆっくりとすすむよ。",
        "さんたさんのまほうが、ゆきにきらめきをつける！",
        "くりすますのまいにちが、もっとたのしくなるよ。",
        "さんたさんといっしょに、もっとたのしいひをすごそう！",
        "ゆきだまが、さんたさんをまっています！",
        "さんたさん、せんせいからのきょうこくがきこえてきた！",
        "まほうのぼうしが、さんたさんにひかっています！",
        "ゆきのしろいまつりが、もうすぐおわるよ！",
        "さんたさん、ひみつのまほうをみつけた！"
    ];

    if (type === 'clear') {
        return clearMessages[Math.floor(Math.random() * clearMessages.length)];
    } else if (type === 'fail') {
        return failMessages[Math.floor(Math.random() * failMessages.length)];
    } else if (type === 'intermediate') {
        return intermediateMessages[Math.floor(Math.random() * intermediateMessages.length)];
    } else {
        return "";
    }
}

// 画像サイズを適切に調整する関数
function resizeSprite(sprite, targetWidth, targetHeight) {
    sprite.setDisplaySize(targetWidth, targetHeight);
    return sprite;
}

// サンタクラス
class Santa extends Phaser.Physics.Arcade.Sprite {
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

// 氷ブロッククラス
class IceBlock extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, direction, speed) {
        super(scene, x, y, 'ice');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setImmovable(true);
        this.setBounce(1); // 壁に衝突したら速度を反転

        this.direction = direction;
        this.speed = speed;

        // 初期の速度設定
        const velocity = this.getVelocityBasedOnDirection();
        this.setVelocity(velocity.x, velocity.y);

        // 重力の無効化
        this.body.setAllowGravity(false);
    }

    getVelocityBasedOnDirection() {
        if (this.direction === 'left') {
            return { x: -this.speed, y: 0 };
        } else if (this.direction === 'right') {
            return { x: this.speed, y: 0 };
        } else {
            // 'up' や 'down' は無視する
            return { x: 0, y: 0 };
        }
    }

    handleCollision() {
        // 氷ブロックが衝突した際の処理（必要に応じて実装）
    }
}

// UISceneクラス
class UIScene extends Phaser.Scene {
    constructor() {
        super({ key: 'UIScene', active: true });
    }

    create() {
        // メッセージコンテナの初期化
        this.messageContainer = this.add.container(this.cameras.main.centerX, this.cameras.main.centerY);
        this.messageContainer.setDepth(1);
        this.messageContainer.setVisible(false);

        // メッセージテキストの初期化（非インタラクティブ）
        this.messageText = this.add.text(0, -60, '', {
            fontSize: '24px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 },
            align: 'center',
            wordWrap: { width: this.cameras.main.width - 80, useAdvancedWrap: true }
        }).setOrigin(0.5);

        // メッセージテキストをコンテナに追加
        this.messageContainer.add(this.messageText);

        // 「すてーじせんたくにもどる」ボタンの初期化
        this.stageSelectButton = this.add.text(0, 0, 'すてーじせんたくにもどる', {
            fontSize: '22px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();
        this.stageSelectButton.setVisible(false);
        this.messageContainer.add(this.stageSelectButton);

        // 「もういっかいはこぶ！」ボタンの初期化
        this.retryButton = this.add.text(0, 40, 'もういっかいはこぶ！', {
            fontSize: '22px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();
        this.retryButton.setVisible(false);
        this.messageContainer.add(this.retryButton);

        // ボタンのイベント設定
        this.stageSelectButton.on('pointerdown', () => {
            this.hideMessages();
            this.scene.stop('MainScene');
            this.scene.start('StageSelectScene');
        });

        this.retryButton.on('pointerdown', () => {
            this.hideMessages();
            this.scene.stop('MainScene');
            this.scene.start('MainScene', { stageNumber: this.registry.get('currentStage') });
        });

        // フラグの初期化
        this.displayedIntermediate = new Set();
    }

    showSuccessMessage() {
        if (this.messageContainer.visible) {
            return; // 既にメッセージが表示されている場合は何もしない
        }

        const message = getRandomMessage('clear');
        this.messageText.setText(message);
        this.stageSelectButton.setVisible(true);
        this.messageContainer.setVisible(true);
    }

    showFailureMessage() {
        if (this.messageContainer.visible) {
            return; // 既にメッセージが表示されている場合は何もしない
        }

        const message = getRandomMessage('fail');
        this.messageText.setText(message);
        this.retryButton.setVisible(true);
        this.messageContainer.setVisible(true);
    }

    showIntermediateMessage(stageNumber) {
        if (!this.displayedIntermediate.has(stageNumber)) {
            const message = getRandomMessage('intermediate');
            this.messageText.setText(message);
            this.messageContainer.setVisible(true);
            this.displayedIntermediate.add(stageNumber);

            // メッセージを2秒後に自動で非表示
            this.time.delayedCall(2000, () => {
                this.hideMessages();
            }, [], this);
        }
    }

    hideMessages() {
        this.messageContainer.setVisible(false);
        this.stageSelectButton.setVisible(false);
        this.retryButton.setVisible(false);
    }

    showFinalMessage() {
        if (this.messageContainer.visible) {
            return; // 既にメッセージが表示されている場合は何もしない
        }

        const message = "すべてのステージをクリアしました！めりーくりすます！";
        this.messageText.setText(message);
        this.stageSelectButton.setText('すてーじせんたくにもどる').setVisible(true);
        this.messageContainer.setVisible(true);
    }
}

// BootSceneクラス
class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // 画像のロード
        this.load.image('background', 'assets/images/background.png');
        this.load.image('santa', 'assets/images/santa.png');
        this.load.image('ice', 'assets/images/ice.png');
        this.load.image('collision', 'assets/images/collision.png');

        // 音声のロード
        this.load.audio('bgm', ['assets/audio/bgm.mp3']);
        this.load.audio('bgm2', ['assets/audio/bgm2.mp3']); // bgm2をロード
        this.load.audio('clear', ['assets/audio/clear.mp3']);
        this.load.audio('fail', ['assets/audio/fail.mp3']);
        this.load.audio('collision', ['assets/audio/collision.mp3']);
    }

    create() {
        // BGMの交互再生を開始
        this.currentBGM = 'bgm';
        this.playBGM(this.currentBGM);

        // ステージ設定をグローバルに保存
        this.registry.set('stages', stagesConfig);

        // UISceneを開始
        this.scene.launch('UIScene');

        // メニューシーンへ遷移
        this.scene.start('MenuScene');
    }

    playBGM(key) {
        this.sound.play(key, { loop: false });

        const nextBGM = key === 'bgm' ? 'bgm2' : 'bgm';

        this.sound.once('complete', () => {
            this.playBGM(nextBGM);
        }, this);
    }
}

// MenuSceneクラス
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        // 背景の表示
        const background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');
        resizeSprite(background, this.cameras.main.width, this.cameras.main.height);

        // タイトルテキスト
        this.add.text(this.cameras.main.centerX, 200, 'おとどけサンタ', {
            fontSize: '48px',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // スタートボタン
        const startButton = this.add.text(this.cameras.main.centerX, 400, 'スタート', {
            fontSize: '32px',
            fill: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerdown', () => {
            // 最初のステージにリセット
            this.registry.set('currentStage', 1);
            this.scene.start('StageSelectScene');
        });

        // 設定ボタン（削除）
        // 設定ボタンのコードを削除しました
    }
}

// StageSelectSceneクラス
class StageSelectScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StageSelectScene' });
    }

    create() {
        // 背景の表示
        const background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');
        resizeSprite(background, this.cameras.main.width, this.cameras.main.height);

        // ステージ選択タイトル
        this.add.text(this.cameras.main.centerX, 100, 'ステージをせんたく', {
            fontSize: '36px',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        const stages = stagesConfig.stages;
        const stagesPerRow = 3;
        const buttonWidth = 120;
        const buttonHeight = 40;
        const padding = 20;
        const totalWidth = stagesPerRow * (buttonWidth + padding) - padding;
        const startX = this.cameras.main.centerX - totalWidth / 2 + buttonWidth / 2;
        const startY = 200;

        stages.forEach((stage, index) => {
            const row = Math.floor(index / stagesPerRow);
            const col = index % stagesPerRow;

            const x = startX + col * (buttonWidth + padding);
            const y = startY + row * (buttonHeight + padding);

            const stageButton = this.add.text(x, y, `Stage ${stage.stageNumber}`, {
                fontSize: '20px',
                fill: '#00ff00',
                backgroundColor: '#000000',
                padding: { x: 10, y: 10 },
                align: 'center'
            }).setOrigin(0.5).setInteractive();

            stageButton.on('pointerdown', () => {
                this.registry.set('currentStage', stage.stageNumber);
                this.scene.start('MainScene', { stageNumber: stage.stageNumber });
            });
        });

        // メニューボタン
        const menuButton = this.add.text(this.cameras.main.centerX, this.cameras.main.height - 50, 'メニューにかえる', {
            fontSize: '28px',
            fill: '#ffffff',
            backgroundColor: '#ff0000',
            padding: { x: 20, y: 10 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        menuButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}

// MainSceneクラス
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    init(data) {
        this.stageNumber = data.stageNumber || 1;
        this.isStageCleared = false; // ステージクリアフラグ
    }

    create() {
        // 背景の表示
        const background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');
        resizeSprite(background, this.cameras.main.width, this.cameras.main.height);

        // ステージ設定の取得
        this.stageConfig = stagesConfig.stages.find(stage => stage.stageNumber === this.stageNumber);

        if (!this.stageConfig) {
            console.error(`Stage ${this.stageNumber} not found.`);
            this.scene.start('MenuScene');
            return;
        }

        // サンタの初期位置（見切れないように調整）
        this.startX = this.cameras.main.centerX;
        this.startY = this.cameras.main.height - 100; // 画面下から100px上

        // サンタの作成
        this.santa = new Santa(this, this.startX, this.startY);
        resizeSprite(this.santa, 50, 50); // サンタのサイズを調整

        // 氷ブロックの作成
        this.iceBlocks = [];
        this.stageConfig.iceBlocks.forEach(blockConfig => {
            // X位置を画面幅に応じて設定
            let x;
            if (blockConfig.direction === 'left') {
                x = this.cameras.main.width - 50;
            } else if (blockConfig.direction === 'right') {
                x = 50;
            } else {
                // 'up' や 'down' は無視する
                x = Phaser.Math.Between(100, this.cameras.main.width - 100);
            }

            // Y位置をランダムに設定
            const y = Phaser.Math.Between(100, this.cameras.main.height - 200);

            const iceBlock = new IceBlock(this, x, y, blockConfig.direction, blockConfig.speed);
            resizeSprite(iceBlock, 40, 40); // 氷ブロックのサイズを調整
            this.iceBlocks.push(iceBlock);
        });

        // 衝突判定の設定
        this.physics.add.overlap(this.santa, this.iceBlocks, (santa, iceBlock) => {
            if (!this.isStageCleared) {
                handleCollision(santa, iceBlock, this);
            }
        }, null, this);

        // タップ操作の設定
        this.input.on('pointerdown', () => {
            // サンタが既に動いていない場合のみ移動を開始
            if (!this.isMovingUp) {
                this.isMovingUp = true;
                this.santa.moveUp();
            }
        });

        // ゴール地点の設定（クリスマスツリー）
        this.goal = this.add.image(this.cameras.main.centerX, 50, 'collision');
        resizeSprite(this.goal, 60, 60); // ゴールのサイズを調整
        this.physics.add.existing(this.goal);
        this.goal.body.setImmovable(true);
        this.goal.body.setAllowGravity(false);

        // サンタとゴールの衝突判定
        this.physics.add.overlap(this.santa, this.goal, () => {
            if (!this.isStageCleared) {
                this.isStageCleared = true;
                this.scene.get('UIScene').showSuccessMessage();
                this.santa.stop();
                this.isMovingUp = false;
            }
        }, null, this);

        // UISceneを取得
        this.uiScene = this.scene.get('UIScene');
    }

    update(time, delta) {
        // 3ステージごとに中間メッセージを表示
        if (this.stageNumber % 3 === 0 && !this.uiScene.displayedIntermediate.has(this.stageNumber)) {
            this.uiScene.showIntermediateMessage(this.stageNumber);
        }

        // サンタがゴールに到達した場合、動きを停止
        if (this.isMovingUp && this.santa.y <= 50) {
            this.santa.stop();
            this.isMovingUp = false;
        }
    }
}

// 衝突ハンドラー関数
function handleCollision(santa, iceBlock, scene) {
    // サンタと氷ブロックの衝突時の処理
    santa.handleCollision();
    iceBlock.handleCollision();

    // 衝突エフェクトの表示
    const collisionEffect = scene.add.image(santa.x, santa.y, 'collision');
    resizeSprite(collisionEffect, 30, 30); // 衝突エフェクトのサイズを調整
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

    // サンタの移動を停止
    santa.stop();
    scene.isMovingUp = false;

    // UISceneにゲームオーバーを通知
    scene.scene.get('UIScene').showFailureMessage();
}

// Phaser.Gameの設定
const config = {
    type: Phaser.AUTO,
    // ゲームのスケーリング設定を追加
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'game-container',
        width: 480,
        height: 800,
    },
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
