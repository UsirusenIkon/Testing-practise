const Calculator = require('./calculator');

describe('Calculator', () => {
  test('the function should return the result for division', () => {
    expect(new Calculator(10, 5).divide()).toBe(2);
    expect(new Calculator(10, 3).divide()).toBe(3.3333333333333335);
    expect(new Calculator(1, 4).divide()).toBe(0.25);
  });
  
  test('the function should return the result for multiplication', () => {
    expect(new Calculator(10, 5).multiply()).toBe(50);
    expect(new Calculator(0.4, 3).multiply()).toBe(1.2000000000000002);
    expect(new Calculator(1, 0).multiply()).toBe(0);
  });
  
  test('the function should return the result for addition', () => {
    expect(new Calculator(10, 5).add()).toBe(15);
    expect(new Calculator(1.6, 3).add()).toBe(4.6);
    expect(new Calculator(1/2, 2/3).add()).toBe(1.1666666666666665);
  });
  
  test('the function should return the result for subtraction', () => {
    expect(new Calculator(10, 5).subtract()).toBe(5);
    expect(new Calculator(1.9, 3).subtract()).toBe(-1.1);
    expect(new Calculator(2/3, 15/9).subtract()).toBe(-1);
  });
});