function subset(arr,len){
    let result = arr.map(x=>[x]);
    while(len>1){
        let temp = [];
        for(const prefix of result){
            for(const el of arr){
                if(!prefix.includes(el)){
                    temp.push([...prefix,el]);
                }
            }
        }
        result = temp;
        len--;
    }
    return result
}

console.log(subset([1, 2, 3] ,2));