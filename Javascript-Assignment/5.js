function toUppers(str){
    const arr = str.split(" ");
    return arr.map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(toUppers('the quick brown fox' ));