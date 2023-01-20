function fizzBuzz(num) {
  if (!(num % 15)) return 'fizzbuzz';
  if (!(num % 3)) return 'fizz';
  if (!(num % 5)) return 'buzz';
  return num;
}
module.exports = fizzBuzz;
