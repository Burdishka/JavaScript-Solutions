/*
6 kyu
Generic numeric template formatter


*/

unction numericFormatter(a, b) {
    let str = '';
    let number = 0;
    for (let i in a) {
        if (a[i] === '+' || a[i] === ' ' ||
            a[i] === '*' || a[i] === '/' ||
            a[i] === '/' || a[i] === '-' || Number.isInteger(+a[i])) str += a[i];
        else {
            if (b === undefined) {
                str += (number + 1);
                number++;
                if (number === 9) number = -1;
            } else {
                str += b[number];
                number++;
                if (number === b.length) number = 0;
            }
        }
    }
    return str;
}