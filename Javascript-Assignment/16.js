function unique_chars(str){
    const map = {};
    for(let i=0;i<str.length;i++){
        map[str.charAt(i)] = 1;
    }
    return Object.keys(map).join("");
}

console.log(unique_chars("thequickbrownfoxjumpsoverthelazydog"));