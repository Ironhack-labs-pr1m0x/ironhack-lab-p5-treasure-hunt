class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 50;
    this.row = Math.floor(Math.random() * 10) * 50;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, 50, 50);
  }

  foundTreasure(player, treasure) {
    if (player.col === treasure.col && player.row === treasure.row) {
      this.checkIfWon(player);
      return true;
    } else {
      return false;
    }
  }

  checkIfWon(player) {
    if (player.points === 4) {
      alert(`${player.name} WON!!!`);
      location.reload();
    }
  }
}

class Player {
  constructor(col, row, name) {
    this.col = col;
    this.row = row;
    this.compass = 'S';
    this.image;
    this.points = 0;
    this.name = name;
  }

  draw() {
    this.col = constrain(this.col, 0, 450);
    this.row = constrain(this.row, 0, 450);

    if (this.compass === 'S') {
      image(this.image, this.col, this.row, 50, 50);
    } else if (this.compass === 'E') {
      image(this.imageLeft, this.col, this.row, 50, 50);
    } else if (this.compass === 'W') {
      image(this.imageRight, this.col, this.row, 50, 50);
    } else {
      image(this.imageUp, this.col, this.row, 50, 50);
    }
  }

  addPoint() {
    this.points++;
  }

  moveUp() {
    this.row -= 50;
  }
  moveDown() {
    this.row += 50;
  }
  moveLeft() {
    this.col -= 50;
  }
  moveRight() {
    this.col += 50;
  }
}

class Game {
  constructor() {
    this.player = [new Player(50, 50, 'Player 1'), new Player(250, 250, 'Player 2')];
    this.treasure = new Treasure();
  }

  drawGrid() {
    clear();
    rect(0, 0, WIDTH, WIDTH);

    for (let i = 0; i < 10; i++) {
      line(0, SQUARE_SIDE * i, 500, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, 500);
    }
  }
}
