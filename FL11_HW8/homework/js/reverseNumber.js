const ReverseNumber = NumberForReverse => parseFloat(NumberForReverse.toString().split('').reverse().join(''))
    * Math.sign(NumberForReverse);
console.log(ReverseNumber(123));
console.log(ReverseNumber(-82));
