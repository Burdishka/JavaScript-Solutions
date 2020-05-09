/*
6 kyu
Array.diff

https://www.codewars.com/kata/523f5d21c841566fde000009
*/

function arrayDiff(a, b) {
    if (b[0] === undefined) return a;
    let arr = [];
    for (let i = 0; i < a.length; i++){
      for (let j = 0; j < b.length; j++){
        if (b[j] === a[i]) a[i] = '';
      }
    }
    for (let k = 0; k < a.length; k++){
      if (a[k] !== '') arr.push(a[k]);
    }
    return arr;
  }