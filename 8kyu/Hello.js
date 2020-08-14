/*
8 kyu
Hello, Name or World!

https://www.codewars.com/kata/57e3f79c9cb119374600046b
*/

function hello(name) {
  if (name === '' || name == null) return 'Hello, World!'
  name = name.toLowerCase().replace(name[0], name[0].toUpperCase());
  return `Hello, ${name}!`;
}