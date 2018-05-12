function range(start, end, step) {
  var array = [];
  if (start < end && step >= 0 && start !== undefined && end !== undefined && step !== undefined) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

// completed!