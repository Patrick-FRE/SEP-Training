// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function subset(arr, arr_size) {
  let result_set = [],
    result;
  for (let x = 0; x < Math.pow(2, arr.length); x++) {
    result = [];
    let i = arr.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arr[i]);
      }
    } while (i--);
    if (result.length >= arr_size) {
      result_set.push(result);
    }
  }
  return result_set;
}
// console.log(subset([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
const letterCount = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
};
// console.log(letterCount("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
const firstNotRepeat = (str) => {
  let arr = str.trim().split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count < 2) {
      result = arr[i];
      break;
    }
  }
  return result;
};
// console.log(firstNotRepeat("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (arr) => {
  let n = arr.length - 1;
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    n--;
  }
  return arr;
};
// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
const Longest_Country_Name = (arr) => {
  return arr.reduce((lname, country) =>
    lname.length > country.length ? lname : country
  );
};
// console.log(
//   Longest_Country_Name(["Australia", "Germany", "United States of America"])
// );

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longest_substring_without_repeating_characters(input) {
  var chars = input.split("");
  var curr_char;
  var str = "";
  var longest_string = "";
  var hash = {};
  for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) {
      str += curr_char;
      hash[chars[i]] = { index: i };
    } else {
      if (longest_string.length <= str.length) {
        longest_string = str;
      }
      var prev_dupeIndex = hash[curr_char].index;
      var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + curr_char;
      hash = {};
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = { index: j };
      }
    }
  }
  return longest_string.length > str.length ? longest_string : str;
}
// console.log(longest_substring_without_repeating_characters("google.com"));
// console.log(longest_substring_without_repeating_characters("example.com"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function is_Palindrome(str1) {
  var rev = str1.split("").reverse().join("");
  return str1 === rev;
}
function longest_palindrome(str1) {
  var max_length = 0,
    maxp = "";
  for (var i = 0; i < str1.length; i++) {
    var subs = str1.substr(i, str1.length);
    for (var j = subs.length; j >= 0; j--) {
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }
  return maxp;
}
// console.log(longest_palindrome("abracadabra"));
// console.log(
//   longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
// );

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
const passFn = (cb) => {
  cb();
};
// passFn(() => console.log("Hi"));

// 29. Write a JavaScript function to get the function name.
function getName() {
  console.log(arguments.callee.name);
}
// getName();
