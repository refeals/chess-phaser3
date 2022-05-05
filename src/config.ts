import HelloWorldScene from "./scenes/HelloWorldScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  scene: [HelloWorldScene],
};

export default config;
