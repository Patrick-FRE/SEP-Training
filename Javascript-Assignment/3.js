function combinations(str){

    const result = [];

    function combine(prefix,start){
        for(let i = start; i < str.length; i++){
            result.push(prefix+str.charAt(i));
            if (i < str.length)
                combine(prefix+str.charAt(i), i+1);
        }
    }

    combine("",0);
    return result;
}

console.log(combinations("dog"));