const even_or_odd = require('./even_or_odd');
describe('even or odd', () => {
  it('should return even if number= 2', () => {
    expect(even_or_odd(2)).toBe('Even');
  });
});
