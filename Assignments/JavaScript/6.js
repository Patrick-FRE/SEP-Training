longestWord = (inp_str) =>{
    return inp_str.split(' ').reduce((a, b) => {
        if(a.length > b.length) return a;
        else return b;
    }, '')};

console.log(longestWord('Software Development Engineering'));