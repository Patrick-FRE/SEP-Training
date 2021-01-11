// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 
function reverseInt (x) {
    if (x < 0) return -reverse(-x);
    var reversedInt = 0;
    while (x > 0) {
        var a = x % 10;
        x = Math.floor(x / 10);
        reversedInt = reversedInt * 10 + a;
    }
    return reversedInt;
}
console.log("1", reverseInt(32243));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function checkPalindrome(input) {
    var start = 0
    var end = input.length - 1
    while (start < end) {
        if (input[start] == " ") {
            start++
            continue
        }
        if (input[end] == " ") {
            end--
            continue
        }
        
        if (input[start] !== input[end]) {
            return false 
        } 
        start++
        end--
  }
  return true
}
console.log("2", checkPalindrome("madam or nurses run"));
console.log("2", checkPalindrome("madam or roma d am"));


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
function allCombinations(input) {
    var res = [];
    for (var i=0;i<input.length;i++) {
        for (var j=i;j<input.length;j++) {
            res.push(input.substring(i,j+1));
        }
    }
    return res;
}
console.log("3", allCombinations("dog"));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alphabeticalOrder(input) {
    var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var res = "";
    for (var i=0;i<input.length;i++) {
        a[input.charCodeAt(i)-97] += 1;
    }
    for (var i=0;i<26;i++) {
        for (var j=0;j<a[i];j++){
            res += String.fromCharCode(i + 97);
        }
    }
    return res;
}
console.log("4", alphabeticalOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
function upperCase(input) {
    var res = "";
    for (var i=0;i<input.length;i++) {
        if (i==0 || input[i-1]==" ") {
            res += String.fromCharCode(input.charCodeAt(i) - 32);
        }
        else {
            res += input[i];
        }
    }
    return res;
}
console.log("5", upperCase("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
function longestWord(input) {
    var temp = 0;
    var maxLen = 0;
    var currentLen = 0;
    var res = "";
    for (var i=0;i<input.length;i++) {
        if (input[i] == " " || i == input.length - 1) {
            if (maxLen < currentLen) {
                res = input.slice(i-currentLen,i);
                maxLen = currentLen;
                currentLen = 0;
            }
        }
        else {
            currentLen += 1;
        }
    }
    return res;
}
console.log("6", longestWord("Web Development Tutorialffsadfas"));


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function vowel(input) {
    var res = 0;
    for(var i=0; i < input.length; i++) {
        if (input[i] == "a" || input[i] =="e" || 
        input[i] =="i" || input[i] =="o" || input[i] =="u") {
            res += 1;
        }
    }
    return res;
}
console.log("7", vowel("The quick brown fox"));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function prime(input) {
    if (input == 2) { return true;}
    for (var i=input-1; i >= 2; i--) {
        if (input % i == 0) {return false;}
    }
    return true;
}
console.log("8", prime(14));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function typeOfArgument(input) {
    return typeof input;
}
console.log("9", typeOfArgument("werqwer"));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(input) {
    var res = [];
    for (var i = 0; i < input; i++) {
        res.push([]);
        for (var j = 0; j < input; j++) {
            if (i == j) {
                res[i].push(1);
            }
            else {
                res[i].push(0);
            }
        }
    }
    return res;
}
console.log("10", identityMatrix(3));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function secLowAndGreat(input) {
    input.sort((a, b) => a - b);
    return [input[1], input[input.length - 2]]
}
console.log("11", secLowAndGreat([1,2,9,5,3]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectNumber(input) {
    let sum = 0;
    for (let num = 1; num <= input / 2; num++) {
        if (input % num == 0) {
            sum += num;
        }
        
    }
    return sum == input;
}
console.log("12", perfectNumber(8128))

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(input) {
    let res = [];
    for (let num = 1; num <= input; num++) {
        if (input % num == 0) {
            res.push(num);
        }
    }
    return res;
}
console.log("13", factors(28))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountTocoins(amount, coins) {
    let res = [];
    coins.sort((a, b) => b - a);
    while (amount > 0) {
        const coin = coins[0];
        if (coin <= amount) {
            res.push(coin)
            amount -= coin;
        }
        if (coin > amount) {
            coins.shift();
        }
    }
    return res;
}
console.log("14", amountTocoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function bn(b, n) {
    let res = 1
    for (let i = 0; i < n; i++) {
        res *= b 
    }
    return res
}
console.log("15", bn(2, 4))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function uniqueChar (input) {
    let set = new Set(input);
    set = Array.from(set)
    return set.join('');
}
console.log("16", uniqueChar("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function occurrences (input) {
    let res = {};
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        // console.log(res.has("a"));
        if (char in res) {
            res[char] += 1;
        }
        else {
            res[char] = 1
        }
    }
    return res
}
console.log("17", occurrences( "aaaabbbbc"))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(nums,target) {
    let l = 0, r = nums.length-1;
    while (l < r) {
        let mid = l + Math.floor((r-l+1)/2);
        if (target < nums[mid]) {
            r = mid - 1
        } else {
            l = mid; 
        }
    }
    return nums[l]==target?l:-1;
}
console.log("18", binarySearch([-1,0,3,5,9,12],9));

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerThanNumber(input,inputNum) {
    var res = []
    for (var i = 0; i<input.length;i++) {
        if (input[i] > inputNum) {
            res.push(input[i]);
        }
    }
    return res;
}
console.log("19", largerThanNumber([1,2,3],2));


// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomString(fixedLen) {
    var res = "";
    const optional = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < fixedLen; i++) {
        res += optional[Math.floor(Math.random() * (optional.length - 1))];
    }
    return res;
}
console.log("20", randomString(30));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function possibleSubset(input,fixedLen) {
    const res = [];
	helper([], 0);

	function helper(path, index) {
        if (path.length == fixedLen) {
            res.push(path);
        } 
        else if (path.length > fixedLen) {
            return;
        }
		for (var i = index; i < input.length; i++) {
			helper([...path, input[i]], i + 1);
		}
	}
    return res;
}
console.log("21", possibleSubset([1, 2, 3],2));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function occurrences(inputString,inputLetter) {
    res = 0
    for (var i=inputString.length-1; i>=0; i--) {
        if (inputString[i] == inputLetter) {
            res += 1;
        }
    }
    return res;
}
console.log("22", occurrences('microsoft.com','o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function firstNotRepeatedCharacter(input) {
    var map = {};
    for (var i=input.length-1; i>=0; i--) {
        if (map[input[i]] == undefined) {
            map[input[i]] = 1;
        }
        else {
            map[input[i]] += 1;
        }
    }
    for (var i=0; i<input.length; i++) {
        if (map[input[i]] == 1) {
            return input[i];
        }
    }
    return null;
}
console.log("23", firstNotRepeatedCharacter("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(input){
    for (let i = 0; i < input.length-1; i++) {
        for (let j = 0; j < input.length - 1 - i; j++) {
            if (input[j] < input[j+1]) {
                let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    return input;
}
console.log("24", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestCountryName(input) {
    var res = ""
    var maxLen = 0;
    input.forEach(element => {
        if (maxLen < element.length) {
            res = element;
            maxLen = element.length;
        }
    });
    return res;
}
console.log("25", longestCountryName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstring(input) {
    var map = {};
    var l = 0;
    var r = 0;
    var res = 0;
    var maxLen = 0;
    while (r < input.length) {
        l = map[input[r]] >= l ? map[input[r]] + 1 : l;
        map[input[r]] = r;
        if (r - l + 1 > maxLen) {
            maxLen = r - l + 1;
            res = r + 1;
        }
        r += 1;
    }
    return input.substring(res - maxLen, res);
}
console.log("26", longestSubstring("pwwkew"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPalindromic(input) {
    var res = [];
    var maxLen = 0;
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < 2; j++) {
            var l = i;
            var r = i + j;
            while (input[l] && input[l] === input[r]) {
                l--;
                r++;
            }
            if ((r - l - 1) > res.length) {
                maxLen = r - l - 1;
            }
        }
    }
    
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < 2; j++) {
            var l = i;
            var r = i + j;
            while (input[l] && input[l] === input[r]) {
                l--;
                r++;
            }
            if ((r - l - 1) > maxLen) {
                res.push(input.substring(l + 1, r));
            }
        }
    }
    return res;
}
console.log("27", longestPalindromic("babad"));


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function calc(x) {
    return x*x;
}
function javaScriptFunction(func,input) {
    return calc(input);
}
console.log("29", javaScriptFunction(calc,2));

// 29. Write a JavaScript function to get the function name. 
function functionName() {
    return arguments.callee.name;
}
console.log("30", functionName());
