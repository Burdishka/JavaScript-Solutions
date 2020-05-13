/*
7 kyu
Power of 4

https://www.codewars.com/kata/544d114f84e41094a9000439
*/

function powerOf4(n) {
    if (typeof n !== 'number') return false;
    if (n < 4) return false;
    while (n > 1){
      n = n / 4;
    }
    return n === 1;
  }