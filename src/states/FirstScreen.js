import 'pixi.js';
import 'p2';
import 'phaser';

export class PortraitInterface extends Phaser.State {
	constructor() {
    super();
	}

  init () {
    // I think pre-preload stuff goes here
  }

  preload () {
    // Set how the game canvas scales when reseized.
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    // Enable beter timing for debuggng
    this.game.time.advancedTiming = true;
  }

  create () {
    // Create a worldgroup (if necesary) and sprite using loaded image.
    this.worldgroup = this.game.add.group();
    this.player = this.add.sprite(0, 0, 'red-square');
    this.player.anchor.setTo(0.5, 0.5);
    this.worldgroup.add(this.player);

    // Create general cursor keys to use if needed.
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update () {
    // Game logic goes here.
  }
}
