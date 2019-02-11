class Car {
  constructor(door, engine, color) {
    this.door = door;
    this.engine = engine;
    this.color = color;
  }
}

class Suv extends Car {
  constructor(door, engine, color, wheels) {
    super(door, engine, color);
    this.wheels = wheels;
  }
}

// Factory Pattern
class CarFactory {
  /**
   * @param {"CIVIC"|"AUDI"} type 
   */
  static create(type) {
    switch (type) {
      case "CIVIC": return new Car(2, "V6", "red");
      case "AUDI": return new Car(4, "V4", "black");
      default: throw new Error(`Type ${type} not supported!`);
    }
  }
}

console.log("Factory Pattern", CarFactory.create("AUDI"));



// Abstract Factory Pattern
class SuvFactory {
  /**
   * @param {"CX5"|"SANTA FE"} type 
   */
  static create(type) {
    switch (type) {
      case "CX5": return new Suv(2, "V6", "red", 4);
      case "SANTA FE": return new Suv(4, "V4", "black", 6);
      default: throw new Error(`Type ${type} not supported!`);
    }
  }
}

/**
 * @param {"CAR"|"SUV"} type 
 * @param {String} model 
 */
const abstractFactory = (type, model) => {
  switch (type) {
    case "CAR": return CarFactory.create(model);
    case "SUV": return SuvFactory.create(model);
    default: throw new Error(`Type ${type} not supported!`);
  }
}

console.log("Abstract Factory Pattern", abstractFactory("CAR", "CIVIC"));