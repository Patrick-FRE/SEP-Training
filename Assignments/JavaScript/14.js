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