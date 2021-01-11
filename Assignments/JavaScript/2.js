function isPalindrome(input_str){
    let i=0, j= input_str.length-1;
    input_str = input_str.toLowerCase();
    while(i<j){
        if(input_str.charAt(i) !== input_str.charAt(j)) return false;
        i++;
        j--;
    }

    return true;
}

console.log(isPalindrome('Madam'));