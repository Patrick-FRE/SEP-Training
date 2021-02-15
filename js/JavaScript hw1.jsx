const { array } = require("prop-types")
const { createFactory } = require("react")

//1. Write a JavaScript function that reverse a number. 
x = 32243
function reverse(input) {
  return String(input).split('').reverse().join('')
}
console.log(reverse(x))

//2.Write a JavaScript function that checks whether a passed string is palindrome or not? 
function palindrome(str) {
  return str == str.split('').reverse().join('')
}
console.log(palindrome('orange'))

//3.Write a JavaScript function that generates all combinations of a string. 
function combinator(str) {
  var lsit = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length + 1; j++) {
      lsit.push(str.slice(i, j));
    }
  }
  return lsit;
}

console.log(combinator("dog"));

//4.Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphabetical(str) {
  return str.split('').sort().join('')
}
console.log(alphabetical('webmaster'))

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function capitalize(str) {
  return str.replace(/\w\S*/g, function (a) {
    return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()

  });
}
console.log(capitalize('the quick brown fox'));

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function longestWord(str) {
  var arr = str.split(' ')
  return arr.reduce(function (a, b) {
    return (a.length > b.length ? a : b)
  });
}

console.log(longestWord('Web Development Tutorial'));

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function vowel(str) {
  return str.match(/[aeiou]/gi).length
}
console.log(vowel('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false

  }
  return num > 1
}
console.log(checkPrime(4))


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function checkType(arg) {
  return typeof (arg);
}
console.log(checkType(1))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(n) {
  var i;
  var j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        console.log(' 1 ');
      }
      else {
        console.log(' 0 ');
      }
    }
    console.log('----------');
  }
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function Second_Greatest_Lowest(arr) {
  arr.sort(function (x, y) {
    return x - y
  });
  var unique = [arr[0]]
  var result = []

  for (var j = 1; j < arr.length; j++) {
    if (arr[j - 1] !== arr[j]) {
      unique.push(arr[j])
    }
  }
  result.push(unique[1], unique[unique.length - 2]);
  return result.join(',')
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectNum(num) {
  let sum = 0;

  for (var i = 0; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum == num) {
    return true
  }
  else {
    return false
  }
}

console.log(perfectNum(6))


// 13. Write a JavaScript function to compute the factors of a positive integer. 
function checkFactor(n) {
  var factor = []
  for (var i = 0; i <= Math.floor(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      factor.push(i)
      if (n / i !== i)
        factor.push(n / i);
    }
  }
  factor.sort(function (x, y) {
    return x - y
  });  // numeric sort
  return factor
}

console.log(checkFactor(4))


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountTocoins(amount, coins) {
  if (amount === 0) {
    return []
  }
  else {
    if (amount >= coins[0]) {
      left = (amount - coins[0]);
      return [coins[0]].concat(amountTocoins(left, coins));
    }
    else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(40, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exp(b, n) {
  var ans = 1
  for (var i = 1; i <= n; i++) {
    ans = b * ans
  }
  return ans
}
console.log(exp(2, 3));



// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function repeat(arr) {
  let map = new Map();
  let res = new Array();
  for (var i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true)
    }
    else {
      map.set(arr[i], false)
      res.push(arr[i])
    }
  }
  return res.join('')
}
console.log(repeat())

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function charCounts(str) {
  var uchars = {};
  str.replace(/\S/g, function (l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
  return uchars;
}
console.log(charCounts("The quick brown fox jumps over the lazy dog"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function bsearchWithoutRecursion(array, low, high, target) {
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] > target) {
      high = mid - 1
    } else if (array[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
// 19. Write a JavaScript function that returns array elements larger than a number. 
function isBigEnough(value) {
  return function (element, index, array) {
    return (element >= value)
  }
}
var filtered = [].filter(isBigEnough(10))
console.log(filtered)

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function makeid(num) {
  var res = ""
  var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < num; i++) {
    res += list.charAt(Math.floor(Math.random() * list.length))
  }
  return res;
}
console.log(makeid(6))


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function combine(a, min) {
  var fn = function (n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got
      }
      return
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return
  }
  var all = [];
  for (var i = min; i < a.length; i++) {
    fn(i, a, [], all)
  }
  all.push(a)
  return all
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function char_count(str, letter) {
  var letter_Count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letter_Count += 1
    }
  }
  return letter_Count
}

console.log(char_count())

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i)
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c
    }
  }
  return null
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function sortArray(nums) {
  let count = 0, sorted = true
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      count++
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        sorted = false
      }
    }
    if (sorted) {
      break
    }
  }
  console.log(count)
  return nums
};

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function LongestCountryName(arr) {
  return arr.reduce(function (name, country) {
    return name.length > country.length ? name : country;
  },
    "");
}
console.log(LongestCountryName(["Australia", "Germany", "United States of America"]));


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstr(str) {
  var res = 0, tmp = []
  for (const char of str) {
    const idx = tmp.indexOf(char);
    if (idx > -1) { tmp = tmp.slice(idx + 1) }
    tmp.push(char)
    if (tmp.length > res) { res = tmp.length }
  }
  return res;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longest_palindrome(str) {

  var max_length = 0,
    maxp = '';

  for (var i = 0; i < str.length; i++) {
    var subs = str.substr(i, str.length);

    for (var j = subs.length; j >= 0; j--) {
      var sub_str = subs.substr(0, j);
      if (sub_str.length <= 1)
        continue;

      if (is_Palindrome(sub_str)) {
        if (sub_str.length > max_length) {
          max_length = sub_str.length;
          maxp = sub_str;
        }
      }
    }
  }

  return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function functionParameter(id, callback) {
  callback();
}

function anotherOne() {
  console.log('Hi');
}

functionParameter(1, anotherOne);

// 29. Write a JavaScript function to get the function name. 
function name() {
  console.log(arguments.callee.name);
}
name();