/*
8 kyu
Price of Mangoes

https://www.codewars.com/kata/57a77726bb9944d000000b06
*/

function mango(quantity, price) {
    return (quantity - (Math.trunc(quantity / 3))) * price;
}