const array = [2, 5, 5];

//map()
const numbers = array.map((number) => {
  return number + 1;
});
console.log(numbers);

//filter()

const filteredNumbers = array.filter((number) => {
  if (number > 4) return number;
});
console.log(filteredNumbers);

//reduce()
const someOfNumbers = numbers.reduce((vleurAccumulee, valeurActuelle) => {
  return vleurAccumulee + valeurActuelle;
});
console.log(someOfNumbers);

//sort()
const sortedNumbers = array.sort();
console.log(sortedNumbers);
