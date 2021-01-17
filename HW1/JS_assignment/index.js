//Q1.
//Fatest method
function flipInt_1(n){
    var digit, result = 0

    while( n ){
        digit = n % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n/10|0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
    }  
  
    return result
}

//Method2
function flipInt_2(num){
    return num.toString().split("").reverse().join("");
}

// console.log(flipInt_1(123));
// console.log(flipInt_2(123));


//**************************************************************** */
//Q2
//**************************************************************** */
function isPalind(s){
    s = s.trim();
    const n = s.length;
    if(n === 0){return true;}
    for(let i=0; i<Math.ceil(s.length/2); i++){
        if(s[i] !== s[n-i-1]){return false; break;}
    }
    return true;
}
console.log(isPalind(''));
console.log(isPalind('amdma'));
console.log(isPalind(' amdma  '));