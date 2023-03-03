const stringLength = require('./string-length.js');

test('count the length of the string hello not to be 5', () => {
  // Arrange and Act
  const strLength = stringLength('hello');
  // Assert
  expect(strLength).toBe(5);
});

test('throw error for empty string', () => {
  expect(() => stringLength('')).toThrow(Error);
});

test('throw error for longer string', () => {
  expect(() => stringLength('hhhhhhhhhhhhhhhh')).toThrow(Error);
});

test('throw error for longer string', () => {
  expect(stringLength('hello')).toBeLessThan(10);
});
