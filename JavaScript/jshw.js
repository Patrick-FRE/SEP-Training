// // 1. Write a JavaScript function that reverse a number.
// // Example x = 32243;
// // Expected Output : 34223
// const reverseNumber = num => {
//     let res = 0;
//     let target = num;

//     while (target > 0) {
//         res *= 10;
//         res +=  target % 10; 
//         target = Math.floor(target / 10);
//     }
//     return num % 10 === 0 ? res * 10 : res;
// };
// // ~test~
// const x = 9876504321;
// console.log(reverseNumber(x));

// // // 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// // // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// const checkPalindrome = str => {
//     const target = str.split("");
//     const reverseStr = target.reverse().join("");
//     return reverseStr === str ? true : false;
// };
// // ~test~
// const str = "showtohs";
// console.log(checkPalindrome(str));

// // // 3. Write a JavaScript function that generates all combinations of a string.
// // // Example string : 'dog'
// // // Expected Output : d,do,dog,o,og,g
// const getAllCombin = str => {
//     const set = new Set();
//     let chrnumber = 1;
//     while (chrnumber <= str.length) {
//         let start = 0;
//         while (start < str.length) {
//             set.add(str.substring(start, start + chrnumber));
//             start++;
//         }
//         chrnumber++;
//     }
//     return [...set];
// };
// // ~test~
// const str = "showtime";
// console.log(getAllCombin(str));

// // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// // Example string : 'webmaster'
// // Expected Output : 'abeemrstw'
// // Assume punctuation and numbers symbols are not included in the passed string.
// const showOrder = str => {
//     const arr = str.split("");
//     arr.sort();
//     return arr.join("");
// };
// // ~test~
// const str = "webmaster";
// console.log(showOrder(str));

// // 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// // Example string : 'the quick brown fox'
// // Expected Output : 'The Quick Brown Fox '
// const toUper = str => {
//     const arr = str.split(" ");
//     const res = [];
//     arr.forEach(substr => {
//         substr = substr[0].toUpperCase() + substr.slice(1);
//         res.push(substr);
//     });
//     return res.join(" ");
// };
// // ~test~
// const str = "the quick brown fox";
// console.log(toUper(str));

// // 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// // // Example string : 'Web Development Tutorial'
// // // Expected Output : 'Development'
// const findLongestStr = str => {
//     const arr = str.split(" ");
//     let len = 0;
//     let res = "";
//     for (let val of arr) {
//         if (len < val.length) {
//             len = val.length;
//             res = val;
//         }
//     }
//     return res;
// };
// // ~test~
// const str = "Web Development Tutorial";
// console.log(findLongestStr(str));

// // 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// // Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// // Example string : 'The quick brown fox'
// // Expected Output : 5
// const findVowels = str => {
//     const vowels = new Set(["a", "e", "i", "o", "u"]);
//     const newStr = str.toLowerCase();
//     let res = 0;
//     console.log(newStr);
//     for (let i = 0; i < newStr.length; i++) {
//         if (vowels.has(newStr[i])) res++;
//     }
//     return res;
// };
// // ~test~
// const str = "The quick brown fox THE QUICK BROWN FOX";
// console.log(findVowels(str));

// // 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// // Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// const testPrime = num => {
//     if (num < 3) return num > 1;
//     if (num % 2 === 0) return false;
//     for (let i = 3; i < num; i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };
// // ~test~
// //2，3，5，7，11，13，17，19，23，29，31，37，41，43，47，53，59，61，67，71，73，79，83，89，97
// const num = 71;
// console.log(testPrime(num));

// // 9. Write a JavaScript function which accepts an argument and returns the type.
// // Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// const getType = arg => {
//     return typeof arg;
// };
// // ~test~
// const a;
// console.log(getType({}));
// console.log(getType(true));
// console.log(getType(function () { }));
// console.log(getType(0));
// console.log(getType("ss"));
// console.log(getType(a));

// // 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// const generMatrix = n => {
//     const res = [];
//     for (let i = 0; i < n; i++) {
//         res[i] = new Array(n).fill(0);
//     }
//     // let res = new Array(n).fill(0).map(_ => new Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         res[i][i] = 1;
//     }
//     return res;
// };
// // ~test~
// const n = 3;
// console.log(generMatrix(n));

// // 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// // Sample array : [1,2,3,4,5]
// // Expected Output : 2,4
// const findSecond = arr => {
//     arr.sort((a, b) => a - b);
//     return [arr[1], arr[arr.length - 2]];
// };
// // ~test~
// const arr = [2, 3, 1, 5, 4];
// console.log(findSecond(arr));

