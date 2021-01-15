// 1
const reverseNum = (num) => {
  
    let res = 0;
    const sign = Math.sign(num);
    num = Math.abs(num);
  
    while (num !== 0) {
      res = res * 10 + Math.floor(num % 10);
      num = Math.floor(num / 10);
    }
  
    res *= sign;
  
    console.log(res);
    return res;
  };
  
  reverseNum(-32243);
  
  // 2
  const isPalindrome = (s) => {
    let l = 0;
    let r = s.length - 1;
  
    while (l <= r) {
      if (s[l] !== s[r]) {
        console.log(false);
        return false;
      }
  
      l++;
      r--;
    }
  
    console.log(true);
    return true;
  };
  
  isPalindrome("word");
  isPalindrome("wow");
  
  // 3
  const allCombo = (s) => {
    let res = [];
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let subString = s.substring(i, j);
        res.push(subString);
      }
    }
  
    console.log(res);
    return res;
  };
  
  allCombo("dog");
  
  // 4
  const orderString = (s) => {
    let res = s.split("").sort().join("");
  
    console.log(res);
    return res;
  };
  
  orderString("webmaster");
  
  // 5
  const firstLetterUpper = (s) => {
    let res = s
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  
    console.log(res);
    return res;
  };
  
  firstLetterUpper("the quick brown fox");
  
  // 6
  const longestWord = (s) => {
    let arr = s.split(" ");
  
    let max = arr[0].length;
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const len = arr[i].length;
      if (len > max) {
        max = len;
        res = arr[i];
      }
    }
  
    console.log(res);
    return res;
  };
  
  longestWord("Web Development Tutorial");
  
  // 7
  const countVowels = (s) => {
    let count = 0;
    for (const char of s) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
  
    console.log(count);
    return count;
  };
  
  countVowels("The quick brown fox");
  
  // 8
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log(false);
        return false;
      }
    }
  
    console.log(num > 1);
    return num > 1;
  };
  
  isPrime(5);
  isPrime(8);
  
  // 9
  const checkType = (params) => {
    console.log(typeof params);
    return typeof params;
  };
  
  checkType(5);
  checkType("5");
  checkType(false);
  checkType({ a: 3 });
  checkType(() => {});
  
  // 10
  
  // 11
  const findTwoNumbers = (nums) => {
    const len = nums.length;
    nums.sort((a, b) => a - b);
  
    console.log(nums[1], nums[len - 2]);
    return nums[1], nums[len - 2];
  };
  
  findTwoNumbers([1, 4, 3, 2, 5]);

  //12
  isPerfect = num => {
    let i=1, val = 0;
    while(i<num){
        if(num%i == 0)  val += i;
        i++;
    }

    if(val == num)  return true;
    else    return false;
};

console.log(isPerfect(28));

//13
computeFactors = num => {
    let i=1;
    let factors = [];
    while(i<num){
        if(num%i == 0)  factors.push(i);
        i++;
    }

    return factors;
};

console.log(computeFactors(100));

//14

amountToCoins = (amount, coins) => {
    coins = coins.sort(function(a, b){ return b-a;});
    let coins_req = [];
    while(amount>0){
        for(let i=0; i<coins.length; i++){
            if(amount >0 && (amount - coins[i]) >= 0){
                amount -= coins[i];
                coins_req.push(coins[i]);

                break;
            }
        }
    }

    return coins_req;
};

console.log(amountToCoins(46, [1, 25, 5, 10, 2]));

//15

valueOfbn = (b, n) => b**n;

console.log(valueOfbn(2, 3));

//16
uniqueCharacters = txt => new Set(txt.split(''));
console.log(uniqueCharacters('thepurposeofthiscodeistochecktheuniquenessofthestring'));


//17
/*  JavaScript function to  get the number of occurrences of each letter in specified string
 */
numOfOccurrences = str => {
    let map = new Map();
    for(let i=0; i<str.length; i++){
        if(!map.has(str.charAt(i)))
            map.set(str.charAt(i), 1);
        else
            map.set(str.charAt(i), map.get(str.charAt(i))+1);
    }

    return map;
};

console.log(numOfOccurrences('aaafffssbddbttccc'));

//18
binarySearch = (arr, ele, left, right) =>{
    if(left>right)  return false;
    let mid = Math.floor((left+right)/2);
    if(arr[mid] == ele) return true;
    else if(arr[mid] > ele) return binarySearch(arr, ele, left, mid-1);
    else    return binarySearch(arr, ele, mid+1, right);
};

let arr = [34, 13, 65, 2, 4,6 , 1];
arr.sort((a, b) => a-b);

console.log(binarySearch(arr, 34, 0, arr.length-1));

//19
largerElements = (arr, ele) => {
    let larger_arr = [];
    arr.sort();
    for(let i=0; i<arr.length; i++)
        if(arr[i]>ele)  larger_arr.push(arr[i]);

    return larger_arr;
};

