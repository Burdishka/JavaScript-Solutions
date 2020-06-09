/*
6 kyu
Sequences and Series

https://www.codewars.com/kata/5254bd1357d59fbbe90001ec
*/

function getScore(n) {
    let res = 50;
    for (let i = 2; i <= n; i++) {
        res += i * 50;
    }
    return res;
}