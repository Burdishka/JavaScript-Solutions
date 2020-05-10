/*
6 kyu
Number of anagrams in an array of words

https://www.codewars.com/kata/587e18b97a25e865530000d8
*/

function anagramCounter (wordsArray) {
    for (let i in wordsArray){
      wordsArray[i] =  wordsArray[i].split('').sort().join('');
    }
    let count = 0;
    for (let j = 0; j < wordsArray.length; j++){
      for (let k = j + 1; k < wordsArray.length; k++){
        if (wordsArray[j] === wordsArray[k]) count++;
      }
    }
    return count;
  }