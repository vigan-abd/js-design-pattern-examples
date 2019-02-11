// Adapter Pattern
class PrimitiveCalculator {
  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return term1 + term2;
      case 'sub':
        return term1 - term2;
      default:
        return NaN;
    }
  }
}

class AdvancedCalculator {
  add(term1, term2) {
    return term1 + term2;
  }

  sub(term1, term2) {
    return term1 - term2;
  }
}

class CalculatorAdapter {
  constructor() {
    this.calculator = new AdvancedCalculator();
  }
  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return this.calculator.add(term1, term2);
      case 'sub':
        return this.calculator.sub(term1, term2);
      default:
        return NaN;
    }
  }
}

// usage
console.log("Adapter Pattern");
const c1 = new PrimitiveCalculator();
console.log("PrimitiveCalculator", c1.operations(10, 5, 'add')); // 15

const c2 = new AdvancedCalculator();
console.log("AdvancedCalculator", c2.add(10, 5)); // 15

const c3 = new CalculatorAdapter();
console.log("CalculatorAdapter", c3.operations(10, 5, 'add')); // 15;