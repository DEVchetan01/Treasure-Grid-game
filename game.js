

// import Car from './player.js';

// export default class RaceGame {
//   constructor(gridWidth, gridHeight) {
//     this.gridWidth = gridWidth;
//     this.gridHeight = gridHeight;
//     this.grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('_'));
//     this.players = [];
//     this.finishLine = this.randomFinishLine();
//     this.turn = 1;  // To track game turns
//   }

//   static create(gridWidth, gridHeight) {
//     return new RaceGame(gridWidth, gridHeight);
//   }

//   randomFinishLine() {
//     // Randomly pick a position for the finish line
//     return [Math.floor(Math.random() * this.gridHeight), Math.floor(Math.random() * this.gridWidth)];
//   }

//   addPlayer(player) {
//     // Randomly place the player in an empty spot
//     let x, y;
//     do {
//       x = Math.floor(Math.random() * this.gridHeight);
//       y = Math.floor(Math.random() * this.gridWidth);
//     } while (this.grid[x][y] !== '_');
//     player.setPosition(x, y);
//     this.players.push(player);
//   }

//   start(gameNumber) {
//     console.log(`Race has started! The finish line is at (${this.finishLine[0]}, ${this.finishLine[1]})`);
//     this.runGame(gameNumber);
//   }

//   runGame(gameNumber) {
//     const interval = setInterval(() => {
//       console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//       this.printGrid(gameNumber);
//       this.movePlayers();
      
//       if (this.checkWinner()) {
//         clearInterval(interval);
//         console.log('A player has reached the finish line! Game over.');
//       }
      
//       this.turn++;
//     }, 5000);  // Update every 5 seconds
//   }

//   movePlayers() {
//     this.players.forEach(player => {
//       if (player.isAlive()) {
//         const directions = ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'];
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         player.move(direction);
//       }
//     });
//   }

//   checkWinner() {
//     return this.players.some(player => player.x === this.finishLine[0] && player.y === this.finishLine[1]);
//   }

//   printGrid(gameNumber) {
//     let gridCopy = this.grid.map(row => [...row]);
    
//     this.players.forEach(player => {
//       if (player.isAlive() && player.x >= 0 && player.x < this.gridHeight && player.y >= 0 && player.y < this.gridWidth) {
//         gridCopy[player.x][player.y] = player.name[0];  // Show the player's name initial on the grid
//       }
//     });

//     // Print the grid in the desired format
//     console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//     gridCopy.forEach(row => {
//       console.log(row.join(' '));
//     });
//   }
// }



// import Player from './player.js';

// export default class TreasureHuntGame {
//   constructor(gridWidth, gridHeight) {
//     this.gridWidth = gridWidth;
//     this.gridHeight = gridHeight;
//     this.grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('_'));
//     this.players = [];
//     this.treasurePosition = this.randomPosition();
//     this.turn = 1;  // To track game turns
//   }

//   static create(gridWidth, gridHeight) {
//     return new TreasureHuntGame(gridWidth, gridHeight);
//   }

//   randomPosition() {
//     // Randomly pick a position for the treasure
//     const x = Math.floor(Math.random() * this.gridHeight);
//     const y = Math.floor(Math.random() * this.gridWidth);
//     return [x, y];
//   }

//   addPlayer(player) {
//     let x, y;
//     do {
//       x = Math.floor(Math.random() * this.gridHeight);
//       y = Math.floor(Math.random() * this.gridWidth);
//     } while (this.grid[x][y] !== '_');  // Ensure empty spot
//     player.setPosition(x, y);
//     this.players.push(player);
//   }

//   start(gameNumber) {
//     console.log(`Treasure Hunt has started! The treasure is hidden at (${this.treasurePosition[0]}, ${this.treasurePosition[1]})`);
//     this.runGame(gameNumber);
//   }

//   runGame(gameNumber) {
//     const interval = setInterval(() => {
//       console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//       this.printGrid(gameNumber);
//       this.movePlayers();

//       if (this.checkWinner()) {
//         clearInterval(interval);
//         console.log('A player has found the treasure! Game over.');
//       }

//       this.turn++;
//     }, 5000);  // Update every 5 seconds
//   }

//   movePlayers() {
//     this.players.forEach(player => {
//       if (player.isAlive()) {
//         const directions = ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'];
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         player.move(direction);
//       }
//     });
//   }

