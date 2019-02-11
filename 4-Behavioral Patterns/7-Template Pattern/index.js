class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    return `${this.name} handles ${this.responsibilities() /* gap to be filled by subclass */}`;
  }

  getPaid() {
    return `${this.name} got paid ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities() {
    return 'application development';
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities() {
    return 'testing';
  }
}

// usage
const dev = new Developer('Nathan', 100000);
console.log(dev.getPaid()); // 'Nathan got paid 100000'
console.log(dev.work()); // 'Nathan handles application development'

const tester = new Tester('Brian', 90000);
console.log(tester.getPaid()); // 'Brian got paid 90000'
console.log(tester.work()); // 'Brian handles testing'