let a = prompt('Enter the length of the first side of the triangle');
let b = prompt('Enter the length of the second side of the triangle');
let c = prompt('Enter the length of the third side of the triangle');

a = Number(a);
b = Number(b);
c = Number(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Please enter valid side lengths of the triangle!');
} else {
    if (a+b> c && b+c>a && a+c>b) {
        if(a === b && a === c && b===c) {
            console.log('Equivalent triangle');
        } else if (a === b || a === c || b === c) {
            console.log('Isosceles triangle');
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle does nоt exist');
    }
}