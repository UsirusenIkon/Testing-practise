const stringLength = string => {
  for (let i = 0; i < string.length; i++) {
    if (string.length >= 1 && string.length <= 10) {
      return string.length
    } else {
      return 'error'
    }
  }
}

module.exports = stringLength;
