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