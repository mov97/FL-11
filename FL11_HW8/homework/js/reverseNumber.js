function ReverseNumber(NumberForReverse) {
    let result = 0;
    while (NumberForReverse) {
        result = result * 10 + NumberForReverse % 10;
        NumberForReverse = Math.floor(NumberForReverse / 10);
    }
    return result;
}
console.log(ReverseNumber(123));
