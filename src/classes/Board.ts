import Phaser from "phaser";
import config from "../config";

export default class Board {
  private data;
  private sceneRef;

  constructor(scene: Phaser.Scene) {
    this.data = [
      ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
      ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
      ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
    ];

    this.sceneRef = scene;
  }

  update() {
    const blockSize: number = parseInt(config.width!.toString()) / 8;

    this.data.forEach((row, j) => {
      row.forEach((value, i) => {
        const x = i * blockSize + blockSize / 2;
        const y = j * blockSize + blockSize / 2;
        const color = (i + j) % 2 === 1 ? 0x222222 : 0xeeeeee;

        this.sceneRef.add.rectangle(x, y, blockSize, blockSize, color);

        if (value !== "") {
          const img = this.sceneRef.add.image(x, y, value);
          img.setScale((blockSize / img.width) * 0.8);
        }
      });
    });
  }
}
