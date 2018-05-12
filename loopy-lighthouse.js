function loopyLighthouse(range, divisor, strings) {
  if (range[0] > range[1]) {
    console.log("Invalid range!");
  }
  for(var i = range[0]; i <= range[1]; i++) {
    var result = "";
    if (i % divisor[0] === 0) result += strings[0];
    if (i % divisor[1] === 0) result += strings[1];
    console.log(result || i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Loopy", "Lighthouse"]);

// stretch goal: if range[1] > range[2], return 'invalid range'