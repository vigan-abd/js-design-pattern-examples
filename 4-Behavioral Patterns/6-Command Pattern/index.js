class SpecialMath {
  constructor(num) {
    this.num = num;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }

  squareRoot() {
    return Math.sqrt(this.num);
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }
  
  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

// usage
const x = new Command(new SpecialMath(5));
x.execute('square');
x.execute('cube');

console.log(x.commandsExecuted); // ['square', 'cube']