// // 12. Write a JavaScript function which says whether a number is perfect.
// // According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the
// // sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself
// // (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of
// // its positive divisors (including itself).
// // Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
// // and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
// // divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed
// // by the perfect numbers 496 and 8128.
// const findPerfect = num => {
//     const arr = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) arr.push(i);
//     }
//     let target = 0;
//     arr.map(ele => {
//         target += ele;
//     });
//     return num === target;
// };
// // ~test~
// const num = 486;
// console.log(findPerfect(num));

// // 13. Write a JavaScript function to compute the factors of a positive integer.
// const getFactors = num => {
//     const res = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) res.push(i);
//     }
//     return res;
// };
// // ~test~
// const num = 487;
// console.log(getFactors(num));

// // 14. Write a JavaScript function to convert an amount to coins.
// // Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// // Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// // Output : 25, 10, 10, 1
// const amountToconins = (amount, coins) => {
//     coins.sort((a, b) => b - a);
//     const res = [];
//     for (let i = 0; i < coins.length; i++) {
//         if (amount < coins[i]) continue;
//         const count = Math.floor(amount / coins[i]);
//         for (let j = 0; j < count; j++) res.push(coins[i]);
//         amount = amount % coins[i];
//         if (amount === 0) break;
//     }
//     return res;
// };
// // ~test~
// const amount = 146;
// const coins = [25, 10, 5, 2, 1];
// console.log(amountToconins(amount, coins));

// // 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
// // Accept b and n from the user and display the result.
// const calcExponent = (bases, exponent) => {
//     if (exponent === 0) return 1;
//     if (exponent === 1) return bases;
//     let res = bases;
//     for (let i = 2; i <= exponent; i++) {
//         res *= bases;
//     }
//     return res;
// };
// // ~test~
// const bases = 3;
// const exponent = 4;
// console.log(calcExponent(bases, exponent));

// // 16. Write a JavaScript function to extract unique characters from a string.
// // Example string : "thequickbrownfoxjumpsoverthelazydog"
// // Expected Output : "thequickbrownfxjmpsvlazydg"
// const extract = str => {
//     const set = new Set();
//     for (let i = 0; i < str.length; i++) {
//         if (!set.has(str[i])) {
//             set.add(str[i]);
//             continue;
//         }
//         str = str.substring(0, i) + str.slice(i + 1);
//         i--;
//     }
//     return str;
// };
// // ~test~
// const str = "thequickbrownfoxjumpsoverthelazydog";
// console.log(extract(str));
// console.log("thequickbrownfxjmpsvlazydg");

// // 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
// const getOccurrences = str => {
//     const map = new Map();
//     let arr = str.match(/\b\w+\b/g);
//     console.log(arr);
//     arr.forEach(ele => {
//         if (!map.has(ele)) map.set(ele, 0);
//         map.set(ele, map.get(ele) + 1);
//     });
//     return map;
// };
// // ~test~
// const str = "show me the money again, show them again, and again";
// console.log(getOccurrences(str));

// // 18. Write a function for searching JavaScript arrays with a binary search.
// // Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// const binarySearch = (arr, target) => {
//     arr.sort((a, b) => a - b);
//     let start = 0;
//     let end = arr.length - 1;
//     while (start + 1 < end) {
//         let mid = start + Math.floor((end - start) / 2);
//         if (arr[mid] > target) end = mid;
//         if (arr[mid] <= target) start = mid;
//     }
//     if (arr[start] === target || arr[end] === target) return true;
//     return false;
// };
// // check if target in the array;
// // ~test~
// const arr = [2, 5, 6, 8, 1, 12, 14, 16];
// const target = 6;
// console.log(binarySearch(arr, target));

// // 19. Write a JavaScript function that returns array elements larger than a number.
// const findLarger = (arr, target) => {
//     arr.sort((a, b) => a - b);
//     let start = 0;
//     let end = arr.length - 1;
//     while (start + 1 < end) {
//         let mid = start + Math.floor((end - start) / 2);
//         if (arr[mid] > target) end = mid;
//         if (arr[mid] < target) start = mid;
//         if (arr[mid] === target) {
//             end = mid + 1;
//             break;
//         }
//     }
//     return arr[end];
// };
// // ~test~
// let arr = [2, 5, 6, 8, 1, 12, 14, 16];
// let target = 5;
// console.log(findLarger(arr, target));

// // 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// // Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// const randomId = len => {
//     const list =
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*?";
//     let res = "";
//     while (len) {
//         res += list[Math.floor(list.length * Math.random())];
//         len--;
//     }
//     return res;
// };
// // ~test~
// const len = 10;
// console.log(randomId(len));

// // 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// // Sample array : [1, 2, 3] and subset length is 2
// // Expected output : [[2, 1], [3, 1], [3, 2]]
// const subset = (arr, len) => {
//     const res = [];
//     const subArr = [];
//     if (!arr.length || len < 1) return null;
//     arr.sort((a, b) => a - b);
//     helper(subArr, 0, res);
//     function helper(subArr, start, res) {
//         if (subArr.length === len) {
//             res.push([...subArr]);
//             return;
//         }
//         for (let i = start; i < arr.length; i++) {
//             if (arr[i + 1] && arr[i] === arr[i + 1]) continue;
//             subArr.push(arr[i]);
//             helper(subArr, i + 1, res);
//             subArr.pop();
//         }
//     }
//     return res;
// };
// // ~test~
// const arr = [4, 6, 5, 4, 2];
// const len = 2;
// console.log(subset(arr, len));

