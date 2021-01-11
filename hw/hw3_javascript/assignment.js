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

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// function countVowels(s) {
//     return s.split('').filter(el => {if(['a', 'e', 'i', 'o', 'u'].includes(el)){return 1}}).length;
// }

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// function isPrime(n) {
//     for (let i = 2; i <= n; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//         return true;
//     }
// }

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// function type(params) {
//     return typeof(params)
// }

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
// function generateMatrix(n) {
//     let matrix = [];
//     for(let i=0; i<n; i++) {
//         matrix[i] = [];
//         for(let j=0; j<n; j++) {
//             if (i === j) {
//                 matrix[i].push(1);
//             } else {
//                 matrix[i].push(0);
//             }
//         }
//     }
//     return matrix;
// }

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// function findSecond(arr) {
//     arr.sort((a,b)=>{a-b});
//     return [arr.slice(1, 2), arr.slice(arr.length-2, arr.length-1)]
// }

// 12. Write a JavaScript function which says whether a number is perfect. 
// function isPerfect(n) {
//     return findFactors(n).reduce((a, b) => a + b, 0) === n;
// }


// 13. Write a JavaScript function to compute the factors of a positive integer. 
// function findFactors(n) {
//     let factors = [];
//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             factors.push(i);
//         }
//     }
//     return factors;
// }

// 14. Write a JavaScript function to convert an amount to coins. 
// function convertToCoins(amount, coins) {
//     let output = [];
//     for (let c of coins) {
//         while (amout >= c) {
//             output.push(c);
//             amount -= c;
//         }
//     }
//     return output;
// }

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
// function countExponent(b, n) {
//     return Math.pow(b, n);
// }

// 16. Write a JavaScript function to extract unique characters from a string. 
// function findUniqueChar(s) {
//     return new Set(s);
// }

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
// function countOccurrence(s) {
//     const output = {};
//     s.split('').forEach( el => {
//         if (output[el] === undefined) {
//             output[el] = 0;
//         }
//         output[el] += 1;
//     });
//     return output;
// }

18. Write a function for searching JavaScript arrays with a binary search. 
function bsearch(arr, target) {
    if 
}

// 19. Write a JavaScript function that returns array elements larger than a number. 
// function filterLargerThan(arr, n) {
//     return arr.filter(el => {if (el > n) {return el}});
//     // return arr.filter(el => el > n); // this is a simplest way to do it. but I think my version is more general
// }

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// function makeId(l) {
//     let text = "";
//     for(let i=0; i < l; i++ ) {  
//         text += char_list.charAt(Math.floor(Math.random() * char_list.length));
//     }
//     return text;
// }
// I think this problem wants us to make a Hash function, I found this online.

21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// pretty same as question 3

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// function findOccurrenceOfChar(s, target) {
//     return s.split('').reduce((a, v) => (v === target ? a + 1 : a), 0);
// }
// I found a way to do this in one line
// const findOccurrenceOfChar = (s, target) => s.split('').reduce((a, v) => (v === target ? a + 1 : a), 0);

23. Write a JavaScript function to find the first not repeated character. 
function findFirstNotRepeatedChar(s) {
    return new Set(s).filter().reduce((acc, curr) => {s.indexOf(acc) < s.indexOf(curr)? : , 0})
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
// }

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// practice to use reduce in oneline
// const longestCountryName = (arr) => arr.reduce((acc, curr) => (curr.length > acc.length ? curr : acc), arr[0]);

26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

27. Write a JavaScript function that returns the longest palindrome in a given string. 

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
// function passFunctions(func) {
//     return (func)()
// }

// 29. Write a JavaScript function to get the function name. 
// I'm not sure what exactly "function name" is, so I give two version of it.
// function funcName(func) {
//     return func.name;
// }
// function funcName1() {
//     return arguments.callee.name;
// }
// arguments.callee
//     Reference to the currently executing function that the arguments belong to. Forbidden in strict mode.