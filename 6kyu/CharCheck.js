/*
6 kyu
Character limits: How long is your piece of string?

https://www.codewars.com/kata/58af4ed8673e88a719000116
*/

function charCheck(text, max, spaces) {
    text = spaces ? text : text.replace(/ /g, '');
    return [text.length <= max, text.substring(0, max)];
}