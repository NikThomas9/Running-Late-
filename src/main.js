

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    fps: {
        target: 60,
        forceSetTimeOut: true,
    },
    scene:  [Menu, Intro1, Intro2, Intro3, Play, Success, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false,
            fps: 60,
        },
    }
};

let game = new Phaser.Game(config);

let music;

let pointsToWin = 5;
let startingPoints = 5;

let levelNumber = 1;


let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyUP, keyR, keyS, keyDown, keyRight;



let score = 0;
let highScore = 0;

let citySprite;
