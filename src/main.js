const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
}

function preload() {
  game.player.image = loadImage('/assets/character-down.png');
  game.player.imageRight = loadImage('/assets/character-right.png');
  game.player.imageLeft = loadImage('/assets/character-left.png');
  game.player.imageUp = loadImage('/assets/character-up.png');

  game.treasure.image = loadImage('/assets/treasure.png');
}

function draw() {
  game.drawGrid();
  game.player.draw();
  game.treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.moveUp();
    game.player.compass = 'N';

    if (game.treasure.foundTreasure(game.player, game.treasure)) {
      game.treasure.setRandomPosition();
    }
  }
  if (keyCode === 40) {
    game.player.moveDown();
    game.player.compass = 'S';

    if (game.treasure.foundTreasure(game.player, game.treasure)) {
      game.treasure.setRandomPosition();
    }
  }
  if (keyCode === 37) {
    game.player.moveLeft();
    game.player.compass = 'E';

    if (game.treasure.foundTreasure(game.player, game.treasure)) {
      game.treasure.setRandomPosition();
    }
  }
  if (keyCode === 39) {
    game.player.moveRight();
    game.player.compass = 'W';

    if (game.treasure.foundTreasure(game.player, game.treasure)) {
      game.treasure.setRandomPosition();
    }
  }
}
