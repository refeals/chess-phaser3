import Phaser from "phaser";
import config from "../config";

export default class Board {
  private data: string[][];
  private sceneRef: Phaser.Scene;
  private blockSize: number;

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
    this.blockSize = parseInt(config.width!.toString()) / 8;
  }

  private numberToLetter(num: number): string {
    switch (num) {
      case 1:
        return "a";
      case 2:
        return "b";
      case 3:
        return "c";
      case 4:
        return "d";
      case 5:
        return "e";
      case 6:
        return "f";
      case 7:
        return "g";
      case 8:
        return "h";
      default:
        return "";
    }
  }

  private drawBoard() {
    const arr = Array(8).fill(Array(8).fill(0));

    arr.forEach((row, j) => {
      row.forEach((value, i) => {
        const x = i * this.blockSize + this.blockSize / 2;
        const y = j * this.blockSize + this.blockSize / 2;
        const color = (i + j) % 2 === 1 ? 0x222222 : 0xeeeeee;

        this.sceneRef.add.rectangle(
          x,
          y,
          this.blockSize,
          this.blockSize,
          color
        );

        // if (value !== "") {
        //   const img = this.sceneRef.add.image(x, y, value);
        //   img.setScale((blockSize / img.width) * 0.8);
        // }
      });
    });
  }

  private drawNumbersAndLetters() {
    [1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => {
      const letter = this.numberToLetter(i);
      const letterX = (i - 1) * this.blockSize + this.blockSize - 2;
      const letterY = 7 * this.blockSize + this.blockSize - 14 - 4;
      const numberX = 14 - 2;
      const numberY = (i - 1) * this.blockSize;

      this.sceneRef.add.text(letterX, letterY, letter, {
        stroke: "#000",
        strokeThickness: 3,
        rtl: true,
        fontSize: "14px",
      });

      this.sceneRef.add.text(numberX, numberY, i.toString(), {
        stroke: "#000",
        strokeThickness: 3,
        rtl: true,
        fontSize: "14px",
      });
    });
  }

  update() {
    this.drawBoard();
    this.drawNumbersAndLetters();
  }
}
