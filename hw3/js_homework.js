// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

const reverseNum = function (num) {
    let digit, result = 0;
    while (num !== 0) {
        digit = num % 10;
        num = parseInt(num / 10);
        result = result * 10 + digit;

    }
    return result;
}

// console.log(reverseNum(12345));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const checkPalidrome = function (str) {
    let p = str.replace(/[^a-zA-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = p.length - 1;
    while (left < right) {
        if (p[left] !== p[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}
// console.log(checkPalidrome("bird"));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
const combinations = function(str){
    let set = new Set();
    for(let i = 0; i<str.length; i++){
        for(let j = 1; j<=str.length; j++){
            //substring method will discard the ending element, so j need to be equaled to str.length
            if(i !== j){
                //discard the empty string
                let substr = str.substring(i, j);
                set.add(substr);
            }
        }
    }
    let res = [...set];
    return res;
}

// console.log(combinations('dog'));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const orderedString = function (str) {
    let arr = str.split("");
    //sorting alphabets doesn't need a callback function
    //It sorts by character code points
    return arr.sort().join('');
}

// console.log(orderedString('webmaster'));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

const captilize = function (str) {
    let arr = str.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        //Replace method will return a new string
        res.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()));
    }
    return res.join(' ');
}

// console.log(captilize('the quick brown fox'));
// const string = 'cat';
// const newString = string.replace(string[0], 'x');
// console.log(newString);


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

//What if there are 2 words with the same length??
const lonestWord = function (str) {
    let arr = str.split(" ");
    let l = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= arr[l].length) {
            l = i;
        }
    }
    return arr[l];
}
// console.log(lonestWord('Web Development Tutorial' ));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

const countVowel = function (str) {
    let count = 0;
    let reg = /[aeiouAEIOU]/;
    for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i])) {
            count++;
        }
    }
    return count;
}
// console.log(countVowel('The quick brown fox'));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = function (num) {
    if (num === 1) return false;
    for (i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(13));
// console.log(isPrime(4));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const  detectType = function(input){
    let types = ['object', 'boolean', 'function', 'number', 'string', 'undefined'];
    if(typeof input){
        for(let i = 0; i<types.length;i++){
            if(typeof input === types[i]){
                return types[i];
            }
        }
        return -1;
    }
}


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
//100
//010
//001

const identityMatrix = function(n){
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            if(j === i){
                console.log('1');
            }else{
                console.log('0');
            }
        }
        console.log('--------');
    }
}

// identityMatrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

//sort the array first then return the second and the last second elements.
const secondElements = function (arr) {
    let newArr = arr.sort((a, b) => a - b);
    let l = newArr.length;
    let res = [];
    if (l < 3) return newArr;
    res.push(newArr[1]);
    res.push(newArr[newArr.length - 2]);
    return res;
}

// console.log(secondElements([3,1]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

const perfectNumber = function (num) {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            if (i * i !== num) {
                sum = sum + i + num / i;
            } else {
                sum += i;
            }
        }
    }
    if (sum === num && num !== 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(perfectNumber(6));
// console.log(perfectNumber(28));
// console.log(perfectNumber(496));
// console.log(perfectNumber(8128));
// console.log(perfectNumber(24));



// 13. Write a JavaScript function to compute the factors of a positive integer. 
const factors = function (int) {
    let res = [];
    for (let i = 1; i * i <= int; i++) {
        if (int % i === 0) {
            if (i * i !== int) {
                res.push(i, int / i);
            } else {
                res.push(i);
            }
        }
    }
    return res.sort((a, b) => a - b);
}

// console.log(factors(3));
// console.log(factors(8));
// console.log(factors(256));


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
const amountToConins = function (amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            let left = amount - coins[0];
            return [coins[0]].concat(amountToConins(left, coins));
        } else {
            coins.shift();
            return amountToConins(amount, coins);
        }
    }
}


// console.log(amountToConins(6,[25, 10, 5, 2, 1]));
// console.log(amountToConins(46,[25, 10, 5, 2, 1]));
// console.log(amountToConins(289,[25, 10, 5, 2, 1]));


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
const powerNum = function (b, n) {
    return Math.pow(parseInt(b), parseInt(n));
}

// console.log(powerNum("8", "2"));
// console.log(powerNum(6, 3));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
const uniqueCharacters = function (str) {
    //use set to discard repeated characters
    let set = new Set();
    let arr = str.split('');
    arr.forEach(e => set.add(e));
    return [...set].join('');

}
// console.log(uniqueCharacters('Iamunique'));
// console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
const letterOccurence = function (str) {
    let newStr = str.replace(/[^a-zA-z0-9]/g, "").toLowerCase(); 
    const obj = {};

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] in obj) {
            obj[newStr[i]] += 1;
        } else {
            obj[newStr[i]] = 1;
        }
    }
    return obj;
}

// console.log(letterOccurence('hello world'));
// const obj = {};
// const arr = 'abc'
// obj[arr[0]] = 'abc';
// obj[arr[1]] = 1;
// console.log(obj);


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
const binarySearch = function(array, target){
    let right = array.length-1;
    let left = 0;
    let middle = Math.floor(array.length-1/2);
    while(left < right){
        if(array[middle] === target){
            return middle;
        } else if(array[middle] > target){
            right = middle -1;
            middle = Math.floor((right + left)/2);
        } else{
            left = middle + 1;
            middle = Math.floor((right + left)/2);
        }
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4,5,7,8,10,11,12,31,41,51,90],12));


// 19. Write a JavaScript function that returns array elements larger than a number. 
function foo(arr, num){
    return arr.filter(e=>e>num);
}
// console.log(foo([3,5,9], 4));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 const idGenerator = function(n){
    //  create an empty string
    //  generate a random character for n times
    //  each time join with the string
    //  return the string
    //  Is it possible to use reg expression to generate random characters?
     let str = '';
     let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     let i = 0;
     while(i<n){    
        str += list[getRandomInt(61)];
        i++;
     }

     function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
     }
     return str;
 }

//  console.log(idGenerator(6));
//  console.log(idGenerator(20));



// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]] //Why is there an array with 3 elements???
const subset = function(arr, n){
    let set = new Set();
    for(let i = 0; i<arr.length;i++){
        for(let j = i+1; j<arr.length; j++){
                let comb = [arr[i]].concat(arr.slice(j, j+n-1));
                if(comb.length === n){
                    set.add(comb);
                }  
        }
    }
    return [...set];
}
// console.log(subset([1,2,3,4],3));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
const countLetter = function(str, letter){
    let count = 0;
    for(let i = 0; i<str.length;i++){
        if(str[i] === letter){
            count++;
        }
    }
    return count;
}
// console.log(countLetter('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

const firstNonRepeat = function(str){
    let obj = {};
    for(let i = 0; i<str.length; i++){
        if(str[i] in obj){
            obj[str[i]] += 1;
        } else{
            obj[str[i]] = 1;
        }
    }
    for(let i = 0; i<str.length; i++){
        if(str[i] in obj && obj[str[i]] === 1){
            return str[i];
        }
    }
    return -1;

}
// console.log(firstNonRepeat('abacddbecertts'));
// console.log(firstNonRepeat('aabbcc'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
const bubbleSort = function(arr){
    let len = arr.length;
    for(let i = 0; i<len; i++){
        //run len-1 times to swap
        for(let j = 0; j<len; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([1,3,2,41,10,20]));
