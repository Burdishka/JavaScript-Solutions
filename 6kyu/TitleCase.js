/*
6 kyu
Title Case

https://www.codewars.com/kata/5202ef17a402dd033c000009
*/

function titleCase(title, minorWords) {
    if (!title) return '';
    title = title.toLowerCase().split(' ');
    if (!minorWords) return title.map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
    minorWords = minorWords.toLowerCase().split(' ');
    title = title.map((el, index) => minorWords.includes(el) && (index !== 0) ? el : el[0].toUpperCase() + el.slice(1));
    return title.join(' ');
}