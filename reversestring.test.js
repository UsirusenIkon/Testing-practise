const reverseString = require('./reversestring.js');
const reversedString = require('./reversestring.js');

test('reversestring function should return the reverse of the given string', () => {
  expect(reverseString('runner')).toBe('rennur');
});