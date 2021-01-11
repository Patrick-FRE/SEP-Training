largerElements = (arr, ele) => {
    let larger_arr = [];
    arr.sort();
    for(let i=0; i<arr.length; i++)
        if(arr[i]>ele)  larger_arr.push(arr[i]);

    return larger_arr;
};

console.log(largerElements([23, 6, 3, 5, 78, 26, 99], 20));