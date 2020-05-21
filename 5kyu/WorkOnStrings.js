/*
5 kyu
Play with two Strings

https://www.codewars.com/kata/56c30ad8585d9ab99b000c54
*/

function workOnStrings(a, b) {
    let aa = a.split('');
    let bb = b.split('');
    let count = 0;
    for (let i in a) {
        for (let j in a) {
            if (a[i] === a[j]) count++;
        }
        for (let k in bb) {
            if (a[i].toLowerCase() === bb[k].toLowerCase() && count % 2) {
                if (bb[k] === bb[k].toLowerCase()) bb[k] = a[i].toUpperCase();
                else bb[k] = a[i].toLowerCase();
            }
        }
        count = null;
    }
    for (let i in b) {
        for (let j in b) {
            if (b[i] === b[j]) count++;
        }
        for (let k in aa) {
            if (b[i].toLowerCase() === aa[k].toLowerCase() && count % 2) {
                if (aa[k] === aa[k].toLowerCase()) aa[k] = b[i].toUpperCase();
                else aa[k] = b[i].toLowerCase();
            }
        }
        count = null;
    }
    aa = aa.join('');
    bb = bb.join('');
    return aa + bb;
}