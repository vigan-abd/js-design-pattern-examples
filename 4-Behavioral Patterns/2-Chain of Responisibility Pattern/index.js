class MathOperator {
  constructor(value = 0) {
    this.value = value;
  }

  add(value) {
    this.value += value;
    return this;
  }

  sub(value) {
    this.value -= value;
    return this;
  }

  mul(value) {
    this.value *= value;
    return this;
  }

  div(value) {
    this.value /= value;
    return this;
  }

  mod(value) {
    this.value %= value;
    return this;
  }

  exp(value) {
    this.value **= value;
    return this;
  }
}

// usage
const operator = new MathOperator();
console.log(operator.add(10).sub(2).div(4).mul(3).exp(2).value); // 36