/*
7 kyu
Mispelled word

https://www.codewars.com/kata/5892595f190ca40ad0000095
*/

var mispelled = function (word1, word2) {
    if (word1.length - word2.length > 1) return false;
    let count = 0;
    for (let i in word2) {
        if (!word1.includes(word2[i])) count++;
        if (count === 2) return false;
    }
    return true;
}