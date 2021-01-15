function findLongest(str){
    const words = str.split(" ");
    let result = words[0];
    for(const word of words){
        if(word.length > result.length){
            result = word;
        }
    }
    return result;
}

console.log(findLongest('Web Development Tutorial'));