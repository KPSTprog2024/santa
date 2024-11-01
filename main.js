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
