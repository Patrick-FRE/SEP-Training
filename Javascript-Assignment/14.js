function amountTocoins(target,coins){
    const result = [];
    while(target!=0){
        if(coins[0]>target){
            coins.shift();
        }else{
            result.push(coins[0]);
            target-=coins[0];
        }
    }
    return result;
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));