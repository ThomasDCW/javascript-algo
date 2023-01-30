const array = [1, 2, 3, 4, 5];

let largest = array.reduce(function (x, y) {
  return x > y ? x : y;
});
console.log(largest);
