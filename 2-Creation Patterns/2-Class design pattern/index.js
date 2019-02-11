/**
This is a class-based creational design pattern. Constructors are special functions that can be used to instantiate new objects with methods and properties defined by that function.
 */


// Prototype/Class design pattern
class Car {
  constructor(door, engine, color) {
    this.door = door;
    this.engine = engine;
    this.color = color;
  }
}

console.log("Prototype/Class design pattern", new Car(4, "V6", "red"));



// Constructor pattern
class Suv extends Car {
  constructor(door, engine, color, wheels) {
    super(door, engine, color);
    this.wheels = wheels;
  }
}

console.log("Constructor pattern", new Suv(4, 'V8', 'gray', 4));