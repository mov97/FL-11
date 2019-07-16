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
function mapArray (arrayMapArray, functionArrayMapArray){
    let result = [];
    for (let i = 0; i < arrayMapArray.length; i++) {
        result.push(functionArrayMapArray(arrayMapArray[i]));
    }
    return result;
}

mapArray([2, 5, 8], function(el) {
    return el + 3;
});

// Task 4
function filterArray (arrayFilterArray, functionFilterArray){
    let result = [];
    for (let i = 0; i < arrayFilterArray.length; i++) {
        if (functionFilterArray(arrayFilterArray[i])) {
            result.push(arrayFilterArray[i]);
        }
    }
    return result;
}

filterArray([2, 5, 8], function(el) {
    return el > 3;
});
