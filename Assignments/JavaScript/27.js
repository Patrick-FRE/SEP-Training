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