const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
}

function preload() {
  game.player[0].image = loadImage('/assets/character-down.png');
  game.player[0].imageRight = loadImage('/assets/character-right.png');
  game.player[0].imageLeft = loadImage('/assets/character-left.png');
  game.player[0].imageUp = loadImage('/assets/character-up.png');
  game.player[1].image = loadImage('/assets/character-down.png');
  game.player[1].imageRight = loadImage('/assets/character-right.png');
  game.player[1].imageLeft = loadImage('/assets/character-left.png');
  game.player[1].imageUp = loadImage('/assets/character-up.png');

  game.treasure.image = loadImage('/assets/treasure.png');
}

function draw() {
  game.drawGrid();
  game.player[0].draw();
  game.player[1].draw();
  game.treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player[0].moveUp();
    game.player[0].compass = 'N';

    if (game.treasure.foundTreasure(game.player[0], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[0].addPoint();
      document.querySelector('.p1').innerHTML = `${game.player[0].points}`;
    }
  }
  if (keyCode === 40) {
    game.player[0].moveDown();
    game.player[0].compass = 'S';

    if (game.treasure.foundTreasure(game.player[0], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[0].addPoint();
      document.querySelector('.p1').innerHTML = `${game.player[0].points}`;
    }
  }
  if (keyCode === 37) {
    game.player[0].moveLeft();
    game.player[0].compass = 'E';

    if (game.treasure.foundTreasure(game.player[0], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[0].addPoint();
      document.querySelector('.p1').innerHTML = `${game.player[0].points}`;
    }
  }
  if (keyCode === 39) {
    game.player[0].moveRight();
    game.player[0].compass = 'W';

    if (game.treasure.foundTreasure(game.player[0], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[0].addPoint();
      document.querySelector('.p1').innerHTML = `${game.player[0].points}`;
    }
  }

  //! Player Two

  if (keyCode === 87) {
    game.player[1].moveUp();
    game.player[1].compass = 'N';

    if (game.treasure.foundTreasure(game.player[1], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[1].addPoint();
      document.querySelector('.p2').innerHTML = `${game.player[1].points}`;
    }
  }
  if (keyCode === 83) {
    game.player[1].moveDown();
    game.player[1].compass = 'S';

    if (game.treasure.foundTreasure(game.player[1], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[1].addPoint();
      document.querySelector('.p2').innerHTML = `${game.player[1].points}`;
    }
  }
  if (keyCode === 65) {
    game.player[1].moveLeft();
    game.player[1].compass = 'E';

    if (game.treasure.foundTreasure(game.player[1], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[1].addPoint();
      document.querySelector('.p2').innerHTML = `${game.player[1].points}`;
    }
  }
  if (keyCode === 68) {
    game.player[1].moveRight();
    game.player[1].compass = 'W';

    if (game.treasure.foundTreasure(game.player[1], game.treasure)) {
      game.treasure.setRandomPosition();

      game.player[1].addPoint();
      document.querySelector('.p2').innerHTML = `${game.player[1].points}`;
    }
  }
}
