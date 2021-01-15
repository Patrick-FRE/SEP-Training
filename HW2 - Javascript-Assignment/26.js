function longest_substring(str){
    let start = 0;
    let end = 1;
    let max_len = 1;
    let result = "";
    let charMap = {};
    let currLen = 1;
    let currStr = ""+str.charAt(0);
    charMap[str.charAt(0)] = true;
    while(end!=str.length){
        if(!charMap[str.charAt(end)]){
            currStr += str.charAt(end);
            currLen++;
            charMap[str.charAt(end)] = true;
            if(currLen>max_len){
                result = ""+currStr;
                max_len = 0+currLen;
            }
            end++;
        }else{
            currStr = currStr.substring(1);
            delete charMap[str.charAt(start)];
            currLen--;
            start++;
            if(start === end){
                currStr = ""+str.charAt(start);
                currLen = 1;
                charMap = {};
                charMap[str.charAt(start)] = true;
                end = start+1;
            }
        }   
    }
    return result;
}

console.log(longest_substring("abcabcasjdopa"))