// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

const reverseNum =  function(num){
    let digit, result = 0;
    while(num !==0){
        digit = num % 10;
        num = parseInt(num/10);
        result = result * 10 + digit;

    }
    return result;
}

// console.log(reverseNum(12345));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const checkPalidrome = function(str){
    let p = str.replace(/[^a-zA-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = p.length-1;
    while(left<right){
        if(p[left] !== p[right]){
            return false;
        } else{
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


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const orderedString = function(str){
    let arr = str.split("");
    //sorting alphabets doesn't need a callback function
    //It sorts by character code points
    return arr.sort().join('');
}

// console.log(orderedString('webmaster'));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

const captilize = function(str){
    let arr = str.split(' ');
    let res = [];
    for(let i = 0; i<arr.length; i++){
        //Replace method will return a new string
        res.push(arr[i].replace(arr[i][0],arr[i][0].toUpperCase()));
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
const lonestWord = function(str){
    let arr = str.split(" ");
    let l = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length >= arr[l].length){
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

const countVowel = function(str){
    let count = 0;
    let reg = /[aeiouAEIOU]/;
    for(let i = 0; i<str.length;i++){
        if(reg.test(str[i])){
            count++;
        }
    }
    return count;
}
// console.log(countVowel('The quick brown fox'));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = function(num){
    if(num === 1) return false;
    for(i=2; i<num; i++){
        if(num% i === 0) return false;
    }
    return true;
}

// console.log(isPrime(13));
// console.log(isPrime(4));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
//Don't understand the question.

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

//sort the array first then return the second and the last second elements.
const secondElements = function(arr){
    let newArr = arr.sort((a,b)=>a-b);
    let l = newArr.length;
    let res = [];
    if(l<3) return newArr;
    res.push(newArr[1]);
    res.push(newArr[newArr.length-2]);
    return res;
}

// console.log(secondElements([3,1]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

const perfectNumber = function(num){
    let sum = 1;
    for(let i =2; i*i<=num;i++){
        if(num%i === 0){
            if(i*i !== num){
                sum = sum + i + num/i;
            } else{
                sum += i;
            }
        }
    }
    if(sum === num && num !== 1){
        return true;
    } else{
        return false;
    }
}

// console.log(perfectNumber(6));
// console.log(perfectNumber(28));
// console.log(perfectNumber(496));
// console.log(perfectNumber(8128));
// console.log(perfectNumber(24));



// 13. Write a JavaScript function to compute the factors of a positive integer. 

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// 19. Write a JavaScript function that returns array elements larger than a number. 

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
