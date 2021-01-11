// 1. Write a JavaScript function that reverse a number. Example x = 32243;Expected Output : 34223
function reverseNum(num){
    return num.toString().split("").reverse().join("");
}

//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
//3. Write a JavaScript function that generates all combinations of a string
function combinator (s) {
    allStrings = [];
    for(i=0;i<s.length;i++) {
        for(j=i+1;j<s.length+1;j++) {
            allStrings.push(s.slice(i, j));
        }
    }
    return allStrings;
 }

 //4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster'
 function alphabet_order(str){
        return str.split('').sort().join('');
}

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case
function uppercaseFirstChar(str){
  var chars = str.split(' ');
  var arr = [];
  for(var i = 0; i < chars.length; i++){
      arr.push(chars[i].charAt(0).toUpperCase()+chars[i].slice(1));
  }
  return arr.join(' ');
}
//6.Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = null;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i]; 
       }
    }
    return longestWord; 
  }
  //7.Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string.
  const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

  //8.Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
  function primeOrNot(n){
  if (n===1){
    return false;
   }else if(n === 2){
    return true;
  } else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

//9.Write a JavaScript function which accepts an argument and returns the type
function checkDataType(value){
var dataTypes = [Function, RegExp, Number, String, Boolean, Object] 
if (typeof value === "object" || typeof value === "function") {
     for (i = 0; i < dataTypes.length; i++) {
            if (value instanceof dataTypes[i]){
                return dataTypes[i];
            }
      }
    }
    return typeof value;
}

//10.Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(n) {
    for (let i=0; i < n; i++){
      for (let j=0; j < n; j++){
           if (i === j){
             console.log(' 1 ');
           }      
           else {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }

   //11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. 
        function SecondGreatestLowest(arr){
            arr.sort((a,b)=>{
                return a-b;
        });
            let fir = [arr[0]], res = [];
                for(var j=1; j < arr.length; j++){
                    if(arr[j-1] !== arr[j]){
                        fir.push(arr[j]);
            }
        }
                    res.push(fir[1],fir[fir.length-2]);
                    return res.join(',');
        }

    //12.Write a JavaScript function which says whether a number is perfect. 
    function is_perfect(number){
            let temp = 0;
        for(let i=1;i<=number/2;i++){
            if(number%i === 0){
            temp += i;
          }
     }
     if(temp === number && temp !== 0){
       console.log("It is a perfect number.");
        } 
     else{
       console.log("It is not a perfect number.");
    }   
 } 
  //13.Write a JavaScript function to compute the factors of a positive integer.
  function factors(n){
        let num_factors = [], i;
        for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0){
        num_factors.push(i);
        if (n / i !== i)
            num_factors.push(n / i);
        }
        num_factors.sort(function(x, y){
            return x - y;});  // numeric sort
            return num_factors;
    }

    //14.Write a JavaScript function to convert an amount to coins
    function amountTocoins(amount, coins) {
            if (amount === 0) {
                return [];
            } 
            else{
                if (amount >= coins[0]) {
                    left = (amount - coins[0]);
                    return [coins[0]].concat( amountTocoins(left, coins) );
                    } 
                else{
                    coins.shift();
                    return amountTocoins(amount, coins);
                }
                }}
    //15.Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases
    function exp(b,n){
        return Math.pow(b,n);
}   

    //16.Write a JavaScript function to extract unique characters from a string.
    function uniqueChar(str){
            let res="";
            for (let i=0;i < str.length;i++){
            if(res.indexOf(str.charAt(i))==-1){
            res += str[i];  
            }
            }
            return res;  
}  
//17.Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.
        function count(string) {
            let string1 = string.split("").sort().join("");
            let counter = 1;
            for (let i = 0; i < string.length; i++) {
            if (string1[i] == string1[i + 1]) {
                counter++;
            } else {
                console.log(string1[i] + " " + counter);
                counter = 1;
            }
            }
        }
//18.Write a function for searching JavaScript arrays with a binary search
        function binarySearch(sortedArray, key){
            let start = 0;
            let end = sortedArray.length - 1;
            while (start <= end) {
                let middle = Math.floor((start + end) / 2);

                if (sortedArray[middle] === key) {
                    return middle;
                } else if (sortedArray[middle] < key) {
                    start = middle + 1;
                } else {
                    end = middle - 1;
                }
            }
            return -1;
        }
//19.Write a JavaScript function that returns array elements larger than a number
        function isLarger(value) {
            return function(element, index, array) {
            return (element >= value);
            }
        }
        let filtered = [120, 45, 668, 2, 78].filter(isLarger(43));

//20.
            function stringGen(yourNumber){
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            
                for (let i = 0; i < yourNumber; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            
            return text;
            }

//21.Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array.
        function combinations(array) {
            return new Array(1 << array.length).fill().map(
            (e1, i) => array.filter((e2, j) => i & 1 << j));
        }
//22.Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string.
            function char_count(str, letter)   {  
            let letter_Count = 0;  
            for (let position = 0; position < str.length; position++){  
                if (str.charAt(position) == letter)   {  
                letter_Count += 1;  
                }  
            }  
                    return letter_Count;  
            }

//23.Write a JavaScript function to find the first not repeated character
            function firstNonRepeatedCharacter(string) {
                for (var i = 0; i < string.length; i++) {
                var c = string.charAt(i);
                if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
                    return c;
                }
                }
                return null;
            }
//24. Bubble sort 
            let bubbleSort = (inputArr) => {
                let len = inputArr.length;
                for (let i = 0; i < len; i++) {
                    for (let j = 0; j < len; j++) {
                        if (inputArr[j] > inputArr[j + 1]) {
                            let tmp = inputArr[j];
                            inputArr[j] = inputArr[j + 1];
                            inputArr[j + 1] = tmp;
                        }
                    }
                }
                return inputArr;
            };
//25.Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. 
                    let findLCName = list =>{
                    return list.reduce((lname, country)=>{
                        return lname.length > country.length ? lname : country;}, "");
                    }
//26.Write a JavaScript function to find longest substring in a given a string without repeatingcharacters
            function pickLongestSubstring(name) {
                let tested = "";
                let longest = "";

                for (let i = 0; i < name.length; i++) {
                if (tested.length == 0 || tested.charAt(tested.length - 1) != name.charAt(i)) {
                    tested += name.charAt(i);
                }
                else {
                    if (tested.length > longest.length) {
                    longest = tested;
                    tested = "";
                    }
                }
                }

                if (tested.length > longest.length) {
                longest = tested;
                }

                return longest;
            }
//27.Write a JavaScript function that returns the longest palindrome in a given string.
            let longestPalindrome = function(string) {
                let length = string.length;
                let result = "";
                let centeredPalindrome = function(left, right) {
                while (left >= 0 && right < length && string[left] === string[right]) {
                    left--;
                    right++;
                }
                return string.slice(left + 1, right);
                };
                for (let i = 0; i < length - 1; i++) {
                let oddPal = centeredPalindrome(i, i + 1);
                let evenPal = centeredPalindrome(i, i);
                if (oddPal.length > 1)
                    console.log("oddPal: " + oddPal);
                if (evenPal.length > 1)
                    console.log("evenPal: " + evenPal);
                if (oddPal.length > result.length)
                    result = oddPal;
                if (evenPal.length > result.length)
                    result = evenPal;
                }
                return "the palindrome is: " + result + " and its length is: " + result.length;
            };
//28.Pass Js function
                function foo(fn) {
                    alert(fn);
                }
                function bar(func) {
                    func("Hello World!");
                }
                bar(foo);//
//29.Write a JavaScript function to get the function name. 
            function Person() {
                console.log(this.constructor.name); //Person
            }
            
            var p = new Person();
            console.log(p.constructor.name); //Person