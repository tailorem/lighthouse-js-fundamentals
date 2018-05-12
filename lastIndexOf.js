function lastIndexOf(array, value) {
  var found = -1;
  for (var i = (array.length - 1); i >= 0; i--) {
    var index = array[i];
    if (array[i] === value) {
      found = i;
      break;
    }
  }
  return found;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// REDO THIS ONE UNTIL YOU'RE BETTER AT IT