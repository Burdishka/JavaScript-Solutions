/*
8 kyu
Be Concise IV - Index of an element in an array

https://www.codewars.com/kata/5703c093022cd1aae90012c9
*/

function find(arr, el){
    return (arr.includes(el))? arr.indexOf(el) : "Not found";
  }