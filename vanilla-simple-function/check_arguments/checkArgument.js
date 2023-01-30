// check if one of the arguments is equal to 1 or the some of the two argument is equal to 1

function checkArguments(x, y) {
  if (x === 1 || y === 1 || x + y === 1) {
    return true;
  } else return false;
}
console.log(checkArguments(1, 0));
