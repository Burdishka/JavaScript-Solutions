/*
6 kyu
Is a number prime?

https://www.codewars.com/kata/5262119038c0985a5b00029f
*/

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}