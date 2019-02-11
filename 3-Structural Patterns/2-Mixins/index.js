// Prototype/Class design pattern
class Car {
  constructor(door, engine, color) {
    this.door = door;
    this.engine = engine;
    this.color = color;
  }
}

const carMixins = {
  startCar() {
    console.log(`${this.engine} started!`);
  },
  stopCar() {
    console.log(`${this.engine} stopped!`);
  }
}

Object.assign(Car.prototype, carMixins);


let c = new Car(4, "V6", "red");
c.startCar();
c.stopCar();