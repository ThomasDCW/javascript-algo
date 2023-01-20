const fizzBuzz = require('./fizzbuzz.js');
describe('fizzBuzz', () => {
  it('should return fizzbuzz if num is multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
    expect(fizzBuzz(45)).toBe('fizzbuzz');
  });
  it('should return fizz if num is multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
    expect(fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if num is multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
    expect(fizzBuzz(20)).toBe('buzz');
  });
});
