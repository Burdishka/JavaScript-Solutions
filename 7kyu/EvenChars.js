/*
7 kyu
Return a string's even characters

https://www.codewars.com/kata/566044325f8fddc1c000002c
*/

function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" :
        [...string].filter((el, index) => index % 2);
}