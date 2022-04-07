const {sum, cikarma} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('5 -3 = 2 olmanı', () => {
    expect(cikarma(3, 5)).toBe(2);
});