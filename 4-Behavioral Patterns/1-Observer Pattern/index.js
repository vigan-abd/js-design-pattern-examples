class Subject {
  constructor() {
    this._observers = [];
  }

  register(observer) {
    this._observers.push(observer);
  }

  unregister(observer) {
    this._observers = this._observers.filter(obs => observer !== obs);
  }

  notify(change) {
    this._observers.forEach(observer => {
      observer.update(change);
    });
  }

  increment() {
    this.notify('INC');
  }

  decrement() {
    this.notify('DEC');
  }
}

// Observer Pattern
class Observer {
  constructor(state) {
    // State Pattern
    this.state = state;
  }

  update(change) {
    let state = this.state;
    switch (change) {
      case 'INC':
        this.state++;
        break;
      case 'DEC':
        this.state--;
        break;
      default: throw new Error("Change is not supported!");
    }
  }
}

// usage
const sub = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(19);

sub.register(obs1);
sub.register(obs2);

sub.increment();

console.log(obs1.state); // 2
console.log(obs2.state); // 20