//   checkWinner() {
//     return this.players.some(player => player.x === this.treasurePosition[0] && player.y === this.treasurePosition[1]);
//   }

//   printGrid(gameNumber) {
//     let gridCopy = this.grid.map(row => [...row]);

//     // Mark treasure on the grid
//     gridCopy[this.treasurePosition[0]][this.treasurePosition[1]] = 'T';

//     this.players.forEach(player => {
//       if (player.isAlive() && player.x >= 0 && player.x < this.gridHeight && player.y >= 0 && player.y < this.gridWidth) {
//         if (gridCopy[player.x][player.y] === 'T') {
//           player.setEliminated();
//         }
//         gridCopy[player.x][player.y] = player.name[0];
//       }
//     });

//     console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//     gridCopy.forEach(row => {
//       console.log(row.join(' '));
//     });
//   }
// }



// import Player from './player.js';

// export default class TreasureHuntGame {
//   constructor(gridWidth, gridHeight) {
//     this.gridWidth = gridWidth;
//     this.gridHeight = gridHeight;
//     this.grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('_'));
//     this.players = [];
//     this.treasurePosition = this.randomPosition();
//     this.turn = 1;  // To track game turns
//   }

//   static create(gridWidth, gridHeight) {
//     return new TreasureHuntGame(gridWidth, gridHeight);
//   }

//   randomPosition() {
//     // Randomly pick a position for the treasure
//     const x = Math.floor(Math.random() * this.gridHeight);
//     const y = Math.floor(Math.random() * this.gridWidth);
//     return [x, y];
//   }

//   addPlayer(player) {
//     let x, y;
//     do {
//       x = Math.floor(Math.random() * this.gridHeight);
//       y = Math.floor(Math.random() * this.gridWidth);
//     } while (this.grid[x][y] !== '_');  // Ensure empty spot
//     player.setPosition(x, y);
//     this.players.push(player);
//   }

//   start(gameNumber) {
//     console.log(`Treasure Hunt has started! The treasure is hidden at (${this.treasurePosition[0]}, ${this.treasurePosition[1]})`);
//     this.runGame(gameNumber);
//   }

//   runGame(gameNumber) {
//     const interval = setInterval(() => {
//       console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//       this.printGrid(gameNumber);
//       this.movePlayers();

//       if (this.checkWinner()) {
//         clearInterval(interval);
//         console.log('A player has found the treasure! Game over.');
//       }

//       this.turn++;
//     }, 5000);  // Update every 5 seconds
//   }

//   movePlayers() {
//     this.players.forEach(player => {
//       if (player.isAlive()) {
//         const directions = ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'];
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         player.move(direction);
//       }
//     });
//   }

//   checkWinner() {
//     return this.players.some(player => player.x === this.treasurePosition[0] && player.y === this.treasurePosition[1]);
//   }

//   printGrid(gameNumber) {
//     let gridCopy = this.grid.map(row => [...row]);

//     // Mark treasure on the grid
//     gridCopy[this.treasurePosition[0]][this.treasurePosition[1]] = 'T';

//     this.players.forEach(player => {
//       if (player.isAlive() && player.x >= 0 && player.x < this.gridHeight && player.y >= 0 && player.y < this.gridWidth) {
//         if (gridCopy[player.x][player.y] === 'T') {
//           player.setEliminated();
//         }
//         gridCopy[player.x][player.y] = player.name;
//       }
//     });

//     console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//     gridCopy.forEach(row => {
//       console.log(row.join(' '));
//     });
//   }
// }




// import Player from './player.js';

// export default class TreasureHuntGame {
//   constructor(gridWidth, gridHeight) {
//     this.gridWidth = gridWidth;
//     this.gridHeight = gridHeight;
//     this.grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('  ')); // Make each cell 2 spaces
//     this.players = [];
//     this.treasurePosition = this.randomPosition();
//     this.turn = 1;
//   }

//   static create(gridWidth, gridHeight) {
//     return new TreasureHuntGame(gridWidth, gridHeight);
//   }

//   randomPosition() {
//     // Randomly pick a position for the treasure
//     const x = Math.floor(Math.random() * this.gridHeight);
//     const y = Math.floor(Math.random() * this.gridWidth);
//     return [x, y];
//   }

