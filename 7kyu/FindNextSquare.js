/*
7 kyu
Find the next perfect square!

https://www.codewars.com/kata/56269eb78ad2e4ced1000013
*/

function findNextSquare(sq) {
    if ((sq ** 0.5) % 1 === 0) {
        for (let i = sq + 1; ; i++) {
            if ((i ** 0.5) % 1 === 0) return i;
        }
    }
    return -1;
}