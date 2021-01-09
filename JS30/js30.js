// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

// const { fn } = require("./sampleUtils")

// var x = '32243'
// console.log(x.split('').reverse().join(''))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// var x = 'madam'
// console.log(x === x.split('').reverse().join(''))

/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
 */
//  | Map | Reduce
// x = 'dog'
// arr = x.split('')

// var res = []
// for (let i = 0; i < x.length; i++) {
//     let queue = []
//     queue.push(...arr.slice(i))
//     // console.log(queue)

//     for (let j = 0; j < queue.length; j++) {

//         let ele = ''
//         ele = queue.slice(0, j+1).join('')
//         console.log('ele: '+ ele)
//         if (!res.includes(ele))
//             res.push(ele)

//     }

// }
// console.log('@res: ' + res);


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.

 */


// var str = 'bcvasdf'
// strarr = str.split('')
// function sortt(a, b) {
//     if (a > b) { return 1 }
//     if (a < b) { return -1 }
//     else { return 0 }
// }

// var sortedstr = strarr.sort(/* function (a, b) {
//     if (a > b) { return 1 }
//     if (a < b) { return -1 }
//     else return 0
// } */
// sortt

// ).join('')
// console.log(sortedstr)

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
 */


// var x = 'the quick brown fox'

// var xarr = x.split(' ')
// for(let i = 0; i < xarr.length ; i++){
//     // console.log(xarr[i][0].toUpperCase())
//     xarr[i] = xarr[i][0].toUpperCase()+xarr[i].slice(1)

// }

// var done = xarr.join(' ')
// console.log( done )


/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial' 
Expected Output : 'Development' */

// var x = 'Web Development Tutorial' 
// var xarr = x.split(' ')
// maxlength = 0
// for(var i = 0; i < xarr.length ; i++){
//     if(maxlength< xarr[i].length){
//         maxlength = xarr[i].length
//     }
// }
// console.log(maxlength)


/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string : 'The quick brown fox' 
Expected Output : 5
 */

/* arr.includes | string.includes | regex*/

//  var x = 'The quick brown fox' 
//  console.log(x.match(/[a,e,i,o,u]/g).length)


/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */


//  %

/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

//  typeof(arg)

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

 */

//  fn(n){ new Array(n)} for(){arr[i]=new Array(n)}


/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array : [1,2,3,4,5]
Expected Output : 2,4 
 */
// needle

// reduce

// var x = [1, 10, 7, 2, 4, 9]
// var needle = 8

// console.log(x.sort((a,b)=>{return Math.abs(a-needle) - Math.abs(b-needle) }))


/* 12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
 */

// num/2 % == 0 ; temp += 


/* 13. Write a JavaScript function to compute the factors of a positive integer.  */

// var b = function(n){
//     let temp = [];
//     for(let i = 1; i<= n/2 ; i++){
//         if(n%i==0){
//             temp.push( i )
//         }
//     }
//     console.log(temp)
// }

// console.log(b(12))


/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1
 */




/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.  */




/* 16. Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/


// objmap | obj.key => reduce (acc, cur)=>{acc.push(cur)}, ''


/* 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.  */

// objmap


/* 18. Write a function for searching JavaScript arrays with a binary search. 
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/

/* 19. Write a JavaScript function that returns array elements larger than a number.  */


/* 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 */

//  var list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// ranindex = Math.floor(Math.random()*(list.length-1))
//  ranchar = list[ranindex]
//  console.log(ranchar)


/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array : [1, 2, 3] and subset length is 2 
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
 */

/* blackTrack dfs 'abc' */

// str = 'abc'
// arrstr = str.split('')
// result = []
// let track = []


// function backtrack(track,arrstr) {


//     if (track.length === arrstr.length) {
//         if (!result.includes(track.join(''))) {
//             let temp = track.join('')
//             track = []
//             result.push(temp)
//             return
//         }
//     }

//     // console.log('before forloop + '+ arrstr)
//     for (let i = 0; i < arrstr.length; i++) {
//         if(track.includes(arrstr[i])){
//             continue;
//         }
//         track.push(arrstr[i])
//         console.log('track now: ' + track)
//         console.log('curr now: ' + arrstr)
//         backtrack(track, arrstr)
//         track.pop()
//     }
// }

// backtrack(track, arrstr);
// console.log(result)




/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments : 'microsoft.com', 'o' 
Expected output : 3 
 */



/* 23. Write a JavaScript function to find the first not repeated character. 
Sample arguments : 'abacddbec' 
*/
// hold 1 , compare rest
// var x = 'abaczddbeec'

// var char 
// for (let i = 0; i < x.length - 1; i++) {
//     char = x.charAt(i);
//     // console.log('im her, char now: '+char + x.indexOf(char, i + 1))
//     console.log((x.indexOf(char) == i )+ ' and '+ (x.indexOf(char, x + 1) == -1))
//     if (x.indexOf(char) == i && x.indexOf(char, i + 1) == -1) {

//         console.log('char is :' + char);
//         break
//     }
// }


/* 24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 */


/* 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/

// objmap


/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.  */

// objmap [{}] [size, size,] return longest


/* 27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
 */




/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.  */
// var jiblish = 'abcafd'

// var cb = function (jib, ...args) {
//     console.log('I am callback : ' + args)
// }

// var a = (cb, jiblish) => {
//     console.log('in fn a' + jiblish)
//     return cb(jiblish, ...jiblish)
// }
// a(cb, jiblish)


/* 29. Write a JavaScript function to get the function name.  */

// function fnname(){
//     console.log('im fnname')
//     console.log(arguments.callee.name)
// }
// fnname();