console.log(largerElements([23, 6, 3, 5, 78, 26, 99], 20));

//20
generateRandomCharacters = len =>{
    let str = '';
    // Ascii(48-57) -> 0-9, Ascii(65-90) -> A-Z, Ascii(97-122) -> a-z
    for(let i=0; i<len; i++){
        let random_values = [
            Math.floor(Math.random()*(57-48)+48),
            Math.floor(Math.random()*(90-65) + 65),
            Math.floor(Math.random()*(122-97) + 97)
        ];
        str += String.fromCharCode(
            random_values[Math.floor(Math.random()*random_values.length)]
            );
    }

    return str;
};

console.log(generateRandomCharacters(55));

//21
possibleSubsets = (arr, sub_str_len) =>{
    let len = arr.length;
    let sub_strings = [];
    
    for(let start =0; start<len; start++)
        for(let j= start+1; j<len; j++){
            let sub = [];
            if(j+sub_str_len-1 <= len){
                sub.push(arr[start]);
                for(let end = j; end<j+sub_str_len-1; end++)
                    sub.push(arr[end]);
                
                sub_strings.push(sub);
            }
        }
    sub_strings.push(arr);
    
    return sub_strings;
};

console.log(possibleSubsets([1, 2, 3], 2));

//22
noOfOccurrences = (str, letter) =>{
    let count = 0;
    for(let i=0; i<str.length; i++)
        if(str[i] == letter)    count++;

    return count;
};

console.log(noOfOccurrences('this is a check string', 'z'));

//23
firstNotRepeatedCharacter = str =>{
    let map = new Map();
    for(let i=0; i<str.length; i++){
        if(!map.has(str[i]))    map.set(str[i], 1);
        else    map.set(str[i], map.get(str[i])+1);
    }

    for(let [key, value] of map)
        if(value == 1) return key;

    return 'none';
};

console.log(firstNotRepeatedCharacter('abaecddbecf'));
//24

bubbleSort = arr => {
    let len = arr.length;
    for(let i = 0; i<len; i++)
        for(let j=0; j<len; j++)
            if(arr[i]>arr[j])   [arr[i], arr[j]] = [arr[j], arr[i]];
 
    return arr;
};

console.log(bubbleSort([54, 1, 46, 23, 76, 32]));
//25
largestCountryName = country_name =>{
    let size = 0, index = 0;

    size = country_name[0].length;
    for(let i=1; i<country_name.length; i++){
        if(size<country_name[i].length){
            size = country_name[i].length;
            index = i;
        }
    }

    return country_name[index];
};

console.log(largestCountryName([
    "Norway", 
    "Russia", 
    "Asia", 
    "United Kingdom"
]));

//26
longestSubString = str => {
    let len = str.length;
    
    let temp_set = new Set();
    let temp_str = '';
    for(let i=0; i<len; i++){
        if(!temp_set.has(str[i]))   temp_set.add(str[i]);
        else    break;
    }
    let temp_set_len = temp_set.size;

    let set = new Set();
    for(let i=1; i<len; i++){
        set.forEach(val => set.delete(val));

        for(let j=i; j<len; j++){
            if(!set.has(str[j]))    set.add(str[j]);
            else    break;
        }
        if(temp_set_len < set.size){
            temp_set.forEach((val) => temp_set.delete(val));
            set.forEach((val) => temp_set.add(val));
            temp_set_len = set.size;
        }
    }

    temp_set.forEach(val => temp_str += val);
    
    return temp_str;
};

console.log(longestSubString('asdhflakjdshf'));
//27

function isPalindrome(str){
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

longestPalindrome = str => {
    let valid_palindromes = new Set();
    for(let i=0; i<str.length; i++){
        let start = i, sub_str = '';
        let end = str.length;
        
        // Moving the ending point and the starting point is fixed
        for(let j=end; j>start+2; j--){
            sub_str = str.substring(start, j);
            if(!valid_palindromes.has(sub_str) && isPalindrome(sub_str)) valid_palindromes.add(sub_str);
        }

        // Moving the starting point and the end point is fixed
        for(let j=start; j<end-2; j++){
            sub_str = str.substring(j, end);
            if(!valid_palindromes.has(sub_str) && isPalindrome(sub_str)) valid_palindromes.add(sub_str);
        }

    }

    return valid_palindromes;
};

let txt = 'abracadabra';
let result = longestPalindrome(txt);

const iter = result[Symbol.iterator]();
let longest = iter.next().value;
for(let long of result){
    if(longest.length < long.length)    longest = long;
}

console.log('List of palindromes: ', result, '\nThe lengthiest palindrome is: ', longest);

//28
callingFunc = (callback) =>{
    console.log('calling another function');
    callback();
};

function callbackFunc(){
    console.log('This function is called inside a function');
}

callingFunc(callbackFunc);

//29
const checkFuncNameExample = function() {};

console.log(checkFuncNameExample.name);
