/*
7 kyu
Regex validate PIN code

https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
*/

function validatePIN(pin) {
    for (let i in pin) {
        if (isNaN(pin[i])) return false;
        if (pin[i] === '\n') return false;
    }
    if (+pin % 1 !== 0 || +pin < 0) return false;
    else if (pin.length === 4 || pin.length === 6) return true;
    else return false;
}