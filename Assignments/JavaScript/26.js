longestSubString = str => {
    let len = str.length;
    
    let temp_set = new Set();
    let temp_str = '';
    for(let i=0; i<len; i++){
        if(!temp_set.has(str[i]))   temp_set.add(str[i]);
        else    break;
    }
    let temp_set_len = temp_set.size;

    let set = new Set();
    for(let i=1; i<len; i++){
        set.forEach(val => set.delete(val));

        for(let j=i; j<len; j++){
            if(!set.has(str[j]))    set.add(str[j]);
            else    break;
        }
        if(temp_set_len < set.size){
            temp_set.forEach((val) => temp_set.delete(val));
            set.forEach((val) => temp_set.add(val));
            temp_set_len = set.size;
        }
    }

    temp_set.forEach(val => temp_str += val);
    
    return temp_str;
};

console.log(longestSubString('asdhflakjdshf'));