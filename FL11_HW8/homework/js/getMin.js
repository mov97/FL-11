const getMin = (...argument) => argument.sort((a, b) => a - b )[0];
console.log(getMin(5, 3, 4));
