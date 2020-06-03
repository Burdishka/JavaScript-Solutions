/*
6 kyu
Biggest Number (with Strings)

https://www.codewars.com/kata/5981a04b8ce866705d00002f
*/

function biggestNum(a, b) {
    a = a.replace(/(--)/g, '');
    b = b.replace(/(--)/g, '');
    a = a.split('');
    b = b.split('');
    for (let i = 0; i < a.length; i++) {
        if (i === 0 && a[i] === '-') continue;
        if (+a[i] > 0) break;
        else a[i] = '';
    }
    for (let i = 0; i < b.length; i++) {
        if (i === 0 && b[i] === '-') continue;
        if (+b[i] > 0) break;
        else b[i] = '';
    }
    a.filter(el => el !== '');
    b.filter(el => el !== '');
    a = a.join('');
    b = b.join('');
    if (a.length === b.length && a[0] === b[0]) {
        for (let i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
            if (a[i] === b[j]) {
                var aa = a.slice(a[i]);
                var bb = b.slice(b[j]);
            }
            if (aa - bb < 0) return b;
            else return a;
        }
    }
    if (a - b < 0) return b;
    else return a;
}