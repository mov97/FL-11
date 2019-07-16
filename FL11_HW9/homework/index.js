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

// Task 5
function showFormattedDate(dateShowFormattedDate) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        day = dateShowFormattedDate.getDate(),
        month = months[dateShowFormattedDate.getMonth()],
        year = dateShowFormattedDate.getFullYear();

    return `Date: ${month} ${day} ${year}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// Task 6
function canConvertToDate (ConvertToDate) {
    let checkData = new Date(ConvertToDate);
    return !isNaN(checkData.getDate());
}

canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

// Task 7
function daysBetween(dataStart, dataEnd) {
    let dayStart = Math.floor(Date.parse(dataStart) / (1000 * 60 * 60 * 24)),
        dayEnd = Math.floor(Date.parse(dataEnd) / (1000 * 60 * 60 * 24));
    return dayEnd - dayStart;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// Task 8
let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        " birthday ": '2016-03-18T00:00:00',
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        " birthday ": '1991-02-11T00:00:00',
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        " birthday ": '1984-04-17T00:00:00',
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        " birthday ": '1994-04-17T00:00:00',
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

function getAmountOfAdultPeople(dataGetAmountOfAdultPeople) {
    const dateToday = new Date();
    let peopleCount = 0,
        i;
    for (i = 0; i < dataGetAmountOfAdultPeople.length; i++) {
        let ageToday = daysBetween(dataGetAmountOfAdultPeople[i][" birthday "], dateToday) / 365;
        if (ageToday > 18) {
            peopleCount += 1;
        }
    }
    return peopleCount;
}

getAmountOfAdultPeople(data);

// Task 9
function keys(keysArray) {
    let keys =[];
    for (let key in keysArray) {
        keys.push(key);
    }
    return keys;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});
