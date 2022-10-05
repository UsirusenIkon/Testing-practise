const capitalized = require('./capitalizedString.js');

test('should capitalize the first letter', () => {
  expect(capitalized('string')).toBe('String')
})
