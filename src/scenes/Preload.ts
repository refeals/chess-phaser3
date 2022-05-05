import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("piece_b", "images/bishopb.png");
    this.load.image("piece_k", "images/kingb.png");
    this.load.image("piece_n", "images/knightb.png");
    this.load.image("piece_p", "images/pawnb.png");
    this.load.image("piece_q", "images/queenb.png");
    this.load.image("piece_r", "images/rookb.png");
    this.load.image("piece_B", "images/bishopw.png");
    this.load.image("piece_K", "images/kingw.png");
    this.load.image("piece_N", "images/knightw.png");
    this.load.image("piece_P", "images/pawnw.png");
    this.load.image("piece_Q", "images/queenw.png");
    this.load.image("piece_R", "images/rookw.png");
  }

  create() {
    this.scene.start("game");
  }
}
