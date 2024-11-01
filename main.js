// メインモジュール
(function () {
    // Canvasとコンテキストの取得
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // ゲームの状態
    let gameState = 'mainMenu'; // 'mainMenu', 'stageSelect', 'playing', 'gameOver', 'stageClear', 'allClear'
    let currentStage = 1;
    const totalStages = 10; // ステージ数を10に増加

    // モジュールの初期化（UIManagerを先に初期化）
    const assetManager = new AssetManager();
    const soundManager = new SoundManager();
    const inputManager = new InputManager();
    const uiManager = new UIManager(); // UIManagerを先に初期化
    let stageManager;
    let player;
    let enemies = [];
    let goal;
    let collisionManager;

    // 画面サイズの調整（アスペクト比の維持）
    function resizeCanvas() {
        let aspectRatio = 9 / 16; // 基準となるアスペクト比（縦長）
        let windowAspect = window.innerHeight / window.innerWidth;

        if (windowAspect > aspectRatio) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerWidth * aspectRatio;
        } else {
            canvas.height = window.innerHeight;
            canvas.width = window.innerHeight / aspectRatio;
        }

        // UIの位置を再調整
        uiManager.updateUIPositions();
    }

    // resizeCanvasを先に定義した後、イベントリスナーと初期呼び出し
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

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
        uiManager.showTitle('おとどけさんた');
        uiManager.createButton('すたーと', () => {
            gameState = 'stageSelect';
            showStageSelect();
        }, canvas.width / 2 - canvas.width * 0.075, canvas.height / 2, canvas.width * 0.15, canvas.height * 0.1);
    }

    // ステージ選択画面の表示
    function showStageSelect() {
        uiManager.clearUI();
        uiManager.showMessage('すてーじをせんたくしてください');
        const buttonWidth = canvas.width * 0.3;
        const buttonHeight = canvas.height * 0.1;
        const spacing = canvas.width * 0.05;
        const totalPerRow = 2;
        const startX = (canvas.width - (buttonWidth * totalPerRow + spacing * (totalPerRow - 1))) / 2;
        const startY = canvas.height * 0.4;

        for (let i = 1; i <= totalStages; i++) {
            const x = startX + ((i - 1) % totalPerRow) * (buttonWidth + spacing);
            const y = startY + Math.floor((i - 1) / totalPerRow) * (buttonHeight + spacing);
            uiManager.createButton(`すてーじ ${i}`, () => {
                currentStage = i;
                startStage(currentStage);
            }, x, y, buttonWidth, buttonHeight);
        }
    }

    // ステージ開始
    function startStage(stageNumber) {
        gameState = 'playing';
        uiManager.clearUI();

        // プレイヤーとゴールを初期化
        player = new Player(canvas.width / 2 - canvas.width * 0.035, canvas.height - canvas.height * 0.15);
        goal = new Goal(canvas.width / 2 - canvas.width * 0.035, canvas.height * 0.05);

        // サンタの速度を固定
        player.setSpeed(canvas.height * 0.005); // 一定速度

        // 敵の生成
        enemies = [];
        stageManager = new StageManager(stageNumber);
        collisionManager = new CollisionManager();

        const enemyConfigs = stageManager.getEnemyConfigs();
        enemyConfigs.forEach(config => {
            enemies.push(new Enemy(config.x, config.y, config.speed, config.direction, config.movementPattern));
        });
    }

    // ゲームオーバー処理
    function gameOver() {
        gameState = 'gameOver';
        soundManager.playSound('fail');
        uiManager.showMessage('げーむおーばー');
        uiManager.createButton('すてーじせんたくにもどる', () => {
            gameState = 'stageSelect';
            showStageSelect();
        }, canvas.width / 2 - canvas.width * 0.15, canvas.height / 2, canvas.width * 0.3, canvas.height * 0.1);
    }

    // ステージクリア処理
    function stageClear() {
        gameState = 'stageClear';
        soundManager.playSound('clear');
        uiManager.showMessage('すてーじくりあ！');
        if (currentStage === totalStages) {
            allClear();
        } else {
            uiManager.createButton('すてーじせんたくにもどる', () => {
                gameState = 'stageSelect';
                showStageSelect();
            }, canvas.width / 2 - canvas.width * 0.15, canvas.height / 2, canvas.width * 0.3, canvas.height * 0.1);
        }
    }

    // 全ステージクリア処理
    function allClear() {
        gameState = 'allClear';
        soundManager.playSound('clear');
        uiManager.showMessage('ぜんすてーじくりあ！おめでとう！');
        uiManager.createButton('はじめににもどる', () => {
            gameState = 'mainMenu';
            showMainMenu();
        }, canvas.width / 2 - canvas.width * 0.15, canvas.height / 2, canvas.width * 0.3, canvas.height * 0.1);
    }

    // プレイヤーモジュール
    function Player(x, y) {
        this.x = x;
        this.y = y;
        this.width = canvas.width * 0.07; // サイズを小さく
        this.height = canvas.width * 0.07; // サイズを小さく
        this.speed = canvas.height * 0.005; // 一定速度に設定
        this.image = assetManager.getAsset('santa');
        this.isMoving = false;

        this.setSpeed = function (newSpeed) {
            this.speed = newSpeed;
        };

        this.update = function () {
            if (inputManager.isTapped()) {
                this.isMoving = true;
            }

            if (this.isMoving) {
                this.y -= this.speed;
            }

            // 画面外に出ないようにする
            if (this.y < 0) {
                this.y = 0;
                this.isMoving = false;
            }
            if (this.y > canvas.height - this.height) {
                this.y = canvas.height - this.height;
            }
        };

        this.draw = function (ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
    }

    // 敵モジュール
    function Enemy(x, y, speed, direction, movementPattern) {
        this.x = x;
        this.y = y;
        this.width = canvas.width * 0.07; // サイズを小さく
        this.height = canvas.width * 0.07; // サイズを小さく
        this.speed = speed;
        this.direction = direction;
        this.movementPattern = movementPattern;
        this.image = assetManager.getAsset('ice');
        this.angle = 0; // 円形移動などの角度管理に使用
        this.radius = canvas.width * 0.05; // 円形移動の半径

        this.update = function () {
            switch (this.movementPattern) {
                case 'horizontal':
                    this.x += this.speed * this.direction;
                    if (this.x <= 0 || this.x >= canvas.width - this.width) {
                        this.direction *= -1; // 端に当たったら逆方向
                    }
                    break;

                case 'circular':
                    // 円形に動く（中心点から円を描く）
                    this.angle += this.speed * 0.1 * this.direction; // 角度を更新
                    this.x = this.originX + this.radius * Math.cos(this.angle);
                    this.y = this.originY + this.radius * Math.sin(this.angle);
                    break;

                case 'triangular':
                    // 三角形のパスを移動
                    this.angle += this.speed * 0.1 * this.direction;
                    this.x = this.originX + this.radius * Math.cos(this.angle);
                    this.y = this.originY + this.radius * Math.abs(Math.sin(this.angle * 2)); // 三角形の形を作る
                    break;

                case 'square':
                    // 四角形のパスに沿って移動
                    this.angle += this.speed * 0.05 * this.direction; // 低速で移動
                    let phase = this.angle % 4;
                    if (phase < 1) {
                        this.x += this.speed;
                    } else if (phase < 2) {
                        this.y += this.speed;
                    } else if (phase < 3) {
                        this.x -= this.speed;
                    } else {
                        this.y -= this.speed;
                    }
                    break;
            }

            // 時々スピードアップ（上限を設定）
            if (Math.random() < 0.005) {
                this.speed = Math.min(this.speed * 1.05, canvas.height * 0.006); // 上限を設定（ステージ10の速度に相当）
            }

            // 下限を設定
            this.speed = Math.max(this.speed, canvas.height * 0.003); // 下限を設定
        };

        this.draw = function (ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };

        // 初期位置の保存（円形移動用）
        this.originX = x;
        this.originY = y;
    }

    // ゴールモジュール
    function Goal(x, y) {
        this.x = x;
        this.y = y;
        this.width = canvas.width * 0.07; // サイズを小さく
        this.height = canvas.width * 0.07; // サイズを小さく
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

        // ステージごとの敵設定
        this.getEnemyConfigs = function () {
            const enemyConfigs = [];
            const baseSpeed = canvas.height * 0.003; // 基本速度
            const speedIncrement = canvas.height * 0.000333; // ステージごとの速度増加
            const maxSpeed = canvas.height * 0.006; // 最大速度（ステージ10で200に相当）

            const movementPatterns = ['horizontal', 'circular', 'triangular', 'square'];

            for (let i = 1; i <= stageNumber; i++) {
                let speed = baseSpeed + (i - 1) * speedIncrement;
                speed = Math.min(speed, maxSpeed); // 上限を設定

                // パターンを順に割り当て
                let pattern = movementPatterns[(i - 1) % movementPatterns.length];

                enemyConfigs.push({
                    x: Math.random() * (canvas.width - canvas.width * 0.07),
                    y: canvas.height * 0.4 + Math.random() * (canvas.height * 0.2),
                    speed: speed,
                    direction: Math.random() < 0.5 ? 1 : -1,
                    movementPattern: pattern
                });
            }

            return enemyConfigs;
        };
    }

    // 入力モジュール
    function InputManager() {
        let tapped = false;

        canvas.addEventListener('mousedown', function (e) {
            e.preventDefault();
            tapped = true;
        });

        canvas.addEventListener('mouseup', function (e) {
            e.preventDefault();
            // tapped remains true to indicate a tap was made
        });

        canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
            tapped = true;
        });

        canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            // tapped remains true to indicate a tap was made
        });

        this.isTapped = function () {
            if (tapped) {
                tapped = false;
                return true;
            }
            return false;
        };

        this.isTouched = function () {
            return false; // 現在の実装では使用していません
        };
    }

    // UIモジュール
    function UIManager() {
        const uiDiv = document.getElementById('ui');
        const buttons = [];

        this.clearUI = function () {
            uiDiv.innerHTML = '';
            buttons.length = 0;
        };

        this.showTitle = function (text) {
            const title = document.createElement('h1');
            title.innerText = text;
            uiDiv.appendChild(title);
        };

        this.showMessage = function (text) {
            const message = document.createElement('div');
            message.id = 'message';
            message.innerText = text;
            uiDiv.appendChild(message);
        };

        this.createButton = function (text, onClick, x, y, width, height) {
            const button = document.createElement('button');
            button.className = 'button';
            button.innerText = text;
            button.addEventListener('click', onClick);
            uiDiv.appendChild(button);
            buttons.push({ element: button, x: x, y: y, width: width, height: height });
            this.updateButtonPosition(button, x, y, width, height);
        };

        this.updateButtonPosition = function (button, x, y, width, height) {
            button.style.left = x + 'px';
            button.style.top = y + 'px';
            button.style.width = width + 'px';
            button.style.height = height + 'px';
        };

        this.updateUIPositions = function () {
            buttons.forEach(btn => {
                this.updateButtonPosition(btn.element, btn.x, btn.y, btn.width, btn.height);
            });
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
            sound.playbackRate = 1.2; // 再生速度を少し上げる
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
