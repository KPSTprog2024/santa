// メインモジュール
(function () {
    // Canvasとコンテキストの取得
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 480;
    canvas.height = 640;

    // ゲームの状態
    let gameState = 'mainMenu'; // 'mainMenu', 'stageSelect', 'playing', 'gameOver', 'stageClear', 'allClear'
    let currentStage = 1;
    const totalStages = 15;

    // モジュールの初期化
    const assetManager = new AssetManager();
    const soundManager = new SoundManager();
    const inputManager = new InputManager();
    const uiManager = new UIManager();
    let stageManager;
    let player;
    let enemies = [];
    let goal;
    let collisionManager;

    // ゲーム開始
    function init() {
        // アセットの読み込み
        assetManager.loadAssets(startGame);
    }

    // ゲームスタート
    function startGame() {
        // BGMの再生
        soundManager.playBGM('bgm');

        // メインループ開始
        gameLoop();
        showMainMenu();
    }

    // メインループ
    function gameLoop() {
        requestAnimationFrame(gameLoop);

        if (gameState === 'playing') {
            update();
            render();
        }
    }

    // ゲームの更新
    function update() {
        player.update();
        enemies.forEach(enemy => enemy.update());
        collisionManager.checkCollisions();
        goal.update();
    }

    // ゲームの描画
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.draw(ctx);
        enemies.forEach(enemy => enemy.draw(ctx));
        goal.draw(ctx);
    }

    // メインメニューの表示
    function showMainMenu() {
        uiManager.clearUI();
        uiManager.showTitle('おとどけサンタ');
        uiManager.createButton('スタート', canvas.width / 2 - 50, canvas.height / 2, () => {
            gameState = 'stageSelect';
            showStageSelect();
        });
    }

    // ステージ選択画面の表示
    function showStageSelect() {
        uiManager.clearUI();
        uiManager.showMessage('ステージを選択してください');
        for (let i = 1; i <= totalStages; i++) {
            uiManager.createButton(`ステージ ${i}`, 50 + ((i - 1) % 5) * 80, 200 + Math.floor((i - 1) / 5) * 50, () => {
                currentStage = i;
                startStage(currentStage);
            });
        }
    }

    // ステージ開始
    function startStage(stageNumber) {
        gameState = 'playing';
        uiManager.clearUI();

        // プレイヤーとその他のオブジェクトを初期化
        player = new Player(canvas.width / 2 - 25, canvas.height - 100);
        goal = new Goal(canvas.width / 2 - 25, 50);
        enemies = [];
        stageManager = new StageManager(stageNumber);
        collisionManager = new CollisionManager();

        // 敵の生成
        const enemyConfigs = stageManager.getEnemyConfigs();
        enemyConfigs.forEach(config => {
            enemies.push(new Enemy(config.x, config.y, config.speed));
        });
    }

    // ゲームオーバー処理
    function gameOver() {
        gameState = 'gameOver';
        soundManager.playSound('fail');
        uiManager.showMessage('ゲームオーバー');
        uiManager.createButton('すてーじせんたくにもどる', canvas.width / 2 - 100, canvas.height / 2, () => {
            gameState = 'stageSelect';
            showStageSelect();
        });
    }

    // ステージクリア処理
    function stageClear() {
        gameState = 'stageClear';
        soundManager.playSound('clear');
        uiManager.showMessage('ステージクリア！');
        uiManager.createButton('すてーじせんたくにもどる', canvas.width / 2 - 100, canvas.height / 2, () => {
            gameState = 'stageSelect';
            showStageSelect();
        });
    }

    // 全ステージクリア処理
    function allClear() {
        gameState = 'allClear';
        soundManager.playSound('clear');
        uiManager.showMessage('全ステージクリア！おめでとう！');
    }

    // プレイヤーモジュール
    function Player(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 5;
        this.image = assetManager.getAsset('santa');

        this.update = function () {
            if (inputManager.isTouched()) {
                this.y -= this.speed;
            } else {
                this.y += this.speed;
            }

            // 画面外に出ないようにする
            if (this.y < 0) this.y = 0;
            if (this.y > canvas.height - this.height) this.y = canvas.height - this.height;
        };

        this.draw = function (ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
    }

    // 敵モジュール
    function Enemy(x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = speed;
        this.direction = 1;
        this.image = assetManager.getAsset('ice');

        this.update = function () {
            this.x += this.speed * this.direction;
            if (this.x <= 0 || this.x >= canvas.width - this.width) {
                this.direction *= -1;
            }
        };

        this.draw = function (ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
    }

    // ゴールモジュール
    function Goal(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = assetManager.getAsset('goal');

        this.update = function () {
            // 特に何もしない
        };

        this.draw = function (ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
    }

    // 衝突判定モジュール
    function CollisionManager() {
        this.checkCollisions = function () {
            // プレイヤーと敵の衝突判定
            enemies.forEach(enemy => {
                if (isColliding(player, enemy)) {
                    gameOver();
                }
            });

            // プレイヤーとゴールの衝突判定
            if (isColliding(player, goal)) {
                stageClear();
            }
        };

        function isColliding(a, b) {
            return (
                a.x < b.x + b.width &&
                a.x + a.width > b.x &&
                a.y < b.y + b.height &&
                a.y + a.height > b.y
            );
        }
    }

    // ステージマネージャーモジュール
    function StageManager(stageNumber) {
        this.stageNumber = stageNumber;

        this.getEnemyConfigs = function () {
            const enemyConfigs = [];
            const enemyCount = Math.min(3 + stageNumber, 10);
            const enemySpeed = 1 + stageNumber * 0.5;
            for (let i = 0; i < enemyCount; i++) {
                enemyConfigs.push({
                    x: Math.random() * (canvas.width - 50),
                    y: 100 + i * 50,
                    speed: enemySpeed
                });
            }
            return enemyConfigs;
        };
    }

    // 入力モジュール
    function InputManager() {
        let touched = false;

        canvas.addEventListener('mousedown', function () {
            touched = true;
        });

        canvas.addEventListener('mouseup', function () {
            touched = false;
        });

        canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
            touched = true;
        });

        canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            touched = false;
        });

        this.isTouched = function () {
            return touched;
        };
    }

    // UIモジュール
    function UIManager() {
        const uiDiv = document.getElementById('ui');

        this.clearUI = function () {
            uiDiv.innerHTML = '';
        };

        this.showTitle = function (text) {
            const title = document.createElement('h1');
            title.innerText = text;
            title.style.color = '#fff';
            title.style.textAlign = 'center';
            uiDiv.appendChild(title);
        };

        this.showMessage = function (text) {
            const message = document.createElement('div');
            message.id = 'message';
            message.innerText = text;
            uiDiv.appendChild(message);
        };

        this.createButton = function (text, x, y, onClick) {
            const button = document.createElement('button');
            button.className = 'button';
            button.style.left = x + 'px';
            button.style.top = y + 'px';
            button.innerText = text;
            button.addEventListener('click', onClick);
            uiDiv.appendChild(button);
        };
    }

    // サウンドモジュール
    function SoundManager() {
        const sounds = {};

        this.playBGM = function (name) {
            const bgm = assetManager.getAsset(name);
            bgm.loop = true;
            bgm.volume = 0.5;
            bgm.play();
        };

        this.playSound = function (name) {
            const sound = assetManager.getAsset(name);
            sound.currentTime = 0;
            sound.play();
        };
    }

    // アセットマネージャーモジュール
    function AssetManager() {
        const assets = {};
        let assetsLoaded = 0;
        const totalAssets = 8;

        this.loadAssets = function (callback) {
            loadImage('santa', 'assets/images/santa.png');
            loadImage('ice', 'assets/images/ice.png');
            loadImage('goal', 'assets/images/goal.png');
            loadImage('background', 'assets/images/background.png');
            loadAudio('bgm', 'assets/audio/bgm.mp3');
            loadAudio('bgm2', 'assets/audio/bgm2.mp3');
            loadAudio('clear', 'assets/audio/clear.mp3');
            loadAudio('fail', 'assets/audio/fail.mp3');

            function loadImage(name, src) {
                const img = new Image();
                img.src = src;
                img.onload = assetLoaded;
                assets[name] = img;
            }

            function loadAudio(name, src) {
                const audio = new Audio(src);
                audio.addEventListener('canplaythrough', assetLoaded, false);
                assets[name] = audio;
            }

            function assetLoaded() {
                assetsLoaded++;
                if (assetsLoaded >= totalAssets) {
                    callback();
                }
            }
        };

        this.getAsset = function (name) {
            return assets[name];
        };
    }

    // ゲームの初期化
    init();
})();
