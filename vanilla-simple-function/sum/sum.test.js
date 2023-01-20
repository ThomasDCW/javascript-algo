const sum = require('./sum.js');

describe('sum', () => {
  it('should return 3 if a=1 and b=2', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
