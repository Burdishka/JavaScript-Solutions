/*
8 kyu
Coding 3min : Jumping Dutch act

https://www.codewars.com/kata/570bcd9715944a2c8e000009
*/

function sc(f) {
    if (f <= 1) return '';
    let str = 'Aa~';
    for (let i = 2; i <= f; i++) {
        if (i === f && f < 7) str += ' Pa! Aa!';
        else if (i === f) str += ' Pa!';
        else str += ' Aa~';
    }
    return str;
}