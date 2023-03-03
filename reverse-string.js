function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }
  return reversedStr;
}

module.exports = reverseString;