/*
6 kyu
Does my number look big in this?

https://www.codewars.com/kata/5287e858c6b5a9678200083c
*/

function narcissistic(value) {
    let n = value + '';
    let sum = 0;
    let p = n.length;
    for (let i in n){
      sum += (+n[i]) ** p;
    }
    return sum === value;
}