function longest_palindrome(str){
    let max_len=1;
    let result = str.charAt(0);
    for(let i=0;i<str.length;i++){
        const substr = str.substring(i);
        for(let j=substr.length;j>0;j--){
            if(palindrome(substr.substring(0,j))){
                if(j>max_len){
                    max_len = j;
                    result = substr.substring(0,j);
                }
            }
        }
    }
    return result;
}

function palindrome(a){
    return a === a.split("").reverse().join(""); 
}

console.log(longest_palindrome("asjhdakjsdh12345654321asjdoa"));