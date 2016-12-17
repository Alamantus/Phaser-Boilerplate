// Load and process HTML and Sass through Webpack config.
import './index.html';
import './sass/main.scss';

// Import the necessary pieces of the Phaser scripts.
import 'pixi.js';
import 'p2';
import 'phaser';

// Import the Phaser states stored in /src/states.
import {ImageLoad} from './states/ImageLoad';
import {FirstScreen} from './states/FirstScreen';

// Create a new Phaser instance with same width and height as the window,
// picking webGL or canvas automatically, and putting it into HTML with the id='game'.
const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');

// Create the game states from the loaded Phaser states with autostart = false
// so they are created before anything starts.
game.state.add('ImageLoad', new ImageLoad(), false);
game.state.add('FirstScreen', new FirstScreen(), false);

// Launch the game state, clearWorld = true, clearCache = false, and parameter imgPaths object.
// After loading the ImageLoad state, be sure you don't clear the Phaser cache, or else
// you will lose the loaded images.
game.state.start('ImageLoad', true, false);
