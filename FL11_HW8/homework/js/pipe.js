function pipe (pipeNumber) {
    return addOne(pipeNumber) + arguments.length - 1;
}

function addOne(x) {
    return x;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
