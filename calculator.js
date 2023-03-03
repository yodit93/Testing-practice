class Calculator {
  add = (a, b) => {
    if (a === 0) {
      return b;
    }
    if (b === 0) {
      return a;
    }
    if (a === b === 0) {
      return 0;
    }

    return a + b;
  }

  subtract = (a, b) => {
    if (a === 0 && b === 0) {
      return 0;
    }
    if (a === 0) {
      return -b;
    }
    if (b === 0) {
      return a;
    }

    return a - b;
  }

  multiply = (a, b) => {
    if (a === 1) {
      return b;
    }
    if (b === 1) {
      return a;
    }
    if (a === 0 || b === 0) {
      return 0;
    }

    return a * b;
  }

  divide = (a, b) => {
    if (a === 0 && b === 0) {
      throw new Error('Undefined');
    } else if (a === 0) {
      return 0;
    } else if (b === 0) {
      throw new Error('Undefined');
    } else {
      return a / b;
    }
  }
}

module.exports = Calculator;