//   addPlayer(player) {
//     let x, y;
//     do {
//       x = Math.floor(Math.random() * this.gridHeight);
//       y = Math.floor(Math.random() * this.gridWidth);
//     } while (this.grid[x][y] !== '  '); // Ensure empty spot
//     player.setPosition(x, y);
//     this.players.push(player);
//   }

//   start(gameNumber) {
//     console.log(`Treasure Hunt has started! The treasure is hidden at (${this.treasurePosition[0]}, ${this.treasurePosition[1]})`);
//     this.runGame(gameNumber);
//   }

//   runGame(gameNumber) {
//     const interval = setInterval(() => {
//       console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//       this.printGrid(gameNumber);
//       this.movePlayers();

//       if (this.checkWinner()) {
//         clearInterval(interval);
//         console.log('A player has found the treasure! Game over.');
//       }

//       this.turn++;
//     }, 5000);  // Update every 5 seconds
//   }

//   movePlayers() {
//     this.players.forEach(player => {
//       if (player.isAlive()) {
//         const directions = ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'];
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         player.move(direction);
//       }
//     });
//   }

//   checkWinner() {
//     return this.players.some(player => player.x === this.treasurePosition[0] && player.y === this.treasurePosition[1]);
//   }

//   printGrid(gameNumber) {
//     let gridCopy = this.grid.map(row => [...row]);

//     // Mark treasure on the grid
//     gridCopy[this.treasurePosition[0]][this.treasurePosition[1]] = ' T'; // Single space for T

//     this.players.forEach(player => {
//       if (player.isAlive() && player.x >= 0 && player.x < this.gridHeight && player.y >= 0 && player.y < this.gridWidth) {
//         if (gridCopy[player.x][player.y] === ' T') {
//           player.setEliminated();
//         }
//         gridCopy[player.x][player.y] = player.name.padEnd(2, ' ');  // Ensure emoji has enough space
//       }
//     });

//     console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//     gridCopy.forEach(row => {
//       console.log(row.join(''));
//     });
//   }
// }

// import Player from './player.js';

// export default class TreasureHuntGame {
//   constructor(gridWidth, gridHeight) {
//     this.gridWidth = gridWidth;
//     this.gridHeight = gridHeight;
//     this.grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('  ')); // Make each cell 2 spaces
//     this.players = [];
//     this.treasurePosition = this.randomPosition();
//     this.turn = 1;
//   }

//   static create(gridWidth, gridHeight) {
//     return new TreasureHuntGame(gridWidth, gridHeight);
//   }

//   randomPosition() {
//     // Randomly pick a position for the treasure
//     const x = Math.floor(Math.random() * this.gridHeight);
//     const y = Math.floor(Math.random() * this.gridWidth);
//     return [x, y];
//   }

//   addPlayer(player) {
//     let x, y;
//     do {
//       x = Math.floor(Math.random() * this.gridHeight);
//       y = Math.floor(Math.random() * this.gridWidth);
//     } while (this.grid[x][y] !== '  '); // Ensure empty spot
//     player.setPosition(x, y);
//     this.players.push(player);
//   }

//   start(gameNumber) {
//     console.log(`Treasure Hunt has started! The treasure is hidden at (${this.treasurePosition[0]}, ${this.treasurePosition[1]})`);
//     this.runGame(gameNumber);
//   }

//   runGame(gameNumber) {
//     const interval = setInterval(() => {
//       console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//       this.printGrid(gameNumber);
//       this.movePlayers();

//       if (this.checkWinner()) {
//         clearInterval(interval);
//         console.log('A player has found the treasure! Game over.');
//       }

//       this.turn++;
//     }, 5000);  // Update every 5 seconds
//   }

//   movePlayers() {
//     this.players.forEach(player => {
//       if (player.isAlive()) {
//         const directions = ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'];
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         player.move(direction);
//       }
//     });
//   }

//   checkWinner() {
//     return this.players.some(player => player.x === this.treasurePosition[0] && player.y === this.treasurePosition[1]);
//   }

//   printGrid(gameNumber) {
//     let gridCopy = this.grid.map(row => [...row]);

//     // Mark treasure on the grid
//     gridCopy[this.treasurePosition[0]][this.treasurePosition[1]] = ' 💰'; // Single space for T

