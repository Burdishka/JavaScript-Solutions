/*
6 kyu
Throwing Darts

https://www.codewars.com/kata/525dfedb5b62f6954d000006
*/

function scoreThrows(r) {
    let score = 0;
    let count = 0;
    for (let i in r) {
        if (r[i] < 5) {
            score += 10;
            count++;
        }
        else if (r[i] <= 10) {
            score += 5;
        }
    }
    if (r.length === count && count !== 0) score += 100;
    return score;
}