// // 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// // Sample arguments : 'microsoft.com', 'o'
// // Expected output : 3
// const findTargetNumber = (str, target) => {
//     // let newstr = str.replace(/[^a-zA-Z]/g, "");
//     const map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         if (!map.has(str[i])) map.set(str[i], 0);
//         map.set(str[i], map.get(str[i]) + 1);
//     }
//     return map.get(target);
// };
// // ~test~
// const str = "microsoft.com";
// const target = "o";
// console.log(findTargetNumber(str, target));

// // 23. Write a JavaScript function to find the first not repeated character.
// // Sample arguments : 'abacddbec'
// // Expected output : 'e'
// const findFirstNotRepeat = str => {
//     const set = new Set();
//     const arr = [];
//     for (let ele of str) {
//         if (!set.has(ele)) {
//             set.add(ele);
//             arr.push(ele);
//         } else arr.splice(arr.indexOf(ele), 1);
//     }
//     return arr[0];
// };
// // ~test~
// const str = "abacddbec";
// console.log(findFirstNotRepeat(str));

// // 24. Write a JavaScript function to apply Bubble Sort algorithm.
// // Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// // Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// // Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// const bubbleSort = numArr => {
//     let len = numArr.length;
//     while (len > 1) {
//         for (let i = 1; i < len; i++) {
//             if (numArr[i - 1] < numArr[i])
//                 [numArr[i - 1], numArr[i]] = swap(numArr[i - 1], numArr[i]);
//         }
//         len--;
//     }
//     function swap(a, b) {
//         b = [a, (a = b)][0];
//         return [a, b];
//     }
//     return numArr;
// };
// // ~test~
// const numArr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// console.log(bubbleSort(numArr));

// // 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// // Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// // Expected output : "United States of America"
// const Longest_Country_Name = arr => {
//     let len = 0;
//     let res = "";
//     for (let ele of arr) {
//         if (len < ele.length) {
//             len = ele.length;
//             res = ele;
//         }
//     }
//     return res;
// };
// // ~test~
// const arr = ["Australia", "Germany", "United States of America"];
// console.log(Longest_Country_Name(arr));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
const findLongestNRepeat = str => {
    const set = new Set();
    let i = 0;
    while (i < str.length) {
        let j = i;
        const markSet = new Set();
        while (j <= str.length) {
            if (!markSet.has(str[j])) markSet.add(str[j++]);
            else {
                set.add(str.slice(i, j));
                break;
            }
            if (j == str.length - 1) set.add(str.slice(i, j));
        }
        i++;
    }
    const res = [...set];
    let len = 0;
    let result = "";
    res.map(ele => {
        if (ele.length > len) {
            len = ele.length;
            result = ele;
        }
    });
    return result;
};
// ~test~
const str = "abcdeqwedadefghijklmnopqfassd";
console.log(findLongestNRepeat(str));

// // 27. Write a JavaScript function that returns the longest palindrome in a given string.
// const longestPalindrome = function (s) {
//     if (!s) return '';
//     const res = [];
//     const isPalindrome = function (i, j, s) {
//         const a = s.slice(i, j + 1);
//         let [x, y] = [0, a.length - 1];
//         while (x <= y) {
//             if (a[x] !== a[y]) return false;
//             x++;
//             y--;
//         }
//         return true;
//     }
//     let max = 0;

//     for (let i = 0; i < s.length; i++) {
//         let j = s.length - 1;
//         while (i <= j) {
//             if (j - i < max) break;

//             if (s[j] === s[i] && isPalindrome(i, j, s)) {
//                 const a = s.slice(i, j + 1);
//                 max = Math.max(max, a.length);
//                 res.push(s.slice(i, j + 1));
//                 break;
//             }
//             j--;
//         }
//     }
//     //console.log(res);
//     res.sort((a, b) => b.length - a.length);
//     return res[0];
// };
// // ~test~
// const str = "anaanas";
// console.log(longestPalindrome(str));

// // 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
// const gothroughCallBack = (callback, num) => {
//     const res = callback(num);
//     return res;
// };
// const helper = num => {
//     return num + 10;
// };
// // ~test~
// console.log(gothroughCallBack(helper, 20));

// // 29. Write a JavaScript function to get the function name.
// function getName(fun) {
//     //return arguments.callee.name;
//     return fun.name;
// }
// // ~test~
// function foo() { }
// const far = foo;
// console.log(getName(far));
