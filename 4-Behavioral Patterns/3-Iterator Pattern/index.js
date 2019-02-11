// using Iterator
class IteratorClass {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        } else {
          this.index = 0; // to reset iteration status
          return { done: true };
        }
      },
    };
  }
}

// using Generator
function* iteratorUsingGenerator(collection) {
  var nextIndex = 0;

  while (nextIndex < collection.length) {
    yield collection[nextIndex++];
  }
}

// usage
const gen = iteratorUsingGenerator([1, 2, 3]);
let c = null;
while (!(c = gen.next()).done) {
  console.log(c.value);
}

const cls = new IteratorClass(['a', 'b', 'c']);
for (const iterator of cls) {
  console.log(iterator);
}