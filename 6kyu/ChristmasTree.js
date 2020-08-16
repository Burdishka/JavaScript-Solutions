/*
6 kyu
Christmas tree

https://www.codewars.com/kata/52755006cc238fcae70000ed
*/

function christmasTree(n) {
    let str = '';
    let spase = ' ';
    for (let i = 1; i <= n; i++){
      str += spase.repeat(n - i);
      for (let j = 1; j <= i; j++){
        str += '*'
        if (j === i) str += '*'.repeat(i - 1) + spase.repeat(n - i);
      }
      if (i !== n) str = str + '\n';
    }
    
    return str;
  }