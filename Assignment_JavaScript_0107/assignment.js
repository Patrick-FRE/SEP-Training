
    // 1. Write a JavaScript function that reverse a number. 
    // Example x = 32243;
    // Expected Output : 34223 
    //---------------------------------------------------------
    // function reverse(x) {
    //     x = x.toString().split('').reverse().join('');

    //     return x;
    // }
    // var x = 32243;
    // console.log(reverse(x));

    // 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
    // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
    //---------------------------------------------------------
    // function palindrome(str){
    //     if (str === str.split('').reverse().join('')){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // console.log(palindrome('aba'));

    // 3. Write a JavaScript function that generates all combinations of a string. 
    // Example string : 'dog' 
    // Expected Output : d,do,dog,o,og,g 
    //---------------------------------------------------------
//     function combString(str){
//         var lenStr = str.length;
//         var result = [];
//         var indexCurrent = 0;
   
//         while(indexCurrent < lenStr){
//             var char = str.charAt(indexCurrent);
//             var x;
//             var arrTemp = [char];
   
//             for(x in result) {
//                 arrTemp.push(""+result[x]+char);
//             }
//             result = result.concat(arrTemp);
   
//             indexCurrent++;
//         }
   
//         return result;
//    }
   
//     console.log(combString('dog'));

    // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
    // Example string : 'webmaster' 
    // Expected Output : 'abeemrstw'
    // Assume punctuation and numbers symbols are not included in the passed string.
    // function alphabet_order(str){
    //     return str.split('').sort().join('');
    // }
    // console.log(alphabet_order("webmaster"));
    // ---------------------------------------------------------

    // 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
    // Example string : 'the quick brown fox' 
    // Expected Output : 'The Quick Brown Fox '

    // function convFirstUpper(str){
    //     let arr = str.split(' ');
    //     let newArr = [];

    //     for(let i = 0; i < arr.length; i++){
    //         newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    //     }
    //     return newArr.join(' ');
    // }

    // console.log(convFirstUpper('the quick brown fox'));


    // ---------------------------------------------------------
    // 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
    // Example string : 'Web Development Tutorial' 
    // Expected Output : 'Development'

    // function longestWord(string) {
    //     var str = string.split(" ");
    //     var longest = 0;
    //     var word = null;
    //     for (var i = 0; i < str.length - 1; i++) {
    //         if (longest < str[i].length) {
    //             longest = str[i].length;
    //             word = str[i];
    //         }
    //     }
    //     return word;
    // }

    // console.log(longestWord('Web Development Tutorial'));
    // ---------------------------------------------------------

    // 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
    // Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
    // Example string : 'The quick brown fox' 
    // Expected Output : 5
    
    // function vowels(str) {
    //     let vowel_list = 'aeiouAEIOU';
    //     let vcount = 0;        
    //     for(let i = 0; i < str.length; i++){           
    //         if(vowel_list.indexOf(str[i]) != -1){
    //             vcount += 1;
    //         }
    //     }
    //     return vcount;
    // }

    // console.log(vowels('The quick brown fox'));
    // ---------------------------------------------------------



    // 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
    // Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.    
    // prime number: 小於100的正整數, 只需要檢查它是不是2,3,5,7的倍數就可以判斷它是不是質數

    // function isPrimeNumber(n){
    //     if(n === 1){
    //         return false;
    //     } else if(n === 2){
    //         return true;
    //     } else {
    //         for(let i = 2; i < n; i++){
    //             if(n % i === 0){
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    // }
    // console.log(isPrimeNumber(7));
    // ---------------------------------------------------------
    
    // 9. Write a JavaScript function which accepts an argument and returns the type. 
    // Note : There are six possible values that typeof returns: 
    // object, boolean, function, number, string, and undefined.
    // function dataType(value){
    //     // RegExp 是正則表達式
    //     var dtypes = [Function, RegExp, Number, String, Boolean, Object], len;            
    //     if (typeof value === "object" || typeof value === "function"){
    //         for (let i = 0; i < dtypes.length; i++){
    //             if (value instanceof dtypes[i]){
    //                 return dtypes[i];
    //             }
    //         }
    //     }
    //     return typeof value;
    // }

    // console.log(dataType(function(){}));
    // console.log(dataType('w3resource'));
    // console.log(dataType(false));
    
    // ---------------------------------------------------------


    // 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
    // function matrix(n) {
    //     let res = '';
    //     for (let i = 0; i < n; i++){
    //         res += '0';                      
    //     }
    //     for(let j = 0; j < n; j++){
    //         console.log(res);
    //     }
    // }
    // matrix(5);
    // ---------------------------------------------------------

    // 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
    // Sample array : [1,2,3,4,5]
    // Expected Output : 2,4 

    // function secLowHigh(arr){
    //     if(arr === null || arr.length <= 0){
    //         return [];
    //     }
    //     arr.sort(function(a, b){
    //         return a - b;
    //     });        
    //     if(arr.length > 2){
    //         return [arr[1], arr[arr.length - 2]];
    //     } else {
    //         return  arr;
    //     }
    // }

    // console.log(secLowHigh([6,1,2,3,4,5]));

    // 12. Write a JavaScript function which says whether a number is perfect. 
    // According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
    // Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

    // function is_perfect(number) {
    //     var temp = 0;
    //     for(var i=1;i<=number/2;i++){
    //             if(number%i === 0)
    //             {
    //                 temp += i;
    //             }
    //     }
    
    //     if(temp === number && temp !== 0){
    //         console.log("It is a perfect number.");
    //     } else {
    //         console.log("It is not a perfect number.");
    //     }
    // } 
    // is_perfect(28);


    /*


    
    13. Write a JavaScript function to compute the factors of a positive integer. 
    function factors(n)
        {
        var num_factors = [], i;
        
        for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0)
        {
        num_factors.push(i);
        if (n / i !== i)
            num_factors.push(n / i);
        }
        num_factors.sort(function(x, y)
        {
            return x - y;});  // numeric sort
            return num_factors;
            }
        console.log(factors(15));  // [1,3,5,15] 
        console.log(factors(16));  // [1,2,4,8,16] 
        console.log(factors(17));  // [1,17]


    14. Write a JavaScript function to convert an amount to coins. 
    Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
    Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
    Output : 25, 10, 10, 1

    function amountTocoins(amount, coins) 
    {
    if (amount === 0) 
    {
        return [];
    } 
    else
    {
        if (amount >= coins[0]) 
        {
            left = (amount - coins[0]);
            return [coins[0]].concat( amountTocoins(left, coins) );
            } 
        else
            {
            coins.shift();
            return amountTocoins(amount, coins);
            }
        }
    } 
    console.log(amountTocoins(46, [25, 10, 5, 2,1]));



    15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

    function exp(b,n)
    {
            var ans = 1;
            for (var i =1; i <= n; i++)
            {
                    ans = b * ans;        
            }
            return ans;
    }
    console.log(exp(2, 3));



    16. Write a JavaScript function to extract unique characters from a string. 
    Example string : "thequickbrownfoxjumpsoverthelazydog"
    Expected Output : "thequickbrownfxjmpsvlazydg"

    function unique_char(str1)
    {
    var str=str1;
    var uniql="";
    for (var x=0;x < str.length;x++)
    {

    if(uniql.indexOf(str.charAt(x))==-1)
    {
    uniql += str[x];  
    
    }
    }
    return uniql;  
    }  
    console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));



    17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
    function Char_Counts(str1) {
        var uchars = {};
        str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
        return uchars;
    }
    console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));


    18. Write a function for searching JavaScript arrays with a binary search. 
    Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
    function array_binarySearch(narray, delement) {
        var mposition = Math.floor(narray.length / 2);

        if (narray[mposition] === delement){
            return mposition;
        }
        else if (narray.length === 1) 
        {
            return null;
        }
        else if (narray[mposition] < delement) {
            var arr = narray.slice(mposition + 1);
            var res = array_binarySearch(arr, delement);
            if (res === null)
            {
                return null;
            }
            else {
                return mposition + 1 + res;
            }
        }
        else {
            var arr1 = narray.slice(0, mposition);
            return array_binarySearch(arr1, delement);
        }
    }

    var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
    console.log(array_binarySearch(myArray, 6));

    19. Write a JavaScript function that returns array elements larger than a number. 
    function BiggerElements(val)
    {
        return function(evalue, index, array)
        {
        return (evalue >= val);
        };
    }
    var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
    console.log(result);



    20. Write a JavaScript function that generates a string id (specified length) of random characters. 
    Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    function makeid(l)
    {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < l; i++ )
    {  
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
    }
    console.log(makeid(8));



    21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
    Sample array : [1, 2, 3] and subset length is 2 
    Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
    function subset(arra, arra_size)
    {
        var result_set = [], 
            result;
        
    
    for(var x = 0; x < Math.pow(2, arra.length); x++)
    {
        result = [];
        i = arra.length - 1; 
        do
        {
        if( (x & (1 << i)) !== 0)
            {
                result.push(arra[i]);
            }
            }  while(i--);

        if( result.length >= arra_size)
        {
            result_set.push(result);
            }
        }

        return result_set; 
    }

    console.log(subset([1, 2, 3], 2));




    22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
    Sample arguments : 'microsoft.com', 'o' 
    Expected output : 3 

    function char_count(str, letter) 
    {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
        if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
    }

    console.log(char_count('w3resource.com', 'o'));


    23. Write a JavaScript function to find the first not repeated character. 
    Sample arguments : 'abacddbec' 
    Expected output : 'e' 

    function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
    
    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;
    
        for (var y = 0; y < arra1.length; y++) 
        {
        if (arra1[x] === arra1[y]) {
            ctr+= 1;
        }
        }
    
        if (ctr < 2) {
        result = arra1[x];
        break;
        }
    }
    return result;
    }
    console.log(find_FirstNotRepeatedChar('abacddbec'));

    24. Write a JavaScript function to apply Bubble Sort algorithm. 
    Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
    Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
    Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

    function bubble_Sort(a)
        {
            var swapp;
            var n = a.length-1;
            var x=a;
            do {
                swapp = false;
                for (var i=0; i < n; i++)
                {
                    if (x[i] < x[i+1])
                    {
                    var temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swapp = true;
                    }
                }
                n--;
            } while (swapp);
        return x; 
    }

    console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));




    25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
    Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output : "United States of America"

    function Longest_Country_Name(country_name)
    {
        return country_name.reduce(function(lname, country) 
        {
            return lname.length > country.length ? lname : country;
        }, 
        "");
    }
    console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));





    26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

    function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
    str += curr_char; 
    hash[chars[i]] = {index:i};
    }
    else 
    {
    if(longest_string.length <= str.length)
    {
    longest_string = str;
    }
    var prev_dupeIndex = hash[curr_char].index;
    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    hash = {};
    for (var j = prev_dupeIndex + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};
    }
    }
    }
    return longest_string.length > str.length ? longest_string : str;
    }
    console.log(longest_substring_without_repeating_characters("google.com")); 

    console.log(longest_substring_without_repeating_characters("example.com")); 


    27. Write a JavaScript function that returns the longest palindrome in a given string. 
    Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
    In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

    function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
    }

    function longest_palindrome(str1){

    var max_length = 0,
    maxp = '';

    for(var i=0; i < str1.length; i++) 
    {
    var subs = str1.substr(i, str1.length);

    for(var j=subs.length; j>=0; j--) 
    {
    var sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;

    if (is_Palindrome(sub_subs_str))
    {
    if (sub_subs_str.length > max_length) 
    {
    max_length = sub_subs_str.length;
    maxp = sub_subs_str;
    }
    }
    }
    }

    return maxp;
    }
    console.log(longest_palindrome("abracadabra"));

    console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 


    28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

    function addStudent(id, refreshCallback)
    {
        refreshCallback();  
    }

    function refreshStudentList() {
        console.log('Hello');
    }

    addStudent(1, refreshStudentList);



    29. Write a JavaScript function to get the function name. 

    function abc() {
        console.log( arguments.callee.name );
    }

    abc();
    */

    