/*
7 kyu
Count number of zeros from 1 to N

https://www.codewars.com/kata/557cffec8c3e8e55cc00010f
*/

function countZeros(n) {
    let count = 0;
    for (let i = 1; i <= n; i++){
      let arr = i + '';
      arr = arr.split('');
      for (let j in arr){
        if (+arr[j] === 0) count++;
      }
    }
    return count;
  }