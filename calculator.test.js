const Calculator = require('./calculator.js');

describe('adding two numbers', () => {
  test('is 2 + 3 euals to 5', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const sum = calculator.add(2, 3);
    // Assert
    expect(sum).toEqual(5);
  });

  test('is 0 + 3 = 3', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const sum = calculator.add(0, 3);
    // Assert
    expect(sum).toEqual(3);
  });

  test('is 2 + 0 = 2', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const sum = calculator.add(2, 0);
    // Assert
    expect(sum).toEqual(2);
  });

  test('is sum = 0', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const sum = calculator.add(0, 0);
    // Assert
    expect(sum).toEqual(0);
  });
});

describe('subtracting two numbers', () => {
  test('is return -3', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const subtract = calculator.subtract(0, 3);
    // Assert
    expect(subtract).toEqual(-3);
  });

  test('is return 3', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const subtract = calculator.subtract(3, 0);
    // Assert
    expect(subtract).toEqual(3);
  });

  test('is 0 - 0 equals 0', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const minus = calculator.subtract(0, 0);
    // Assert
    expect(minus).toEqual(0);
  });
});

describe('multiply two numbers', () => {
  test('is return 3', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const result = calculator.multiply(1, 3);
    // Assert
    expect(result).toBe(3);
  });

  test('is return 2', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const result = calculator.multiply(2, 1);
    // Assert
    expect(result).toBe(2);
  });

  test('is 0 * 0 throw an error', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const result = calculator.multiply(0, 0);
    // Assert
    expect(result).toEqual(0);
  });
});

describe('divide two numbers', () => {
  test('is throw error', () => {
    // Arrange
    const calculator = new Calculator();
    // Act and Assert
    expect(() => calculator.divide(0, 0)).toThrow('Undefined');
  });

  test('is return 0', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const result = calculator.divide(0, 1);
    // Assert
    expect(result).toBe(0);
  });

  test('is 3 / 0 throw an error', () => {
    // Arrange
    const calculator = new Calculator();
    // Act and Assert
    expect(() => calculator.divide(3, 0)).toThrow('Undefined');
  });

  test('is return 1.5', () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const result = calculator.divide(3, 2);
    // Assert
    expect(result).toBe(1.5);
  });
});
