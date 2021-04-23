class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.setVelocityX(-400);
    }

    update(){
        /*this.x -= this.moveSpeed;
        if(this.x < -this.width){
            this.x = game.config.width;
        }*/
        
    }
    reset() {
        this.x = game.config.width + 50;
        this.alpha = 1;
    }
}