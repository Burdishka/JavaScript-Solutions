/*
7 kyu
Train to remove duplicates from an array with filter()

https://www.codewars.com/kata/58308360aeb69a460b0002b2
*/

function unique(arr) {
    return arr.filter((el, index) => index === arr.indexOf(el));
  }