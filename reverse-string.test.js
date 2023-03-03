const reverseString = require('./reverse-string.js');

test('reverses hello to be olleh', () => {
  // Arrange and act
  const reversedStr = reverseString('hello');
  // Assert
  expect(reversedStr).toBe('olleh');
});