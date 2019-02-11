// encapsulation
class Traveler {
  /**
   * @param {Vehicle} transportObject 
   */
  travel(transportObject) {
    return transportObject.travelTime();
  }
}

class Vehicle {
  constructor() {
    this.timeTaken = 0;
  }

  travelTime() {
    return this.timeTaken;
  }
}

// strategy 1
class Train extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

// strategy 2
class Cab extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

// strategy 3
class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

// usage
const traveler = new Traveler();

console.log(traveler.travel(new Cab())); // 5
console.log(traveler.travel(new Train())); // 10