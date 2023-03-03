function stringLength(str) {
  if (str.length === 0) {
    throw new Error('String not be empty or longer');
  } else if (str.length >= 10) {
    throw new Error('String not be empty or longer');
  } else {
    return str.length;
  }
}

module.exports = stringLength;