//     this.players.forEach(player => {
//       if (player.isAlive() && player.x >= 0 && player.x < this.gridHeight && player.y >= 0 && player.y < this.gridWidth) {
//         if (gridCopy[player.x][player.y] === ' 💰') {
//           player.setEliminated();
//         }
//         gridCopy[player.x][player.y] = player.name.padEnd(2, ' ');  // Ensure emoji has enough space
//       }
//     });

//     console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
//     gridCopy.forEach(row => {
//       console.log('|' + row.join('|') + '|');  // Use | as delimiters for the grid
//     });
//   }
// }




import Player from './player.js';

export default class TreasureHuntGame {
  constructor(gridWidth, gridHeight) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('  ')); // Make each cell 2 spaces
    this.players = [];
    this.treasurePosition = this.randomPosition();
    this.turn = 1;
  }

  static create(gridWidth, gridHeight) {
    return new TreasureHuntGame(gridWidth, gridHeight);
  }

  randomPosition() {
    // Randomly pick a position for the treasure
    const x = Math.floor(Math.random() * this.gridHeight);
    const y = Math.floor(Math.random() * this.gridWidth);
    return [x, y];
  }

  addPlayer(player) {
    let x, y;
    do {
      x = Math.floor(Math.random() * this.gridHeight);
      y = Math.floor(Math.random() * this.gridWidth);
    } while (this.grid[x][y] !== '  '); // Ensure empty spot
    player.setPosition(x, y);
    this.players.push(player);
  }

  start(gameNumber) {
    console.log(`Treasure Hunt has started! The treasure is hidden at (${this.treasurePosition[0]}, ${this.treasurePosition[1]})`);
    this.runGame(gameNumber);
  }

  runGame(gameNumber) {
    const interval = setInterval(() => {
      console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
      this.printGrid(gameNumber);
      this.movePlayers();

      if (this.checkWinner(gameNumber, interval)) {
        clearInterval(interval);
      }

      this.turn++;
    }, 5000);  // Update every 5 seconds
  }

  movePlayers() {
    this.players.forEach(player => {
      if (player.isAlive()) {
        const directions = ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'];
        const direction = directions[Math.floor(Math.random() * directions.length)];
        player.move(direction);
      }
    });
  }

  checkWinner(gameNumber, interval) {
    // Check if any player has reached the treasure
    const winner = this.players.find(player => player.x === this.treasurePosition[0] && player.y === this.treasurePosition[1]);

    if (winner) {
      console.log(`${winner.name} has reached the treasure at (${this.treasurePosition[0]}, ${this.treasurePosition[1]}) and won the game!`);
      console.log(`Game ${gameNumber} over: ${winner.name} wins by reaching the treasure!`);
      return true;
    }

    // Check if two players occupy the same position
    this.checkCollisions();

    return false;
  }

  checkCollisions() {
    const playerPositions = {};

    this.players.forEach(player => {
      if (player.isAlive()) {
        const posKey = `${player.x},${player.y}`;
        if (playerPositions[posKey]) {
          // Collision detected
          const collidedPlayers = playerPositions[posKey];
          collidedPlayers.push(player);
          collidedPlayers.forEach(p => p.setEliminated(`collided with ${collidedPlayers.map(p => p.name).join(' and ')}`));
        } else {
          playerPositions[posKey] = [player];
        }
      }
    });
  }

  printGrid(gameNumber) {
    let gridCopy = this.grid.map(row => [...row]);

    // Mark treasure on the grid
    gridCopy[this.treasurePosition[0]][this.treasurePosition[1]] = '💰'; // Single space for T

    this.players.forEach(player => {
      if (player.isAlive() && player.x >= 0 && player.x < this.gridHeight && player.y >= 0 && player.y < this.gridWidth) {
        if (gridCopy[player.x][player.y] === '💰') {
          player.setEliminated('stepped on the treasure');
        }
        gridCopy[player.x][player.y] = player.name.padEnd(2, ' ');  // Ensure emoji has enough space
      }
    });

    // console.log(`Game ${String(gameNumber).padStart(2, '0')} Turn ${String(this.turn).padStart(3, '0')}:`);
    gridCopy.forEach(row => {
      console.log('|' + row.join('|') + '|');  // Use | as delimiters for the grid
    });
  }
}

