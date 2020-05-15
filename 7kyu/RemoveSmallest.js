/*
7 kyu
Remove the minimum

https://www.codewars.com/kata/563cf89eb4747c5fb100001b
*/

function removeSmallest(n) {
    let arr = [];
    let min = Math.min(...n);
    let count = 0;
    for (let i in n){
      if (count === 0 && min === n[i]) count++;
      else arr.push(n[i]);
    }
    return arr;
  }