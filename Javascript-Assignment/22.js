function occurrences(str,target){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===target){
            count++;
        }
    }
    return count;
}

console.log(occurrences('microsoft.com', 'o' ));