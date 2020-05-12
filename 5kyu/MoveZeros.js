/*
5 kyu
Moving Zeros To The End

https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/

var moveZeros = function (arr) {
    let count = 0;
    let arr1 = [];
    for (let i in arr){
      if (arr[i] === 0){
        arr[i] = '';
        count++;
      }
    }
    for (let i in arr){
      if (arr[i] !== '') arr1.push(arr[i]);
    }
    for (let i = 1; i <= count; i++){
      arr1.push(0);
    }
    return arr1;
  }