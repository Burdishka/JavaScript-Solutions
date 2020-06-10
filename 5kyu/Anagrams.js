/*
5 kyu
Where my anagrams at?

https://www.codewars.com/kata/523a86aa4230ebb5420001e1
*/

function anagrams(word, words) {
    function sorter(w) {
        return w = w.split('').sort().join('');
    }
    word = sorter(word);
    let array = words.filter(el => {
        el = sorter(el);
        if (el === word) return el;
    });
    return array;
}