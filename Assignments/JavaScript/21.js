possibleSubsets = (arr, sub_str_len) =>{
    let len = arr.length;
    let sub_strings = [];
    
    for(let start =0; start<len; start++)
        for(let j= start+1; j<len; j++){
            let sub = [];
            if(j+sub_str_len-1 <= len){
                sub.push(arr[start]);
                for(let end = j; end<j+sub_str_len-1; end++)
                    sub.push(arr[end]);
                
                sub_strings.push(sub);
            }
        }
    sub_strings.push(arr);
    
    return sub_strings;
};

console.log(possibleSubsets([1, 2, 3], 2));