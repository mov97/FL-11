let Ax = prompt('Enter the coordinate for point A (first point), first X: ' +
    'Important: use point for fractional values!' );
let Ay = prompt('Enter the coordinate for point A (second point)), now Y: ' +
    'Important: use point for fractional values!');
let Bx = prompt('Enter the coordinate for point B (first point), first X:' +
    'Important: use point for fractional values!');
let By = prompt('Enter the coordinate for point B (second point), now Y:' +
    'Important: use point for fractional values!');
let Cx = prompt('Enter the coordinate for point C (check point), first X:' +
    'Important: use point for fractional values!');
let Cy = prompt('Enter the coordinate for point C (check point), now Y:' +
    'Important: use point for fractional values!');

Ax = Number(Ax);
Ay = Number(Ay);
Bx = Number(Bx);
By = Number(By);
Cx = Number(Cx);
Cy = Number(Cy);

const count_of_segment = 2;

if (Ax===undefined || Ay===undefined || Bx===undefined || By===undefined || Cx===undefined || Cy===undefined) {
        console.log('Please, enter all point coordinates!');
} else if (isNaN(Ax) || isNaN(Ay) || isNaN(Bx) || isNaN(By) || isNaN(Cx) || isNaN(Cy)) {
    console.log('Please, enter valid coordinates!');
} else {
    let center_of_line_x = (Ax + Bx) / count_of_segment;
    let center_of_line_y = (Ay + By) / count_of_segment;

    if (center_of_line_x === Cx && center_of_line_y === Cy) {
        console.log(true);
    } else {
        console.log(false);
    }
}