/*
7 kyu
Simple Fun #334: Two Beggars And Gold

https://www.codewars.com/kata/59547688d8e005759e000092
*/

function distributionOf(golds) {
    let a = 0;
    let b = 0;
    let n = golds.length;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            if (golds[0] >= golds[golds.length - 1]) {
                a += golds[0];
                golds.splice(0, 1);
            } else {
                a += golds[golds.length - 1];
                golds.splice(golds.length - 1, 1)
            }
        } else {
            if (golds[0] >= golds[golds.length - 1]) {
                b += golds[0];
                golds.splice(0, 1);
            } else {
                b += golds[golds.length - 1];
                golds.splice(golds.length - 1, 1)
            }
        }
    }
    return [a, b];
}