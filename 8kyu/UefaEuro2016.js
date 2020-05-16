/*
8 kyu
UEFA EURO 2016

https://www.codewars.com/kata/57613fb1033d766171000d60
*/

function uefaEuro2016(teams, scores) {
    let winer;
    if (scores[0] > scores[1]) winer = teams[0];
    else if (scores[0] < scores[1]) winer = teams[1];
    else if (scores[0] === scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
    return `At match ${teams[0]} - ${teams[1]}, ${winer} won!`;
}