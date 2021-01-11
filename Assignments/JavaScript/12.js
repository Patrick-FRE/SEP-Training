isPerfect = num => {
    let i=1, val = 0;
    while(i<num){
        if(num%i == 0)  val += i;
        i++;
    }

    if(val == num)  return true;
    else    return false;
};

console.log(isPerfect(28));