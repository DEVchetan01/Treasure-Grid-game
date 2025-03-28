# 💰 Grid-Based Game 

## Problem Overview

The game is played on an n x m grid, where players can move in four possible directions (up, down, left, right) and diagonally. The goal is for players to reach a randomly set destination or eliminate other players by landing on the same grid coordinates.

### Key Features:
- **Grid-based movement**: Players move on an n x m grid with 4 possible directions plus diagonals.
- **Random destination and player spawning**: The destination and player positions are randomly placed at the beginning of the game.
- **Player interactions**: Players can eliminate each other if they land on the same coordinates.
- **Turn-based system**: Players move every 5 seconds, and this is reflected in the game state.
- **Game termination**: The game ends when a player reaches the destination or when two players are eliminated by landing on the same coordinates.
- **Dynamic player addition**: New players can join the game at any time, even after the game has started.

## Approach to Solving the Problem

### 1. Understanding the Problem Requirements:
- **Grid-based movement**: Implementing player movement on an n x m grid.
- **Random destination and player spawning**: Both the destination and players are randomly placed at the start of the game.
- **Player interactions**: Implementing a system where players can eliminate each other by landing on the same position.
- **Turn-based system**: Players move every 5 seconds, so you'll need a timing mechanism to handle this.
- **Game termination**: The game ends when a player reaches the destination or two players eliminate each other by landing on the same position.
- **Dynamic player additions**: New players can join mid-game, requiring real-time updates.

### 2. Key Concepts to Learn and Apply:
- **Object-Oriented Programming (OOP)**: Use OOP concepts like classes to structure the game:
  - **Encapsulation**: Store game logic (e.g., player movement) in the `Game` class, and player-specific logic (e.g., position) in the `Player` class.
  - **Inheritance and Composition**: Optionally, use inheritance or composition to manage relationships between game entities.
  
- **Randomness**: Use random functions to spawn players and set the destination. This can be done using JavaScript's `Math.random()` and `Math.floor()` for generating random grid coordinates.

- **Grid management**: Track the grid's state and player positions using a 2D array, where each cell represents a position.

- **Concurrency and Timing**: Use `setInterval` or `setTimeout` to create the turn-based system and manage the player movement every 5 seconds. Ensure that players move one at a time to avoid race conditions.

- **Collision detection**: Check if two players land on the same position and eliminate them accordingly.

- **Game state management**: Update and track the game state with each turn, including player positions and game progress.

- **Event handling**: Handle new players joining mid-game and incorporate their moves into the ongoing game.

## Running the Game

To run the game locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DEVchetan01/Treasure-Grid-game.git
2. Navigate to the project folder:
   ```bash
   cd your-repository
3. Run the game:
   ```bash
   node main.js

That's it! You're ready to Grid Game.


