function first_non_repeat(str){
    const map = {};
    map[str.charAt(0)] = 0;
    for(let i=1;i<str.length;i++){
        const char = str.charAt(i);
        if(map[char]||map[char]===0){
            map[char] = "invalid";
        }else{
            map[char] = i;
        }
    }
    let target = null;
    let min = str.length;
    for(const char of Object.keys(map)){
        if(map[char]!=="invalid" && map[char]<min){
            min = map[char];
            target = char;
        }
    }
    return target;
}

console.log(first_non_repeat('abacddbec'))