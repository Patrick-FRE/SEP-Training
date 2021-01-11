bubbleSort = arr => {
    let len = arr.length;
    for(let i = 0; i<len; i++)
        for(let j=0; j<len; j++)
            if(arr[i]>arr[j])   [arr[i], arr[j]] = [arr[j], arr[i]];
 
    return arr;
};

console.log(bubbleSort([54, 1, 46, 23, 76, 32]));