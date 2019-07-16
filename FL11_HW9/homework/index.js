// Task 0
function getNumbers(stringFromUser) {
    let result = [],
        i;
    for (i = 0; i < stringFromUser.length; i++) {
        if (!isNaN(stringFromUser[i])) {
            result.push(stringFromUser[i]);
        }
    }
    return result;
}

getNumbers('string');
getNumbers('n1um3ber95');

// Task 1
function findTypes() {
    let result = {},
        i;

    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] in result) {
            result[typeof arguments[i]] += 1;
        } else {
            result[typeof arguments[i]] = 1;
        }
    }

    return result;
}

findTypes(`number`);
findTypes(null, 5, `hello`);


// Task 2
function executeforEach (arrayExecuteForEach, functionExecuteForEach){
    for (let i = 0; i < arrayExecuteForEach.length; i++) {
        functionExecuteForEach(arrayExecuteForEach[i]);
    }
}

executeforEach([1, 2, 3], function(el) {
    console.log(el)
});

// Task 3
function mapArray (arrayExecuteForEach, functionExecuteForEach){
    let result = [];
    for (let i = 0; i < arrayExecuteForEach.length; i++) {
        result[i] = functionExecuteForEach(arrayExecuteForEach[i]);
    }
    return result;
}

mapArray([2, 5, 8], function(el) {
    return el + 3;
});
