


// export default class Car {
//   constructor(name) {
//     this.name = name;
//     this.x = -1;  // Initialize with invalid position
//     this.y = -1;  // Initialize with invalid position
//     this.alive = true;
//   }

//   static create(name) {
//     return new Car(name);
//   }

//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log(`${this.name} joined the race at position (${this.x}, ${this.y})`);
//   }

//   isAlive() {
//     return this.alive;
//   }

//   move(direction) {
//     if (!this.isAlive()) return;
    
//     switch (direction) {
//       case 'up': 
//         if (this.x > 0) this.x -= 1;
//         break;
//       case 'down': 
//         if (this.x < 2) this.x += 1;
//         break;
//       case 'left': 
//         if (this.y > 0) this.y -= 1;
//         break;
//       case 'right': 
//         if (this.y < 3) this.y += 1;
//         break;
//       case 'up-right': 
//         if (this.x > 0 && this.y < 3) {
//           this.x -= 1;
//           this.y += 1;
//         }
//         break;
//       case 'up-left': 
//         if (this.x > 0 && this.y > 0) {
//           this.x -= 1;
//           this.y -= 1;
//         }
//         break;
//       case 'down-right': 
//         if (this.x < 2 && this.y < 3) {
//           this.x += 1;
//           this.y += 1;
//         }
//         break;
//       case 'down-left': 
//         if (this.x < 2 && this.y > 0) {
//           this.x += 1;
//           this.y -= 1;
//         }
//         break;
//     }
//   }
// }



// export default class Player {
//   constructor(name) {
//     this.name = name;
//     this.x = -1;  // Initialize with invalid position
//     this.y = -1;  // Initialize with invalid position
//     this.alive = true;
//   }

//   static create(name) {
//     return new Player(name);
//   }

//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log(`${this.name} joined the hunt at position (${this.x}, ${this.y})`);
//   }

//   isAlive() {
//     return this.alive;
//   }

//   setEliminated() {
//     this.alive = false;
//     console.log(`${this.name} has been eliminated (stepped on the treasure)!`);
//   }

//   move(direction) {
//     if (!this.isAlive()) return;
    
//     switch (direction) {
//       case 'up': 
//         if (this.x > 0) this.x -= 1;
//         break;
//       case 'down': 
//         if (this.x < 4) this.x += 1;
//         break;
//       case 'left': 
//         if (this.y > 0) this.y -= 1;
//         break;
//       case 'right': 
//         if (this.y < 4) this.y += 1;
//         break;
//       case 'up-right': 
//         if (this.x > 0 && this.y < 4) {
//           this.x -= 1;
//           this.y += 1;
//         }
//         break;
//       case 'up-left': 
//         if (this.x > 0 && this.y > 0) {
//           this.x -= 1;
//           this.y -= 1;
//         }
//         break;
//       case 'down-right': 
//         if (this.x < 4 && this.y < 4) {
//           this.x += 1;
//           this.y += 1;
//         }
//         break;
//       case 'down-left': 
//         if (this.x < 4 && this.y > 0) {
//           this.x += 1;
//           this.y -= 1;
//         }
//         break;
//     }
//   }
// }



// export default class Player {
//   constructor(name) {
//     this.name = name;  // The smiley face emoji for the player
//     this.x = -1;  // Initialize with invalid position
//     this.y = -1;  // Initialize with invalid position
//     this.alive = true;
//   }

//   static create(name) {
//     return new Player(name);
//   }

//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log(`${this.name} joined the hunt at position (${this.x}, ${this.y})`);
//   }

//   isAlive() {
//     return this.alive;
//   }

//   setEliminated() {
//     this.alive = false;
//     console.log(`${this.name} has been eliminated (stepped on the treasure)!`);
//   }

//   move(direction) {
//     if (!this.isAlive()) return;
    
//     switch (direction) {
//       case 'up': 
//         if (this.x > 0) this.x -= 1;
//         break;
//       case 'down': 
//         if (this.x < 4) this.x += 1;
//         break;
//       case 'left': 
//         if (this.y > 0) this.y -= 1;
//         break;
//       case 'right': 
//         if (this.y < 4) this.y += 1;
//         break;
//       case 'up-right': 
//         if (this.x > 0 && this.y < 4) {
//           this.x -= 1;
//           this.y += 1;
//         }
//         break;
//       case 'up-left': 
//         if (this.x > 0 && this.y > 0) {
//           this.x -= 1;
//           this.y -= 1;
//         }
//         break;
//       case 'down-right': 
//         if (this.x < 4 && this.y < 4) {
//           this.x += 1;
//           this.y += 1;
//         }
//         break;
//       case 'down-left': 
//         if (this.x < 4 && this.y > 0) {
//           this.x += 1;
//           this.y -= 1;
//         }
//         break;
//     }
//   }
// }



