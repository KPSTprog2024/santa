this.retryButton.on('pointerdown', () => {
    this.hideMessages();
    this.scene.stop('MainScene');
    this.scene.start('MainScene', { stageNumber: this.registry.get('currentStage') });
});

this.menuButton.on('pointerdown', () => {
    this.hideMessages();
    this.scene.stop('MainScene');
    this.scene.start('MenuScene');
});
