/*
8 kyu
Polish alphabet

https://www.codewars.com/kata/57ab2d6072292dbf7c000039
*/

function correctPolishLetters (string) {
    let str = '';
    for (let i in string){
      switch(string[i]){
        case 'ą': str += 'a'; break;
        case 'ć': str += 'c'; break;
        case 'ę': str += 'e'; break;
        case 'ł': str += 'l'; break;
        case 'ń': str += 'n'; break;
        case 'ó': str += 'o'; break;
        case 'ś': str += 's'; break;
        case 'ź': str += 'z'; break;
        case 'ż': str += 'z'; break;
        default: str += string[i];
      }
    }
    return str;
}