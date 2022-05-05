import Phaser from "phaser";
import config from "../config";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
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

  create() {}

  update() {
    const blockSize: number = parseInt(config.width!.toString()) / 8;
    const board = [
      ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
      ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
      ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
    ];

    board.forEach((row, i) => {
      row.forEach((value, j) => {
        const x = j * blockSize + blockSize / 2;
        const y = i * blockSize + blockSize / 2;
        const color = (i + j) % 2 === 1 ? 0x222222 : 0xeeeeee;

        this.add.rectangle(x, y, blockSize, blockSize, color);

        if (value !== "") {
          const img = this.add.image(x, y, value);
          img.setScale((blockSize / img.width) * 0.8);
        }
      });
    });
  }
}
