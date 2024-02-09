const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }

  let sum = 0;
  for (let n = begin; n <= end; n += step) {
    sum += n;
  }
  return sum;
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
