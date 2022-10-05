const stringLength = require('./string.js');

test('string should be lessthan 1 character and not longer than 10 characters', () => {
  expect(stringLength('runner')).toBe(6);
});
