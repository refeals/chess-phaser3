import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("bb", "images/bishopb.png");
    this.load.image("bk", "images/kingb.png");
    this.load.image("bn", "images/knightb.png");
    this.load.image("bp", "images/pawnb.png");
    this.load.image("bq", "images/queenb.png");
    this.load.image("br", "images/rookb.png");
    this.load.image("wb", "images/bishopw.png");
    this.load.image("wk", "images/kingw.png");
    this.load.image("wn", "images/knightw.png");
    this.load.image("wp", "images/pawnw.png");
    this.load.image("wq", "images/queenw.png");
    this.load.image("wr", "images/rookw.png");
  }

  create() {
    this.scene.start("game");
  }
}
