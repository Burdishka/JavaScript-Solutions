/*
6 kyu
Counting Duplicates

https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
*/

function duplicateCount(text){
    text = text.toLowerCase().split('').sort().join('');
    let arr = []; 
    for (let i = 0; i < text.length; i++){
      for (let j = i + 1; j < text.length; j++){
        if (text[j] === text[i] && text[j] !== arr[arr.length - 1]){
          arr.push(text[i]); 
          for (let c = j + 1; c < text.length; c++){
            if (text[c] === text[j]) text[c] = '';
          }
        }
      }
    }
    return arr.length;
  }