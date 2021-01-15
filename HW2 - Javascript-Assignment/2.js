function palindrome(a){
    return a === a.split("").reverse().join(""); 
}

console.log(palindrome("abcba"));