// 1. Write a JavaScript function that reverse a number
// function reverseNumber(n) {
//     return n.toString().split('').reverse().join('');
// }

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// function isPalindrome(s) {
//     return s === s.split('').reverse();
// }

3. Write a JavaScript function that generates all combinations of a string. 


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// function sortChar(s) {
//     return s.split('').sort().join('');
// }


// 5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// function convertToUpperCase(s) {
//     return s.split(' ').map(el => {return el[0].toUpperCase()+el.slice(1)}).join(' ');
// }

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// function findLongestWord(s) {
//     return s.split(' ').reduce((acc, curr) => {if (typeof acc == "string") { acc = acc.length} return Math.max(acc, curr.length)});
// }