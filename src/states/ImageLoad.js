import 'pixi.js';
import 'p2';
import 'phaser';

// Import the images from their folder(s).
import redSquareImagePath from '../images/ui/red-square.png';

export class ImageLoad extends Phaser.State {
	constructor() {
    super();
	}

	preload () {
    // Load the images into spritesheets/images in the phaser image cache
    // so they can be accessed by name.
    this.load.spritesheet('red-square', redSquareImagePath, 32, 32);
	}

  create () {
    // After loading the images, load the first screen.
    this.game.state.start('FirstScreen', true, false);
  }
}
