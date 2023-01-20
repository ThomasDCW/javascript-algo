const even_or_odd = require('./even_or_odd');
describe('even or odd', () => {
  it('should return Even if number = 2', () => {
    expect(even_or_odd(2)).toBe('Even');
  });
  it('should return Odd if number = 3', () => {
    expect(even_or_odd(3)).toBe('Odd');
  });
});
