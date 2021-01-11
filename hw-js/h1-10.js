// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
const reverseNumber = (num) => {
  let index = 0,
    newNum = 0,
    OriginNum = num;
  while (num !== 0) {
    num = parseInt(num / 10);
    index++;
  }
  for (let i = index - 1; i >= 0; i--) {
    cur = OriginNum % 10;
    newNum += 10 ** i * cur;
    OriginNum = parseInt(OriginNum / 10);
  }
  return newNum;
};

const reverseNumber2 = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

const reverseNumber3 = (num) => {
  let digit,
    result = 0;
  while (num) {
    digit = num % 10; //  Get last digit. Ex. 123/10 → 12.3 → 3
    result = result * 10 + digit; //  Ex. 123 → 1230 + 4 → 1234
    num = (num / 10) | 0; //  Remove last digit. Ex. 123 → 12.3 → 12
  }
  return result;
};
// console.log(reverseNumber(32243));
// console.log(reverseNumber2(32243));
// console.log(reverseNumber3(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const isPalindrome = (str) => {
  let removeSpace = str.replace(/ /g, "");
  return removeSpace === removeSpace.split("").reverse().join("");
};
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("nurses run"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function substrings(str1) {
  let arr = str1.split("");
  let res = [];
  for (let i = 0; i < 2 ** arr.length; i++) {
    let temp = "";
    for (let j = 0; j < arr.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += arr[j];
      }
    }
    if (temp !== "") {
      res.push(temp);
    }
  }
  return res;
}
// console.log(substrings("dogc"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const alphabeitcal = (str) => str.split("").sort().join("");
// console.log(alphabeitcal("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
const upper = (str) => {
  let arr = str.split(" ");
  let res = [];
  for (const item of arr) {
    res.push(item.charAt(0).toUpperCase() + item.slice(1));
  }
  return res;
};
// console.log(upper("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
const longestWord = (str) => {
  let arr = str.split(" ");
  let longest = 0;
  let res = "";
  arr.forEach((item) => {
    if (item.length > longest) {
      longest = item.length;
      res = item;
    }
  });
  return res;
};
// console.log(longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
const vowels = (str) => {
  let vowelsList = "aeiouAEIOU";
  let count = 0;
  for (let item of str) {
    if (vowelsList.indexOf(item) !== -1) count++;
  }
  return count;
};
// console.log(vowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(19));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const dataType = (value) => {
  let dtypes = [Function, RegExp, Number, String, Boolean, Object],
    x,
    len;
  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }
  return typeof value;
};
// console.log(dataType("7"));
// console.log(dataType(7));
// console.log(dataType("true"));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(n) {
  let i, j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        console.log(" 1 ");
      } else {
        console.log(" 0 ");
      }
    }
    console.log("############");
  }
}
// matrix(4);
