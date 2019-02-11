function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
  }
}

class C {
  @f()
  @g()
  method() {
    return 33;
  }
}


let c = new C();
console.log(c.method());

// RUN tsc --target ES5 --experimentalDecorators && node index.js