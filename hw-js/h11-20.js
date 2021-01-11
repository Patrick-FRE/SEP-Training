// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
const secondLowAndHigh = (arr) => {
  arr.sort((a, b) => a - b);
  const res = new Map();
  let newArr = arr.filter((item) => !res.has(item) && res.set(item, 1));
  return [newArr[1], newArr[newArr.length - 2]];
};
// console.log(secondLowAndHigh([1, 3, 4, 2, 4, 5, 2]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const isPerfect = (num) => {
  let temp = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  if (temp === num && temp !== 0) return true;
  return false;
};
// console.log(isPerfect(6));

// 13. Write a JavaScript function to compute the factors of a positive integer.
const factors = (num) => {
  let res = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  return res;
};
// console.log(factors(39));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
const amountTocoins = (amount, coins) => {
  if (amount === 0) return [];
  coins.sort((a, b) => b - a);
  let left = 0;
  if (amount >= coins[0]) {
    left = amount - coins[0];
    return [coins[0]].concat(amountTocoins(left, coins));
  } else {
    coins.shift();
    return amountTocoins(amount, coins);
  }
};
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
const exp = (b, n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = b * res;
  }
  return res;
};
// console.log(exp(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
const uniq = (str) => {
  let arr = str.split("");
  const map = new Map();
  let newArr = arr.filter((item) => !map.has(item) && map.set(item, 1));
  return newArr.join("");
};
// console.log(uniq("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
const occurrencesLetter = (str) => {
  let map = new Map();
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  return map;
};
// console.log(occurrencesLetter("The quick brown fox jumps over the lazy dog"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// https://www.w3resource.com/javascript-exercises/javascript-function-exercise-18.php
function array_binarySearch(narray, delement) {
  var mposition = Math.floor(narray.length / 2);
  if (narray[mposition] === delement) {
    return mposition;
  } else if (narray.length === 1) {
    return null;
  } else if (narray[mposition] < delement) {
    var arr = narray.slice(mposition + 1);
    var res = array_binarySearch(arr, delement);
    if (res === null) {
      return null;
    } else {
      return mposition + 1 + res;
    }
  } else {
    var arr1 = narray.slice(0, mposition);
    return array_binarySearch(arr1, delement);
  }
}
let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
// console.log(array_binarySearch(myArray, 6));

// 19. Write a JavaScript function that returns array elements larger than a number.
const largerEle = (arr, val) => {
  return arr.filter((item) => item > val);
};
// console.log(largerEle([10, 23, 34, 45, 7, 11], 20));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const makeId = (len) => {
  let text = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    text += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return text;
};
// console.log(makeId(8));
