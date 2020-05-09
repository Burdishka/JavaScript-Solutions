/*
6 kyu
Duplicate Encoder

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
*/

function duplicateEncode(word){
    word = word.toLowerCase();
    let str = '';
      for (let i = 0; i < word.length; i++){
        let count = 0;
        for (let j = 0; j < word.length; j++){
          if (word[j] === word[i]) count++; 
        }
        if (count > 1) str += ')';
        else str += '(';
      }
      return str;
  }