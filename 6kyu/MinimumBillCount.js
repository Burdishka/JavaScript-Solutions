/*
6 kyu
Minimum dollar bill's count

https://www.codewars.com/kata/58e4d3530e1018e155000058
*/

function minimumBillCount(v, a) {
    a.sort((a, b) => b - a);
    let minBillCount = 0;
    let bill;
    while (v > 0) {
        let count = 0;
        for (let i of a) {
            if (i <= v) {
                count += (v / i);
                bill = i;
                break;
            }
        }
        if (count % 1 === 0) return minBillCount += count;
        else count = Math.trunc(count);
        v = v - count * bill;
        minBillCount += count;
    }
}