// export default class Player {
//   constructor(name) {
//     this.name = name;  // The smiley face emoji for the player
//     this.x = -1;  // Initialize with invalid position
//     this.y = -1;  // Initialize with invalid position
//     this.alive = true;
//   }

//   static create(name) {
//     return new Player(name);
//   }

//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log(`${this.name} joined the hunt at position (${this.x}, ${this.y})`);
//   }

//   isAlive() {
//     return this.alive;
//   }

//   setEliminated() {
//     this.alive = false;
//     console.log(`${this.name} has been eliminated (stepped on the treasure)!`);
//   }

//   move(direction) {
//     if (!this.isAlive()) return;
    
//     switch (direction) {
//       case 'up': 
//         if (this.x > 0) this.x -= 1;
//         break;
//       case 'down': 
//         if (this.x < 4) this.x += 1;
//         break;
//       case 'left': 
//         if (this.y > 0) this.y -= 1;
//         break;
//       case 'right': 
//         if (this.y < 4) this.y += 1;
//         break;
//       case 'up-right': 
//         if (this.x > 0 && this.y < 4) {
//           this.x -= 1;
//           this.y += 1;
//         }
//         break;
//       case 'up-left': 
//         if (this.x > 0 && this.y > 0) {
//           this.x -= 1;
//           this.y -= 1;
//         }
//         break;
//       case 'down-right': 
//         if (this.x < 4 && this.y < 4) {
//           this.x += 1;
//           this.y += 1;
//         }
//         break;
//       case 'down-left': 
//         if (this.x < 4 && this.y > 0) {
//           this.x += 1;
//           this.y -= 1;
//         }
//         break;
//     }
//   }
// }



// export default class Player {
//   constructor(name) {
//     this.name = name;  // The smiley face emoji for the player
//     this.x = -1;  // Initialize with invalid position
//     this.y = -1;  // Initialize with invalid position
//     this.alive = true;
//   }

//   static create(name) {
//     return new Player(name);
//   }

//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log(`${this.name} joined the hunt at position (${this.x}, ${this.y})`);
//   }

//   isAlive() {
//     return this.alive;
//   }

//   setEliminated() {
//     this.alive = false;
//     console.log(`${this.name} has been eliminated (stepped on the treasure)!`);
//   }

//   move(direction) {
//     if (!this.isAlive()) return;
    
//     switch (direction) {
//       case 'up': 
//         if (this.x > 0) this.x -= 1;
//         break;
//       case 'down': 
//         if (this.x < 4) this.x += 1;
//         break;
//       case 'left': 
//         if (this.y > 0) this.y -= 1;
//         break;
//       case 'right': 
//         if (this.y < 4) this.y += 1;
//         break;
//       case 'up-right': 
//         if (this.x > 0 && this.y < 4) {
//           this.x -= 1;
//           this.y += 1;
//         }
//         break;
//       case 'up-left': 
//         if (this.x > 0 && this.y > 0) {
//           this.x -= 1;
//           this.y -= 1;
//         }
//         break;
//       case 'down-right': 
//         if (this.x < 4 && this.y < 4) {
//           this.x += 1;
//           this.y += 1;
//         }
//         break;
//       case 'down-left': 
//         if (this.x < 4 && this.y > 0) {
//           this.x += 1;
//           this.y -= 1;
//         }
//         break;
//     }
//   }
// }




export default class Player {
  constructor(name) {
    this.name = name;  // The smiley face emoji for the player
    this.x = -1;  // Initialize with invalid position
    this.y = -1;  // Initialize with invalid position
    this.alive = true;
    this.eliminationReason = '';
  }

  static create(name) {
    return new Player(name);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    console.log(`${this.name} joined the hunt at position (${this.x}, ${this.y})`);
  }

  isAlive() {
    return this.alive;
  }

  setEliminated(reason) {
    this.alive = false;
    this.eliminationReason = reason;
    console.log(`${this.name} has been eliminated: ${reason}`);
  }

  move(direction) {
    if (!this.isAlive()) return;
    
    switch (direction) {
      case 'up': 
        if (this.x > 0) this.x -= 1;
        break;
      case 'down': 
        if (this.x < 4) this.x += 1;
        break;
      case 'left': 
        if (this.y > 0) this.y -= 1;
        break;
      case 'right': 
        if (this.y < 4) this.y += 1;
        break;
      case 'up-right': 
        if (this.x > 0 && this.y < 4) {
          this.x -= 1;
          this.y += 1;
        }
        break;
      case 'up-left': 
        if (this.x > 0 && this.y > 0) {
          this.x -= 1;
          this.y -= 1;
        }
        break;
      case 'down-right': 
        if (this.x < 4 && this.y < 4) {
          this.x += 1;
          this.y += 1;
        }
        break;
      case 'down-left': 
        if (this.x < 4 && this.y > 0) {
          this.x += 1;
          this.y -= 1;
        }
        break;
    }
  }
}
