/*
6 kyu
Valid Phone Number

https://www.codewars.com/kata/525f47c79f2f25a4db000025
*/

function validPhoneNumber(phoneNumber) {
    let code = /^\(\d{3}\) \d{3}-\d{4}$/;
    return code.test(phoneNumber);
}