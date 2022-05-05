import Phaser from "phaser";
import config from "../config";

export default class Board {
  private data: string;
  private nData: string[];
  private sceneRef: Phaser.Scene;
  private blockSize: number;

  constructor(scene: Phaser.Scene) {
    // this.data = "r1b1k1nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1";
    this.data = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    this.nData = this.normalizeData();
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

  /* Transforms "n2B4" to "n22B4444" */
  private normalizeData() {
    return this.data.split("/").map((row) => {
      const rowWithFullChars = [...row].map((c) => {
        return !isNaN(parseInt(c)) ? Array(parseInt(c)).fill(c).join("") : c;
      });

      const normalizedRow = rowWithFullChars.join("");

      return normalizedRow;
    });
  }

  private drawBoard() {
    const arr = Array(8).fill(Array(8).fill(0));

    arr.forEach((row, j) => {
      row.forEach((_, i) => {
        const x = i * this.blockSize + this.blockSize / 2;
        const y = j * this.blockSize + this.blockSize / 2;
        const color = (i + j) % 2 === 1 ? 0x769656 : 0xeeeed2;

        this.sceneRef.add.rectangle(
          x,
          y,
          this.blockSize,
          this.blockSize,
          color
        );
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

  private drawPieces() {
    this.nData.forEach((row, j) => {
      [...row].forEach((c, i) => {
        if ("rnbqkbnrRNBQKBNRpP".split("").includes(c)) {
          this.drawPiece(i, j, c);
        }
      });
    });
  }

  private drawPiece(i: number, j: number, pieceCode: string) {
    const x = i * this.blockSize + this.blockSize / 2;
    const y = j * this.blockSize + this.blockSize / 2;
    const img = this.sceneRef.add.image(x, y, `piece_${pieceCode}`);
    img.setScale((this.blockSize / img.width) * 0.8);
  }

  update() {
    this.drawBoard();
    this.drawNumbersAndLetters();
    this.drawPieces();
  }
}
