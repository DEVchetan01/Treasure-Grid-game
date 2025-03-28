

// import RaceGame from './game.js';
// import Car from './player.js';

// // Create two games with different grid sizes
// const game1 = RaceGame.create(3, 4);
// const game2 = RaceGame.create(4, 4);

// // Create players (cars)
// const carA = Car.create('Car A');
// const carB = Car.create('Car B');
// const carC = Car.create('Car C');
// const carD = Car.create('Car D');

// // Add players to the games
// game1.addPlayer(carA);
// game1.addPlayer(carB);
// game2.addPlayer(carC);
// game2.addPlayer(carD);

// // Start both games
// game1.start(1);
// game2.start(2);



// import TreasureHuntGame from './game.js';
// import Player from './player.js';

// // Create two games with different grid sizes
// const game1 = TreasureHuntGame.create(5, 5);
// const game2 = TreasureHuntGame.create(5, 5);

// // Create players (hunters)
// // const player1 = Player.create('Player 1');
// // const player2 = Player.create('Player 2');
// // const player3 = Player.create('Player 3');
// // const player4 = Player.create('Player 4');

// const player1 = Player.create('|😊|');  // Smiling Face
// const player2 = Player.create('|😎|');  // Smiling Face with Sunglasses
// const player3 = Player.create('|😂|');  // Face with Tears of Joy
// const player4 = Player.create('|😜|');  

// // Add players to the games
// game1.addPlayer(player1);
// game1.addPlayer(player2);
// game2.addPlayer(player3);
// game2.addPlayer(player4);

// // Start both games
// game1.start(1);
// game2.start(2);



import TreasureHuntGame from './game.js';
import Player from './player.js';

// Create two games with different grid sizes
const game1 = TreasureHuntGame.create(5, 5);
const game2 = TreasureHuntGame.create(5, 5);

// Create players with different smiley faces using Unicode emojis
const player1 = Player.create('😊');  // Smiling Face
const player2 = Player.create('😎');  // Smiling Face with Sunglasses
const player3 = Player.create('😂');  // Face with Tears of Joy
const player4 = Player.create('😜');  // Winking Face with Tongue

// Add players to the games
game1.addPlayer(player1);
game1.addPlayer(player2);
game2.addPlayer(player3);
game2.addPlayer(player4);

// Start both games
game1.start(1);
game2.start(2);
