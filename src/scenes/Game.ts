import Phaser from "phaser";

import Board from "../classes/Board";

export default class Game extends Phaser.Scene {
  private board;

  constructor() {
    super("game");
  }

  create() {
    this.board = new Board(this);
  }

  update() {
    this.board.update();
  }
}
