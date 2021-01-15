function larger(target,arr){
    return arr.filter(x=>x>target);
}

console.log(larger(5,[1,2,4,8,9,4]))