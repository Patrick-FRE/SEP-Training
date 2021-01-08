function isPerfect(n){
    function factors(num){
        const result = [];
        for(let i=0;i<num;i++){
            if(num%i==0){
                result.push(i);
            }
        }
        return result;
    }

    const nfactors = factors(n);
    return nfactors.reduce((total,num)=>total+num,0) === n;
}

console.log(isPerfect(27));