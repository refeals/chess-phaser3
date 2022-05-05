import Game from "./scenes/Game";
import Preload from "./scenes/Preload";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  scene: [Preload, Game],
};

export default config;
