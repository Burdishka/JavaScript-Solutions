/*
6 kyu
Happy Numbers

https://www.codewars.com/kata/59d53c3039c23b404200007e
*/

function happyNumbers(x){
    let arr = [];
    let sum = 0;
    for (let i = 1; i <= x; i++){
      let n = i;
      while (n > 0){
        n += '';
        n = n.split('');
        for (let i in n){
          sum += (+n[i]) ** 2; 
        }
        n = sum;
        sum = 0;
        if (n === 4) break;
        if (n === 1){
          arr.push(i);
          break;
        }
      }
    }
    return arr;
  }