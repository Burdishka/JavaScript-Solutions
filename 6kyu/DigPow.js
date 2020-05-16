/*
6 kyu
Playing with digits

https://www.codewars.com/users/Burdishka/completed_solutions
*/

function digPow(n, p){
    let a = n + '';
    a = a.split('');
    let sum = 0;
    for (let i in a){
      sum += Math.pow(+a[i], p);
      p++;
    }
    return (sum < n)? -1 : (sum / n % 1 === 0)? sum / n : -1;
}