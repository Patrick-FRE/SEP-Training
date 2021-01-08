function unique_chars(str){
    const map = {};
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i);
        if(map[char]){
            map[char]+=1;
        }else{
            map[char]=1;
        }
    }
    return map;
}

console.log(unique_chars("thequickbrownfoxjumpsoverthelazydog"));