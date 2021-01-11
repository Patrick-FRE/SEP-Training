isPrime = num => {
    let i = 2, count =0;
    while(i<=num/3){
        if(num%i == 0)  count++;
        i++;
    }
    if(count>0) return false;
    else return true;
};

console.log(isPrime(1699));