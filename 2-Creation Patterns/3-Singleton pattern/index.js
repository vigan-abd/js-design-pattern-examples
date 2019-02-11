// Singleton Pattern
class SpaceShip {
  constructor() {
    if (!SpaceShip.instance) {
      this.color = 'red';
      this.passengers = 0;
      SpaceShip.instance = this;
    } else {
      return SpaceShip.instance;
    }
  }
}

const ship1 = new SpaceShip(), ship2 = new SpaceShip();
ship1.color = 'blue';
ship2.passengers = 33;
ship1.passengers--;

console.log("Singleton Pattern", ship1, ship2);
